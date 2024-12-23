

document.querySelector("title").innerHTML = det.name;


document.querySelector(".navbar-brand").innerHTML = det.name;


document.querySelectorAll('[data-ripple]').forEach(element => {
    element.addEventListener('click', function (e) {
        // Get the element's bounding box
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('span');

        // Set ripple size and position
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
        ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

        // Append ripple to the element and remove it after animation
        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600); // Matches the animation duration
    });
});
