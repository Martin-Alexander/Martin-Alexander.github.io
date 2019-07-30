import { postsThatShouldBeShown, renderNewPost } from "./renderPosts"

export const initializeInfiniteScroll = (data, postListElement, category, year) => {
  const posts = document.querySelector(".posts");
  if (posts === null) { return; }

  window.addEventListener("scroll", () => {
    const pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;

    if (pixelsToBottomOfPage < 1500) {
      const postIndex = document.querySelectorAll("article.post").length;
      const postData = postsThatShouldBeShown(data, category, year)[postIndex];

      if (postData !== undefined) {
        renderNewPost(postData, postListElement);
      }
    }
  });
}