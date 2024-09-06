document.addEventListener("DOMContentLoaded", () => {
    // Example: Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        // Simple validation (you can expand this)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
});
