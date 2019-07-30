import { setPosts } from "./setPosts";
import { initializeMobileMenu } from "./mobileMenu";
import { initializeInfiniteScroll } from "./infiniteScroll";
import { initializeFilterByYear } from "./filterByYear";
import { addArrowIconToLatest } from "./addArrowIconToLatest"
import { initializeFilterByCategory } from "./filterByCategory";

addArrowIconToLatest();

let category;
const categoryMatch = location.href.match(/\/category\/(?<category>\w+)/);
if (categoryMatch) { category = categoryMatch.groups.category }
const year = new URL(location.href).searchParams.get("year");
const postListElement = document.querySelector(".posts");

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const posts = document.querySelector(".posts");

if (posts) {
  footer.style.opacity = "0";
  footer.style.transition = "opacity 0.4s ease";

  main.style.opacity = "0";
  main.style.transition = "opacity 0.4s ease";
}

fetch("/feed.json").then(response => response.json()).then((data) => {
  setPosts(data, postListElement, category, year);
  initializeInfiniteScroll(data, postListElement, category, year)
  initializeFilterByYear(data);
  initializeFilterByCategory(data, postListElement)

  setTimeout(() => {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
}).catch(() => {
  setTimeout(() => {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
})

initializeMobileMenu();