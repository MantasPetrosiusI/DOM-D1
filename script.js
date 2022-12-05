/*
EX7: Write a function to change the h1 text to something else

*/
function changeH1(){
    let headings = document.getElementsByTagName('h1')[0];
    headings.innerHTML = "Potatoes";
}
/*

EX8: Write a function to change the page background color
*/

function changeBody(){
    let headings = document.getElementsByTagName('body')[0];
    headings.classList.add("body-new");
}    
//}
/*
EX9: Write a function to change the footer address with a fake one
*/
function changeFooter(){
    let foot = document.getElementById('foots');
    foot.innerHTML = "Fakest Steet 64, FakeCity ---Fake CO.---";
}
/*
EX10: Write a function to add a CSS class to every Amazon link
*/
function addClass(){
    let amaLink = document.getElementsByTagName('a')[0];
    amaLink.classList.add('amazon');
}
/*
EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
function changeVis() {
    let h1Node = document.querySelector('div.topFive');
    h1Node.classList.toggle('topFive');

    if (h1Node.style.visibility === "hidden") {
        h1Node.style.visibility = "visible";
      } else {
        h1Node.style.visibility = "hidden";
    }
}
EX12: Write a function to color the price of the products in a different way every time it’s invoked
*/