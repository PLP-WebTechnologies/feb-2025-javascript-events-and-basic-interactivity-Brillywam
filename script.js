document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Handling 🎈
    const eventButton = document.getElementById('eventButton');
    eventButton.addEventListener('click', () => {
        eventButton.textContent = "You clicked me!";
    });
    eventButton.addEventListener('dblclick', () => {
        alert("Secret double-click action activated!");
    });

    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = "lightblue";
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = "";
    });

    document.addEventListener('keypress', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // 2. Interactive Elements 🎮
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', () => {
        colorButton.style.backgroundColor = colorButton.style.backgroundColor === "red" ? "green" : "red";
    });

    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentImageIndex = 0;

    const galleryImage = document.getElementById('galleryImage');
    const nextImage = document.getElementById('nextImage');

    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    });

    const tabButtons = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tabContent');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(button.dataset.tab).style.display = 'block';
        });
    });

    // 3. Form Validation 📋✅
    const validationForm = document.getElementById('validationForm');

    validationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const emailError = email.nextElementSibling;
        const passwordError = password.nextElementSibling;

        emailError.textContent = "";
        passwordError.textContent = "";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            emailError.textContent = "Invalid email format.";
            valid = false;
        }

        if (password.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
        }
    });
});