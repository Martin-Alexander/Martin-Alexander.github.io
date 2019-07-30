const latestTag = document.querySelector("#latest");
const yearsList = document.querySelector("#years");

latestTag.insertAdjacentHTML("afterbegin", "<img id=\"carrot\" src=\"/assets/carrot.svg\" alt=\"\">");

fetch("/feed.json").then(response => response.json()).then((data) => {
  const uniqueYears = Array.from(new Set(data.items.map(item => new Date(item.date_published).getFullYear())));
  uniqueYears.forEach(year =>  yearsList.insertAdjacentHTML("beforeend", `
    <li class="button-round">
      <a href="/?year=${year}">
        ${year}
      </a>
    </li>
  `));

  latestTag.addEventListener("click", (event) => {
    event.preventDefault();

    yearsList.classList.toggle("show");
    if (yearsList.classList.contains("show")) {
      yearsList.style.height = `${uniqueYears.length * 38}px`;
    } else {
      yearsList.style.height = "0px";
    }

    latestTag.classList.toggle("blue-highlight");
  });

});

const MOBILE_MENU = document.querySelector("#mobile-menu");
const HAMBURGER_BUTTON = document.querySelector("#hamburger-button");
const CLOSE_MOBILE_MENU_BUTTON = document.querySelector("#close-mobile-menu");

HAMBURGER_BUTTON.addEventListener("click", () => {
  MOBILE_MENU.classList.add("show");
  document.body.classList.add("fix");
});

CLOSE_MOBILE_MENU_BUTTON.addEventListener("click", () => {
  MOBILE_MENU.classList.remove("show");
  document.body.classList.remove("fix");
});