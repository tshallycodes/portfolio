/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*==================== CERTIFICATE MODAL ====================*/
const certificateModal = document.querySelector('.certificate__modal');
const certificateModalImg = document.querySelector('.certificate__modal-img');
const certificateModalClose = document.querySelector('.certificate__modal-close');
const certificateButtons = document.querySelectorAll('.certifications__button');

// Function to open the certificate modal
function openCertificateModal(imgSrc) {
    certificateModalImg.src = imgSrc; // Set the image source
    certificateModal.classList.add('active-certificate-modal'); // Show the modal
}

// Function to close the certificate modal
function closeCertificateModal() {
    certificateModal.classList.remove('active-certificate-modal'); // Hide the modal
}

// Add event listeners to all "View Certificate" buttons
certificateButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const imgSrc = button.getAttribute('data-certificate'); // Get the image source from the data attribute
        openCertificateModal(imgSrc); // Open the modal with the certificate image
    });
});

// Close the modal when the close button is clicked
certificateModalClose.addEventListener('click', closeCertificateModal);

// Close the modal when clicking outside the modal content
certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) {
        closeCertificateModal();
    }
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// ========================= PORTFOLIO FILTERS  =========================
const filterContainer = document.querySelector('.portfolio__filters'),
    filterBtns = filterContainer.querySelectorAll('.portfolio__filter-btn'),
    portfolioItems = document.querySelectorAll('.portfolio__item');

// Add click event to all filter buttons
filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterBtns.forEach((button) => button.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Show/Hide items based on filter
        portfolioItems.forEach((item) => {
            const itemType = item.getAttribute('data-type');

            if (filterValue === 'all' || filterValue === itemType) {
                item.style.display = 'block';  // Show matching items
            } else {
                item.style.display = 'none';   // Hide non-matching items
            }
        });
    });
});


// ========================= PORTFOLIO SWIPER  ========================= 
document.querySelectorAll('.portfolio__view-btn').forEach(button => {
    button.addEventListener('click', () => {
        const images = button.dataset.images.split(',');
        const popupContent = document.querySelector('.portfolio__slider .swiper-wrapper');
        const popup = document.querySelector('.portfolio__popup');

        popupContent.innerHTML = images.map(img => `
    <div class="swiper-slide">
        <img src="${img}" alt="Project Screenshot" style="padding: 10px; border-radius: 30px;">
    </div>
`).join('');

        popup.style.display = 'flex';
        popup.style.animation = 'fade-in 0.5s forwards';
        popup.style.justifyContent = 'space-between';

        new Swiper('.portfolio__slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    });
});

document.querySelector('.portfolio__popup-close').addEventListener('click', () => {
    document.querySelector('.portfolio__popup').style.display = 'none';
});

document.querySelector('.portfolio__popup').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
});

// Responsive Layout Adjustments
function adjustLayout() {
    const container = document.querySelector('.portfolio__container');
    container.style.gridTemplateColumns = window.innerWidth < 400 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))';
}

window.addEventListener('resize', adjustLayout);
adjustLayout();

// Accessibility Enhancements
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Remove Duplicate Skills
const uniqueSkills = new Set();
document.querySelectorAll('.skills__name').forEach(skill => {
    if (uniqueSkills.has(skill.textContent)) {
        skill.parentElement.parentElement.remove();
    } else {
        uniqueSkills.add(skill.textContent);
    }
});

// Simplified Event Handling for Navigation
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav__menu').classList.remove('show-menu');
    });
});
/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})