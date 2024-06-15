document.addEventListener("DOMContentLoaded", () => {
    // Header Animation
    const header = document.querySelector("header");
    header.classList.add("slide-in-top");

    // Cards Animation
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("slide-in-left");
        }, index * 300);
    });

    // Footer Social Media Icons Animation
    const socialMediaIcons = document.querySelectorAll(".social-media a");
    socialMediaIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add("bounce-in");
        }, index * 200);
    });

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // Modal
    const modal1 = document.getElementById("modal1");
    const modal2 = document.getElementById("modal2");
    const modalBtn1 = document.getElementById("modalBtn1");
    const modalBtn2 = document.getElementById("modalBtn2");
    const closeButtons = document.querySelectorAll(".close");

    modalBtn1.onclick = function() {
        modal1.style.display = "block";
    }

    modalBtn2.onclick = function() {
        modal2.style.display = "block";
    }

    closeButtons.forEach(button => {
        button.onclick = function() {
            const modal = document.getElementById(button.getAttribute("data-modal"));
            modal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
});



//kontakt

document.addEventListener("DOMContentLoaded", () => {
    // Kontaktformular Submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        // Here you can do something with the form data, like sending it via AJAX
        // For demonstration purposes, let's just log the data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Clear form fields
        contactForm.reset();
        // Optionally, you can display a success message or redirect the user
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Dynamische Dienstleistungen
    const services = [
        { title: "Webentwicklung", description: "Erstellung moderner und responsiver Webseiten." },
        { title: "Grafikdesign", description: "Kreative Designs für Print und Web." },
        { title: "SEO", description: "Optimierung für Suchmaschinen zur Verbesserung der Sichtbarkeit." }
    ];

    const servicesContainer = document.getElementById("services-container");
    services.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("service");
        serviceElement.innerHTML = `
            <h2>${service.title}</h2>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });

    // Dynamische Blog-Beiträge
    const blogPosts = [
        { title: "Neuigkeiten in der Webentwicklung", snippet: "Erfahren Sie die neuesten Trends in der Webentwicklung." },
        { title: "Tipps für effektives Grafikdesign", snippet: "Erfahren Sie, wie Sie Ihr Design auf die nächste Stufe heben." },
        { title: "SEO Best Practices 2024", snippet: "Optimieren Sie Ihre Webseite für bessere Suchmaschinenergebnisse." }
    ];

    const blogContainer = document.getElementById("blog-container");
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.snippet}</p>
        `;
        blogContainer.appendChild(postElement);
    });
});


