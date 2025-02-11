document.addEventListener("DOMContentLoaded", function() {
    
    // Holen des Dark Mode Toggle Buttons
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Hinzufügen des Event-Listeners für den Klick
    darkModeToggle.addEventListener("click", () => {
        // Umstellen der dark-mode Klasse am Body-Tag
        document.body.classList.toggle("dark-mode");  
    });
});

    // Projektfilter
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Formular Validierung
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Bitte alle Felder ausfüllen!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Danke für deine Nachricht! Ich melde mich bald.";
        formMessage.style.color = "green";
        form.reset();
    });

