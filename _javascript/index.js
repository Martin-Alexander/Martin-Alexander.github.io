import { setPosts } from "./setPosts";
import { initializeMobileMenu } from "./mobileMenu";
import { initializeInfiniteScroll } from "./infiniteScroll";
import { initializeFilterByYear } from "./filterByYear";
import { initializeFilterByCategory } from "./filterByCategory";

export const getCategory = () => {
  let category;
  const categoryMatch = location.href.match(/\/category\/(?<category>\w+)/);
  if (categoryMatch) { category = categoryMatch.groups.category }
  return category;
}

export const getYear = () => {
  const year = new URL(location.href).searchParams.get("year");
  return year;
}

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
  setPosts(data, postListElement);
  initializeInfiniteScroll(data, postListElement)
  initializeFilterByYear(data, postListElement);
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