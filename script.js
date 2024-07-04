

function move_contact_slider() {
    var card = document.querySelector('.contact_slider');
    card.classList.toggle('show');

}

function setHashValue(hashValue) {
    window.location.hash = hashValue;
}

function goto_home() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function goto_projects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}


function goto_skills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}


function goto_qualification() {
    document.getElementById('qualification').scrollIntoView({ behavior: 'smooth' });
}


function goto_contact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= -450 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight - 150 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleElementVisibility() {
    var sections = {
        'home': document.querySelector('#home'),
        'projects': document.querySelector('#projects .div_heading'),
        'qualification': document.querySelector('#qualification .div_heading'),
        'skills': document.querySelector('#skills .div_heading'),
        'contact': document.querySelector('#contact .div_heading')
    };
    if (window.scrollY === 0) {
        var btn = document.querySelector('.is-focused');
        if (btn) {
            btn.classList.remove('is-focused');
        }
        var btn = document.querySelector('.home-nav');
        if (btn) {
            btn.classList.add('is-focused');
        }
    }
    for (var sectionId in sections) {
        if (sections.hasOwnProperty(sectionId)) {
            var section = sections[sectionId];
            var navButtonClass = '.' + sectionId + '-nav';

            if (isElementInViewport(section)) {
                var btn = document.querySelector('.is-focused');
                if (btn) {
                    btn.classList.remove('is-focused');
                }

                var navButton = document.querySelector(navButtonClass);
                if (navButton) {
                    navButton.classList.add('is-focused');
                }
                break;
            }
        }
    }
}

function toggle_nav() {
    var nav = document.querySelector('.nav');
    if (nav.classList.contains('show')) {
        hideNav();
    }
    else {
        showNav();
    }

}

function hideNav() {
    document.querySelector('.nav').classList.remove('show');
    document.querySelector('.nav-toggle').classList.remove('open');
}


function showNav() {
    document.querySelector('.nav').classList.add('show');
    document.querySelector('.nav-toggle').classList.add('open');
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
        handleElementVisibility();
    });


    document.addEventListener('click', function (event) {
        var nav = document.querySelector('.nav');
        var button = event.target.closest('.nav-toggle');

        if (!nav.contains(event.target) && !button) {
            hideNav();
        }
    });

    document.querySelectorAll('.see-more').forEach(button => {
        button.addEventListener('click', () => {
            const moreText = button.previousElementSibling;
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                button.innerText = "See less";
            } else {
                moreText.style.display = "none";
                button.innerText = " . . See more";
            }
        });
    });
});
