// Демо-форма заявки: проверяет поля и показывает подтверждение.
// В реальном проекте здесь отправка в Telegram или на почту.
document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.replace(/\D/g, "");
    if (name.length < 2) {
      status.textContent = "Укажите имя.";
      status.dataset.state = "error";
      form.elements.name.focus();
      return;
    }
    if (phone.length < 10) {
      status.textContent = "Укажите номер телефона полностью.";
      status.dataset.state = "error";
      form.elements.phone.focus();
      return;
    }
    status.textContent = `Спасибо, ${name}! Это демо-сайт, поэтому заявка никуда не отправлена.`;
    status.dataset.state = "ok";
    form.reset();
  });
});

// Плавная прокрутка и закрытие мобильного меню после выбора пункта.
document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  const nav = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    })
  );
});
