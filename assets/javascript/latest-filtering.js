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