import { setPosts } from "./setPosts";
import capitalize from "capitalize";

export const initializeFilterByCategory = (data, postList) => {
  if (!postList) { return; }

  const categoryButtons = document.querySelectorAll(".category");
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");
  const latestTag = document.querySelector("#latest");

  categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener("click", (event) => {
      const categoryName = categoryButton.dataset.categoryName;
      event.preventDefault();

      categoryButtons.forEach(btn => btn.classList.remove("blue-highlight"));
      latestTag.classList.remove("blue-highlight");
      categoryButton.classList.add("blue-highlight");

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
      url.pathname = `category/${categoryName}`;
      url.search = "";

      document.title = `${capitalize(categoryName)} · Matthew Bischoff`;
      window.history.pushState(document.title, document.title, url.toString());

      const latestAndCarrotHtml = `<img id="carrot" src="/assets/carrot.svg" alt=""><span>Latest</span>`;

      if (latestTag.innerHTML !== latestAndCarrotHtml) {
        latestTag.innerHTML = latestAndCarrotHtml;
      }
    });
  });
}