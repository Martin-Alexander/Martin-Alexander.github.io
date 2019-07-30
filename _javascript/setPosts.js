import { postsThatShouldBeShown, renderNewPost } from "./renderPosts"

export const setPosts = (data, postList, category, year) => {
  const posts = document.querySelector(".posts");
  if (posts === null) { return; }

  Array.from(document.querySelectorAll("article.post")).forEach(article => article.remove());
  postsThatShouldBeShown(data, category, year).slice(0, 5).forEach(post => renderNewPost(post, postList));
}
