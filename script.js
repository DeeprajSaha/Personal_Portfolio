
// menu option
const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.nav-lists');

hamburger.addEventListener('click',()=>{
    navLists.classList.toggle('active')
});

// about section

let tablinks = document.getElementsByClassName("tap-links");
let tabcontents = document.getElementsByClassName("tap-contents");


const opentab = (tabname) => {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab");
};