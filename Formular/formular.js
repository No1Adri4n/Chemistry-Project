document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const result = document.getElementById("resultMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // oprește comportamentul normal

    // Preia valorile din formular
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const opinion = document.getElementById("opinion").value.trim();

    // Afișează în consolă
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Opinion:", opinion);

    // Afișează mesaj de confirmare pe pagină
    result.innerHTML = `
      <p style="color: lightgreen; margin-top: 20px;">
        Thank you, <strong>${name}</strong>! Your feedback has been submitted successfully. 😊
      </p>
    `;

    // Resetează formularul
    form.reset();
  });
});
