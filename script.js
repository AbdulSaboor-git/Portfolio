var slider_visible = false;


function move_contact_slider() {
    var card = document.querySelector('.contact_slider');
    if (!slider_visible) {
        card.classList.add('show');
        slider_visible = true;
    }
    else {
        card.classList.remove('show');
        slider_visible = false;
    }
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

window.addEventListener('scroll', function () {
    handleElementVisibility();
});