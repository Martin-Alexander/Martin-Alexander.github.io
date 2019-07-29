const LATEST_YEARS = document.querySelector("#latest");
const YEARS_LIST = document.querySelector("#years");
const POSTS_LIST = document.querySelector(".posts");

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  footer.style.opacity = "0";
  footer.style.transition = "opacity 0.4s ease";

  main.style.opacity = "0";
  main.style.transition = "opacity 0.4s ease";

  fetch("/feed.json").then(response => response.json()).then((data) => {
    withPostData(data);
    setTimeout(() => {
      main.style.opacity = "1";
      footer.style.opacity = "1";
    }, 100);
  });
});

let CATEGORY;
categoryMatch = location.href.match(/\/category\/(?<category>\w+)/);
if (categoryMatch) { CATEGORY = categoryMatch.groups.category }

const year = new URL(location.href).searchParams.get("year");
LATEST_YEARS.insertAdjacentHTML("afterbegin", "<img id=\"carrot\" src=\"/assets/carrot.svg\" alt=\"\">");
Array.from(document.querySelectorAll("article.post")).forEach(article => article.remove());

const withPostData = (data) => {
  postsThatShouldBeShown(data).slice(0, 5).forEach(post => renderNewPost(post));

  const uniqueYears = Array.from(new Set(data.items.map(item => new Date(item.date_published).getFullYear())));
  uniqueYears.forEach(year =>  YEARS_LIST.insertAdjacentHTML("beforeend", `
    <li class="button-round">
      <a href="/?year=${year}">
        ${year}
      </a>
    </li>
  `));

  LATEST_YEARS.addEventListener("click", (event) => {
    event.preventDefault();

    YEARS_LIST.classList.toggle("show");
    if (YEARS_LIST.classList.contains("show")) {
      YEARS_LIST.style.height = `${uniqueYears.length * 38}px`;
    } else {
      YEARS_LIST.style.height = "0px";
    }

    LATEST_YEARS.classList.toggle("blue-highlight");
  });

  window.addEventListener("scroll", () => {
    const pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;

    if (pixelsToBottomOfPage < 1500) {
      const postIndex = document.querySelectorAll("article.post").length;
      const postData = postsThatShouldBeShown(data)[postIndex];

      if (postData !== undefined) {
        renderNewPost(postData);
      }
    }
  });
}

const postsThatShouldBeShown = (postsData) => {
  let posts = [];

  if (CATEGORY !== undefined) {
    posts = postsData.items.filter(post => post.categories.includes(CATEGORY));
  } else {
    posts = postsData.items;
  }

  if (year !== null) {
    posts = posts.filter(item => new Date(item.date_published).getFullYear() == year);
  }

  return posts;
}

// Rendering Posts

const renderNewPost = (postData) => {
  POSTS_LIST.insertAdjacentHTML("beforeend", postHTML(postData));
  const newPostElement = POSTS_LIST.querySelector(".post:last-child");

  const readMoreButton = newPostElement.querySelector(".read-more > a");

  if (readMoreButton) {
    const readMoreContent = newPostElement.querySelector(".read-more-content");

    readMoreButton.addEventListener("click", (event) => {
      event.preventDefault();

      readMoreContent.style.display = "block";
      setTimeout(() => { readMoreContent.style.opacity = "1"; }, 100 );

      const url = new URL(location.href);
      url.pathname = postData.url;

      document.title = `${postData.title} · Matthew Bischoff`;
      window.history.pushState(document.title, document.title, url.toString());

      readMoreButton.remove();
    });
  }
}

const postHTML = (postData) => {
  let html;

  if (postData.format == "tweet") {
    html = tweetPostHTML(postData);
  } else if (postData.format == "link") {
    html = linkPostHTML(postData);
  } else {
    html = longFormPostHTML(postData);
  }

  return `
    <article class="post">
      ${html}
    </article>
  `
}

const longFormPostHTML = (postData) => {
  const url = postData.url;
  const title = postData.title;
  let content;

  if (postData.content_html.includes("<!-- more -->")) {
    const splitContent = postData.content_html.split("<!-- more -->")
    content = splitContent[0];
    content += `
      <div class="read-more">
        <a href="${url}"> Read More </a>
      </div>
      <div class="read-more-content">
        ${splitContent[1]}
      <div>
    `
  } else {
    content = postData.content_html;
  }

  return `
    <div class="long-form-post">
      ${dateHTML(postData.date_published)}

      <a href="${url}">
        <h2 class="post-title">
          ${title}
        </h2>
      </a>

      ${content}
    </div>
  `
}

const linkPostHTML = (postData) => {
  const link = postData.external_url;
  const title = postData.title;

  return `
    <div class="link-post">
      ${dateHTML(postData.date_published)}

      <h2><a href="${link}" target="_blank">${title}</a></h2>
    </div>
  `
}

const tweetPostHTML = (postData) => {
  const colour = postData.colour;
  const content = postData.content_html;

  return `
    <div class="short-form-post">
      <div class="colour-${colour}"></div>
      <div class="colour-dark-${colour}">
        ${dateHTML(postData.date_published)}
        ${content}
      </div>
    </div>
  `
}

const dateHTML = (postPublishedAt) => {
  const xmlSchemaData = postPublishedAt;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(postPublishedAt).toLocaleDateString("en-US", options);

  return `<time datetime="${xmlSchemaData}" class="post-date">${date}</time>`
}

