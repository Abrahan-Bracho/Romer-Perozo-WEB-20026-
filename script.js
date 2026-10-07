const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const lightbox = document.querySelector('.lightbox');
const enlargedImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(button => {
  button.addEventListener('click', () => {
    enlargedImage.src = button.dataset.image;
    enlargedImage.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});
lightbox.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const whatsappContact = document.querySelector('.whatsapp-contact');
const whatsappNumber = whatsappContact.dataset.whatsappNumber.replace(/\D/g, '');
if (whatsappNumber) {
  const greeting = 'Hola, maestro Romer. Me gustaría recibir información sobre sus clases de artes marciales.';
  whatsappContact.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(greeting)}`;
  whatsappContact.hidden = false;
}
