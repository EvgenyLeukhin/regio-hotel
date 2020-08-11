// import scss file
import '../scss/styles.scss';

// jq-code
$(document).ready(() => {
  const burgerBtn = $(".js-burger-btn");
  const mobileMenu = $(".js-mobile-menu");
  const mobileSubmenuLink = $(".js-mobile-submenu-link");

  // show mobile-menu
  burgerBtn.on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    burgerBtn.toggleClass("close");
    mobileMenu.toggleClass("show");
    $('body').toggleClass("js-overlay");
  });

  // show mobile-submenu
  mobileSubmenuLink.on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("open");
  });

  // click outside handler when mobile menu is open
  $(document).click(function () {
    burgerBtn.removeClass("close");
    mobileMenu.removeClass("show");
    $("body").removeClass("js-overlay");
  });

  // stopPropagation inside mobileMenu
  mobileMenu.click(function(e) {
    e.stopPropagation();
  });
});

