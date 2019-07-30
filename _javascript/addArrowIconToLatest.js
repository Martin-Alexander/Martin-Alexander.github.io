export const addArrowIconToLatest = () => {
  const latestTag = document.querySelector("#latest");

  if (latestTag === null) { return; }

  latestTag.insertAdjacentHTML("afterbegin", "<img id=\"carrot\" src=\"/assets/carrot.svg\" alt=\"\">");
}