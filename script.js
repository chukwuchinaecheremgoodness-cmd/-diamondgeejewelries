document.addEventListener("DOMContentLoaded", () => {
    console.log("Diamondgee Jewelries website loaded.");

    const orderButtons = document.querySelectorAll(".product a");

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for choosing Diamondgee Jewelries! You will now be redirected to WhatsApp.");
        });
    });
});