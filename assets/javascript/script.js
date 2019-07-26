const latestTag = document.querySelector("#latest");
const yearsList = document.querySelector("#years");
const postsList = document.querySelector(".posts");

latestTag.insertAdjacentHTML("afterbegin", "<img id=\"carrot\" src=\"/assets/carrot.svg\" alt=\"\">");

const withPostData = (data) => {
  const uniqueYears = Array.from(new Set(data.items.map(item => new Date(item.date_published).getFullYear())));
  uniqueYears.forEach(year =>  yearsList.insertAdjacentHTML("beforeend", `<li class="button-round">${year}</li>`));

  latestTag.addEventListener("click", (event) => {
    event.preventDefault();

    yearsList.classList.toggle("show");
    latestTag.classList.toggle("blue-highlight");
  });

  window.addEventListener("scroll", () => {
    const pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;

    if (pixelsToBottomOfPage < 1500) {
      const postIndex = getNextPost();
      const postData = data.items[postIndex];

      if (postData !== undefined) {
        postsList.insertAdjacentHTML("beforeend", postHTML(postData, postIndex));
      }
    }
  });
}

fetch("/feed.json").then(response => response.json()).then(withPostData)


const getNextPost = () => {
  return parseInt(document.querySelector("article:last-child").dataset.postIndex) + 1;
}

// Rendering Posts

const postHTML = (postData, index) => {
  let html;

  if (postData.format == "tweet") {
    html = tweetPostHTML(postData);
  } else if (postData.format == "link") {
    html = linkPostHTML(postData);
  } else {
    html = longFormPostHTML(postData);
  }

  return `
    <article data-post-index="${index}" class="post">
      ${html}
    </article>
  `
}

const longFormPostHTML = (postData) => {
  const url = postData.url;
  const title = postData.title;
  let content;

  if (postData.content_html.includes("<!-- more -->")) {
    content = postData.content_html.split("<!-- more -->")[0];
    content += `
      <div class="read-more">
        <a href="${url}"> Read More </a>
      </div>
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
  const content = postData.content;

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

