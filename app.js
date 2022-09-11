// *************** Variable *************
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const cont = document.querySelector("#cont");
const inurl = document.querySelector("#url");
const downl = document.querySelector("#downl");
let site = "";
let nom = "";
url1 = "http://www.google.com/s2/favicons?domain=" + nom;
url2 = "https://logo.clearbit.com/" + nom;
url = "";
// *************** Variable *************
// *
// *

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    img1.src = "";
    img2.src = "";
    cont.clientHeight = 0;
    nom = inurl.value;
    console.log(nom);
    url1 = "http://www.google.com/s2/favicons?domain=" + nom;
    url2 = "https://logo.clearbit.com/" + nom;
    img1.src = url1;
    img2.src = url2;

    setTimeout(() => {
      console.log(cont.clientHeight);
      if (cont.offsetHeight > 100) {
        img1.style.display = "none";
        url = url2;
        inurl.style.backgroundImage = "url(" + url + ")";
      } else {
        url = url1;
        inurl.style.backgroundImage = "url(" + url + ")";
      }
      console.log(cont.offsetHeight);
    }, 20);
  }
});
