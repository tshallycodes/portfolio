"use client";
import { useEffect, useRef, useState } from "react";
import { useMotion } from "./motion";
export function HeroScene() {
  const host = useRef<HTMLDivElement>(null);
  const { motion } = useMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const mount = host.current;
    if (!mount) return;
    let disposed = false;
    let cleanup = () => {};
    import("three")
      .then((THREE) => {
        if (disposed) return;
        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "low-power",
          });
        } catch {
          return;
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
        camera.position.set(0, 0, 8.5);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.35;
        mount.appendChild(renderer.domElement);
        renderer.domElement.setAttribute("aria-hidden", "true");
        const object = new THREE.Group();
        scene.add(object);
        const geometry = new THREE.TorusKnotGeometry(1.16, 0.4, 160, 28, 2, 3);
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x4263fc,
          metalness: 0.52,
          roughness: 0.22,
          clearcoat: 1,
          clearcoatRoughness: 0.12,
        });
        object.add(new THREE.Mesh(geometry, material));
        const wireGeometry = new THREE.IcosahedronGeometry(2.16, 1);
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: 0x2d48c7,
          wireframe: true,
          transparent: true,
          opacity: 0.13,
        });
        const wire = new THREE.Mesh(wireGeometry, wireMaterial);
        object.add(wire);
        const ringGeometry = new THREE.TorusGeometry(2.4, 0.008, 8, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0x617ada,
          transparent: true,
          opacity: 0.35,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = 1.2;
        object.add(ring);
        const positions = new Float32Array(90 * 3);
        for (let i = 0; i < 90; i++) {
          const theta = i * 2.399;
          const r = 2.6 + (i % 7) * 0.065;
          positions[i * 3] = Math.cos(theta) * r;
          positions[i * 3 + 1] = Math.sin(theta) * r;
          positions[i * 3 + 2] = Math.sin(i * 0.9) * 0.7;
        }
        const pointGeometry = new THREE.BufferGeometry();
        pointGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3),
        );
        const pointMaterial = new THREE.PointsMaterial({
          color: 0x4664d1,
          size: 0.022,
          transparent: true,
          opacity: 0.55,
        });
        const points = new THREE.Points(pointGeometry, pointMaterial);
        scene.add(points);
        scene.add(new THREE.HemisphereLight(0xe6f1ff, 0x133ac7, 3));
        const key = new THREE.DirectionalLight(0xffffff, 6);
        key.position.set(-3, 4, 5);
        scene.add(key);
        const fill = new THREE.DirectionalLight(0xadc7ff, 4);
        fill.position.set(4, -2, 2);
        scene.add(fill);
        const rim = new THREE.DirectionalLight(0xffffff, 5);
        rim.position.set(2, 3, -4);
        scene.add(rim);
        let pointerX = 0,
          pointerY = 0,
          frame = 0,
          active = true,
          visible = true;
        const resize = () => {
          camera.aspect = mount.clientWidth / Math.max(mount.clientHeight, 1);
          camera.updateProjectionMatrix();
          renderer.setSize(mount.clientWidth, mount.clientHeight);
          renderer.render(scene, camera);
        };
        const ro = new ResizeObserver(resize);
        ro.observe(mount);
        resize();
        const move = (e: PointerEvent) => {
          const box = mount.getBoundingClientRect();
          pointerX = ((e.clientX - box.left) / box.width - 0.5) * 0.65;
          pointerY = ((e.clientY - box.top) / box.height - 0.5) * 0.45;
        };
        mount.addEventListener("pointermove", move, { passive: true });
        const reset = () => {
          pointerX = 0;
          pointerY = 0;
        };
        mount.addEventListener("pointerleave", reset);
        const onVisibility = () => {
          visible = !document.hidden;
        };
        document.addEventListener("visibilitychange", onVisibility);
        const observer = new IntersectionObserver(([entry]) => {
          active = entry.isIntersecting;
        });
        observer.observe(mount);
        object.rotation.set(0.3, -0.3, -0.24);
        setReady(true);
        const render = (time: number) => {
          if (disposed) return;
          if (active && visible && motion) {
            object.rotation.y +=
              (pointerX + time * 0.000075 - object.rotation.y) * 0.025;
            object.rotation.x += (0.3 + pointerY - object.rotation.x) * 0.035;
            object.position.y = Math.sin(time * 0.0006) * 0.09;
            wire.rotation.y = -time * 0.00009;
            ring.rotation.z = time * 0.00012;
            points.rotation.z = time * 0.000025;
            renderer.render(scene, camera);
          }
          frame = requestAnimationFrame(render);
        };
        if (motion) frame = requestAnimationFrame(render);
        else renderer.render(scene, camera);
        cleanup = () => {
          cancelAnimationFrame(frame);
          ro.disconnect();
          observer.disconnect();
          mount.removeEventListener("pointermove", move);
          mount.removeEventListener("pointerleave", reset);
          document.removeEventListener("visibilitychange", onVisibility);
          geometry.dispose();
          material.dispose();
          wireGeometry.dispose();
          wireMaterial.dispose();
          ringGeometry.dispose();
          ringMaterial.dispose();
          pointGeometry.dispose();
          pointMaterial.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {});
    return () => {
      disposed = true;
      cleanup();
    };
  }, [motion]);
  return (
    <div className="signal-scene">
      <div
        ref={host}
        className="webgl-host"
        aria-label="An abstract blue 3D knot representing connected ideas"
        role="img"
      />
      <div
        className={ready ? "signal-fallback is-hidden" : "signal-fallback"}
        aria-hidden="true"
      >
        <div />
        <div />
        <div />
      </div>
      <div className="scene-caption">
        <span>Ideas are better connected.</span>
        <span>
          {motion ? "Move your pointer to explore" : "A moment of stillness"}
        </span>
      </div>
    </div>
  );
}
