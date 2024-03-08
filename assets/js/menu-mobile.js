document.addEventListener("DOMContentLoaded", (event) => {
  const mobile_btn = document.querySelector(".navbar__mobile-btn");
  const mobile_menu = document.querySelector(".menu-mobile");

  mobile_btn.addEventListener("click", () => {
    let show = document.querySelector(".menu-mobile--show");
    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  });

  //   mobile menu to close automatically if media query changes over 1024px and menu is open
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  //   close when clicking on x
  let btn_close = document.querySelector(".menu-mobile__close");
  btn_close.addEventListener("click", () => {
    mobile_menu.classList.remove("menu-mobile--show");
  });

  //   show submenus in mobile nav bar
  let menu_item = document.querySelectorAll(".menu-mobile__item");
  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenuLinks = item.querySelectorAll(".submenu-mobile__link");
      submenuLinks.forEach((link) => {
        if (link.style.display === "block") {
          link.style.display = "none";
        } else {
          link.style.display = "block";
        }
      });
    });
  });
});
