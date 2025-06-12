document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Oprește trimiterea formularului

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const opinion = document.getElementById("opinion").value.trim();

    // Poți folosi și un obiect
    const data = {
      Name: name,
      Email: email,
      Password: password,
      Opinion: opinion,
    };

    console.log("Form data received:", data);
    alert("Thank you for your feedback!");

    form.reset(); // Golește câmpurile
  });
});
