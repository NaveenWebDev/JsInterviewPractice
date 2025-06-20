
const form = document.getElementById("myForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Form Submitted:", data);
}
