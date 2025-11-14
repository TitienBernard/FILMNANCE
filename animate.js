document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("menu-btn");
  const menu = document.getElementById("drop_down_menu");

  burger.addEventListener("mouseenter", () => {
    menu.classList.add("show");
  });

  burger.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menu.matches(":hover")) menu.classList.remove("show");
    }, 150);
  });

  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
  });

  menu.addEventListener("mouseenter", () => {
    menu.classList.add("show");
  });
});
