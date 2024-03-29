/*
EX7: Write a function to change the h1 text to something else

*/
function changeH1() {
  let headings = document.getElementsByTagName("h1")[0];
  headings.innerHTML = "Potatoes";
}
/*

EX8: Write a function to change the page background color
*/

function changeBody() {
  let headings = document.getElementsByTagName("body")[0];
  headings.classList.add("body-new");
}
//}
/*
EX9: Write a function to change the footer address with a fake one
*/
function changeFooter() {
  let foot = document.getElementById("foots");
  foot.innerHTML = "Fakest Steet 64, FakeCity ---Fake CO.---";
}
/*
EX10: Write a function to add a CSS class to every Amazon link
*/
function addClass() {
  let amaLink = document.getElementsByTagName("a");
  for (let i = 0; i < amaLink.length; i++) {
    amaLink[i].classList.add("amazon");
  }
}
/*
EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
*/
function changeVis() {
  let h1Node = document.getElementsByTagName("img");
  for (let i = 0; i < h1Node.length; i++) {
    h1Node[i].classList.toggle("vis");
    console.log(h1Node[i]);
  }
}
/*
EX12: Write a function to color the price of the products in a different way every time it’s invoked
*/
function changeColor() {
  let rColor = Math.floor(Math.random() * 256);
  let gColor = Math.floor(Math.random() * 256);
  let bColor = Math.floor(Math.random() * 256);
  let priceNodes = document.getElementsByClassName("price");
  for (let i = 0; i < priceNodes.length; i++) {
    priceNodes[i].style.color = `rgb(${rColor}, ${gColor}, ${bColor})`;
  }
}
