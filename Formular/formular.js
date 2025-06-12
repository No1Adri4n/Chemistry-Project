document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const opinion = form.opinion.value.trim();

    // Poți adăuga validări suplimentare dacă dorești

    const formData = {
      name,
      email,
      password,
      opinion
    };

    console.log('Form data received:', formData);

    alert(`Thank you for your feedback, ${name}!`);

    form.reset();
  });
});
