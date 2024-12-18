// index.js

document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = parseInt(this.getAttribute('data-offset'), 10); 

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop + offset,
                behavior: 'smooth'
            });
        }

        document.getElementById('nav-links').classList.remove('active');
    });
    

});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    let isLightTheme = false;

    themeToggle.addEventListener('click', () => {
        isLightTheme = !isLightTheme; // Перемикання між темами
        document.body.classList.toggle('light-theme', isLightTheme);
        // Оновлення тексту кнопки
        themeToggle.textContent = isLightTheme ? 'Змінити на темну тему' : 'Змінити на світлу тему';
    });
});