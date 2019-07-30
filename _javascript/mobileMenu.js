export const initializeMobileMenu = () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const hamburgerButton = document.querySelector("#hamburger-button");
  const mobileMenuButton = document.querySelector("#close-mobile-menu");

  if ([mobileMenu, hamburgerButton, mobileMenuButton].some(element => element === null)) {
    return false;
  }

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    document.body.classList.add("fix");
  });

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("fix");
  });
}