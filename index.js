"no strict";

const breadcrumb = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const container = document.querySelector(".breadcrumb_container");
const btn = document.querySelector("button");

// funktion med at breadcrumb først skal vises når man trykker virker ikke.
    container.classList.add("hidden");
    btn.addEventListener("click", showBreadcrumb(breadcrumb));


function showBreadcrumb(arr) {
  arr.forEach((each) => {
    container.classList.remove("hidden");
    container.innerHTML += `<a href=${each.link}><li>${each.name}</li></a> `;
  });
}

// TO DO 
// 1. bc skal være usynlig ved sideload men synlig ved tryk på knap
// 2. der skal ikke være / efter sidste link
// 3. Der skal fjernes link helt fra sidste objekt i Array