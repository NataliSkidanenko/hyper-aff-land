const form = document.getElementById('form');
const successPopup = document.getElementById('success');
const closeSuccess = document.getElementById('success-close');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const contact = form.contact.value;
  const message = form.message.value;
  successPopup.style.display = 'grid';
  document.body.overflow = 'hidden';
  form.reset();
  await postData('http://localhost:3030/contact', { contact: contact, message: message });
});

closeSuccess.addEventListener('click', () => {
  successPopup.style.display = 'none';
  document.body.overflow = 'auto';
});

async function postData(url, data) {
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
