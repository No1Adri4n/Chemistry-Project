document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne trimiterea către server

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const opinion = document.getElementById('opinion').value.trim();

    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Opinion:', opinion);

    alert('Thank you for your feedback!');
    form.reset(); // Golește câmpurile
  });
});
