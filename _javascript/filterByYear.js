import { setPosts } from "./setPosts";

export const initializeFilterByYear = (data, postList) => {
  const latestTag = document.querySelector("#latest");
  const yearsList = document.querySelector("#years");
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");

  if ([latestTag, yearsList].some(element => element === null)) { return; }

  const uniqueYears = Array.from(new Set(data.items.map(item => new Date(item.date_published).getFullYear())));
  uniqueYears.forEach((year) =>  {
    yearsList.insertAdjacentHTML("beforeend", `
      <li class="button-round">
        <a class="year" data-year="${year}" href="/?year=${year}">
          ${year}
        </a>
      </li>
    `);
  });

  document.querySelectorAll(".year").forEach((yearButton) => {
    yearButton.addEventListener("click", (event) => {
      const year = parseInt(yearButton.dataset.year);

      event.preventDefault();

      footer.style.opacity = "0";
      main.style.opacity = "0";

      setTimeout(() => {
        setPosts(data, postList);
        setTimeout(() => {
          main.style.opacity = "1";
          footer.style.opacity = "1";
        }, 300);
      }, 300);

      const url = new URL(location.href);
      url.pathname = "";
      url.search = `year=${year}`;

      document.title = `${year} · Matthew Bischoff`;
      window.history.pushState(document.title, document.title, url.toString());

      yearsList.style.height = "0px";
      yearsList.classList.toggle("show");
      setTimeout(() => {
        latestTag.classList.toggle("blue-highlight");
      }, 200);
    });
  });

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
}