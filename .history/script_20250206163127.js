// Toggle section visibility
function toggleSection(sectionId) {
    const sections = document.getElementsByClassName('toggle-section');
    for (let section of sections) {
        section.style.display = 'none';
    }
    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Projects hover functionality
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Education section toggle
function toggleEducationType(type) {
    const tertiary = document.querySelectorAll('.education-item[data-type="tertiary"]');
    const highschool = document.querySelectorAll('.education-item[data-type="highschool"]');

    if (type === 'tertiary') {
        tertiary.forEach(el => el.style.display = 'block');
        highschool.forEach(el => el.style.display = 'none');
    } else {
        tertiary.forEach(el => el.style.display = 'none');
        highschool.forEach(el => el.style.display = 'block');
    }
}

// Skills hover effect
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.2)';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Enable smooth scrolling for all nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});