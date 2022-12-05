/*
EX7: Write a function to change the h1 text to something else

*/
function changeVis() {
    let h1Node = document.querySelector('div.topFive');
    h1Node.classList.toggle('topFive');

    if (h1Node.style.visibility === "hidden") {
        h1Node.style.visibility = "visible";
      } else {
        h1Node.style.visibility = "hidden";
    }
}

/*

EX8: Write a function to change the page background color

EX9: Write a function to change the footer address with a fake one

EX10: Write a function to add a CSS class to every Amazon link

EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of the products in a different way every time it’s invoked
*/