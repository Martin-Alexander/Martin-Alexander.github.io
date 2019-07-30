export const initializeFilterByYear = (data) => {
  const latestTag = document.querySelector("#latest");
  const yearsList = document.querySelector("#years");

  if ([latestTag, yearsList].some(element => element === null)) { return; }

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
}