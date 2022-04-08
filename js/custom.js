/* Navbar 
*/
{
let pgStatus = false;
let pgStatusP = false;
let blStatus = false;
let blStatusP = false;
let nvbrTgglrStatus = false;


let nvbrTgglrSelector = document.querySelector(".nvbr .container .row .col .nvbr-nv");
let pgSelector = document.querySelector(".nvbr .container .row .col ul li .pg-drpdn");
let blSelector = document.querySelector(".nvbr .container .row .col ul li .bl-drpdn");
let pgSelectorP = document.querySelector(".nvbr .container .row .col ul li .pg-drpdnp");
let blSelectorP = document.querySelector(".nvbr .container .row .col ul li .bl-drpdnp");
let pgIconSelector = document.querySelector(".nvbr .container .row .col .nvbr-nv ul li:nth-child(4) a i");
let blIconSelector = document.querySelector(".nvbr .container .row .col .nvbr-nv ul li:nth-child(5) a i");
let pgIconSelectorP = document.querySelector(".nvbr .container .row .col .nvbr-nvp ul li:nth-child(4) a i");
let blIconSelectorP = document.querySelector(".nvbr .container .row .col .nvbr-nvp ul li:nth-child(5) a i");





blSelector.style.transition = "0.3s";
pgSelector.style.transition = "0.3s";
blSelectorP.style.transition = "0.3s";
pgSelectorP.style.transition = "0.3s";
nvbrTgglrSelector.style.transition = "height 0.5s";

function nvbrTgglr(){
    if (nvbrTgglrStatus === false){
        if (blStatus === true) nvbrTgglrSelector.style.height = "325px";//320px
        else if (pgStatus === true) nvbrTgglrSelector.style.height = "360px";//355px
        else nvbrTgglrSelector.style.height = "235px";//230px
        nvbrTgglrStatus = true;
    } else {
        nvbrTgglrSelector.style.height = "0px";
        nvbrTgglrStatus = false;
    }
}



function pgSlider(){
    if (pgStatus === false){
        if (blStatus === true){
            blSelector.style.height = "0px";
            blSelector.style.padding = "0px";
            blIconSelector.style.transform = "rotate(0deg)";
            blStatus = false;
        }
        pgSelector.style.height = "auto";
        nvbrTgglrSelector.style.height = "360px";
        pgIconSelector.style.transform = "rotate(180deg)";
        pgSelector.style.padding = "10px 0";
        pgStatus = true;
    } else if (pgStatus === true) {
        pgSelector.style.height = "0px";
        nvbrTgglrSelector.style.height = "235px";
        pgIconSelector.style.transform = "rotate(0deg)";
        pgSelector.style.padding = "0px";
        pgStatus = false;
    }
}

function blSlider(){
    if (blStatus === false){
        if (pgStatus === true){
            pgSelector.style.height = "0px";
            pgSelector.style.padding = "0px";
            pgIconSelector.style.transform = "rotate(0deg)";
            pgStatus = false;
        }
        blSelector.style.height = "auto";
        nvbrTgglrSelector.style.height = "325px";
        blIconSelector.style.transform = "rotate(180deg)";
        blSelector.style.padding = "10px 0";
        blStatus = true;
    } else if (blStatus === true) {
        blSelector.style.height = "0px";
        nvbrTgglrSelector.style.height = "235px";
        blIconSelector.style.transform = "rotate(0deg)";
        blSelector.style.padding = "0px";
        blStatus = false;
    }
}

// End of Navbar toggler 

function pgSliderp(){
    if (pgStatusP === false){
        if (blStatusP === true){
            blSelectorP.style.height = "0px";
            blIconSelectorP.style.transform = "rotate(0deg)";
            blStatusP = false;
        }
        pgSelectorP.style.height = "120px";
        pgIconSelectorP.style.transform = "rotate(180deg)";
        pgStatusP = true;
    } else if (pgStatusP === true) {
        pgSelectorP.style.height = "0px";
        pgIconSelectorP.style.transform = "rotate(0deg)";
        pgStatusP = false;
    }
}

function blSliderp(){
    if (blStatusP === false){
        if (pgStatusP === true){
            pgSelectorP.style.height = "0px";
            pgIconSelectorP.style.transform = "rotate(0deg)";
            pgStatusP = false;
        }
        blSelectorP.style.height = "84px";
        blIconSelectorP.style.transform = "rotate(180deg)";
        blStatusP = true;
    } else if (blStatusP === true) {
        blSelectorP.style.height = "0px";
        blIconSelectorP.style.transform = "rotate(0deg)";
        blStatusP = false;
    }
}
}


/* Slider */




/* Menu */
{
let allMenuStatus = true;
let drinksStatus = true;
let lunchStatus = true;
let dinnerStatus = true;

let allMenu = document.querySelectorAll("#menu-section .container .row .col-12.col-md-6.col-lg-4");
let drinks = document.querySelectorAll("#menu-section .container .row .col-12.col-md-6.col-lg-4.drinks");
let lunch = document.querySelectorAll("#menu-section .container .row .col-12.col-md-6.col-lg-4.lunch");
let dinner = document.querySelectorAll("#menu-section .container .row .col-12.col-md-6.col-lg-4.dinner");


let allBtn = document.querySelector("#menu-section .container .row .col .menu-btn ul li:nth-child(1) a");
let drinksBtn = document.querySelector("#menu-section .container .row .col .menu-btn ul li:nth-child(2) a");
let lunchBtn = document.querySelector("#menu-section .container .row .col .menu-btn ul li:nth-child(3) a");
let dinnerBtn = document.querySelector("#menu-section .container .row .col .menu-btn ul li:nth-child(4) a");

let x = drinks.length;
let y = lunch.length;
let z = dinner.length;

    
function menuAll(){
    if (allMenuStatus === false) allBtn.classList.add("menu-active");
    if (drinksStatus === true) drinksBtn.classList.remove("menu-active");
    if (lunchStatus === true) lunchBtn.classList.remove("menu-active");
    if (dinnerStatus === true) dinnerBtn.classList.remove("menu-active");
    
    
    
    if (drinksStatus === false) for (let i = 0; i < x; ++i) {
        drinks[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            drinks[i].style.transform = "scale(1,1)";
        },200);
    }
    if (lunchStatus === false) for (let i = 0; i < y; ++i) {
        lunch[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            lunch[i].style.transform = "scale(1,1)";
        },200);
    }
    if (dinnerStatus === false) for (let i = 0; i < z; ++i) {
        dinner[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            dinner[i].style.transform = "scale(1,1)";
        },200);
    }
    
    
    allMenuStatus = true;
    drinksStatus = true;
    lunchStatus = true;
    dinnerStatus = true;
}

function menuDrinks(){
    if (allMenuStatus === true) allBtn.classList.remove("menu-active");
    if (lunchStatus === true) lunchBtn.classList.remove("menu-active");
    if (dinnerStatus === true) dinnerBtn.classList.remove("menu-active");
    drinksBtn.classList.add("menu-active");
    
    
    
    
    if (lunchStatus === true) for (let i = 0; i < y; ++i) {
        lunch[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            lunch[i].style.display = "none";
        },200);
    }
    
    if (dinnerStatus === true) for (let i = 0; i < z; ++i) {
        dinner[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            dinner[i].style.display = "none";
        },200);
    }
    if (drinksStatus === false) for (let i = 0; i < x; ++i) {
        drinks[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            drinks[i].style.transform = "scale(1,1)";
        },200);
        
    }
    
    allMenuStatus = false;
    drinksStatus = true;
    lunchStatus = false;
    dinnerStatus = false;
}

function menuLunch(){
    if (allMenuStatus === true) allBtn.classList.remove("menu-active");
    if (drinksStatus === true) drinksBtn.classList.remove("menu-active");
    if (dinnerStatus === true) dinnerBtn.classList.remove("menu-active");
    lunchBtn.classList.add("menu-active");
    
    if (drinksStatus === true) for (let i = 0; i < x; ++i) {
        drinks[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            drinks[i].style.display = "none";
        },200);
    }
    
    if (dinnerStatus === true) for (let i = 0; i < z; ++i) {
        dinner[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            dinner[i].style.display = "none";
        },200);
    }
    if (lunchStatus === false) for (let i = 0; i < y; ++i) {
        lunch[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            lunch[i].style.transform = "scale(1,1)";
        },200);
    }
    
    allMenuStatus = false;
    drinksStatus = false;
    lunchStatus = true;
    dinnerStatus = false;
}

function menuDinner(){
    if (allMenuStatus === true) allBtn.classList.remove("menu-active");
    if (drinksStatus === true) drinksBtn.classList.remove("menu-active");
    if (lunchStatus === true) lunchBtn.classList.remove("menu-active");
    dinnerBtn.classList.add("menu-active");
    
    if (drinksStatus === true) for (let i = 0; i < x; ++i) {
        drinks[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            drinks[i].style.display = "none";
        },200);
    }
    if (lunchStatus === true) for (let i = 0; i < y; ++i) {
        lunch[i].style.transform = "scale(0,0)";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            lunch[i].style.display = "none";
        },200);
    }
    
    if (dinnerStatus === false) for (let i = 0; i < z; ++i) {
        dinner[i].style.display = "block";
        let menuInterval = setInterval(function (){
            clearInterval(menuInterval);
            dinner[i].style.transform = "scale(1,1)";
        },200);
    }
   
    allMenuStatus = false;
    drinksStatus = false;
    lunchStatus = false;
    dinnerStatus = true;
}

    
}


/* Gallery */

{
let galleryImage = document.querySelector(".galley-image");
let imgParent = document.querySelector(".galley-image .img-gl");
let imgNodeList = document.querySelectorAll("#gallery-section .row:nth-child(2) > div");
let imgNodeListLength = imgNodeList.length;
let galleryTimeout;
let imgTimeout;
let imgCounter;
let imgContainer;
let imgOpacityCounter = 0.0;
let galleryOpacityCounter = 0.0;
let imgIncreasorcStatus = false;
let imgShiftStatus = false;
let imgShiftName = "none";

function galleryOpener(omgNo){
    
    let newImage = document.createElement("img");
    newImage.setAttribute("src","img/gallery-img-0" + omgNo + ".jpg");
    imgParent.appendChild(newImage);
    galleryImage.style.display = "block";
    galleryImage.style.opacity = "0";
    newImage.style.opacity = "0";
    imgContainer = newImage;
    imgCounter = omgNo;
    galleryTimeout = setTimeout("galleryOpacityIncreasor()",5);
}

function galleryOpacityIncreasor(){
    galleryOpacityCounter += 0.02;
    if (galleryOpacityCounter <= 1.0 && galleryOpacityCounter >= 0.0) galleryImage.style.opacity = galleryOpacityCounter;
    if (galleryOpacityCounter >= 0.5 && imgIncreasorcStatus === false){
        imgTimeout = setTimeout("imgOpacityIncreasor()",5);
    }
    if (galleryOpacityCounter >= 1) {
        clearTimeout(galleryTimeout);
        galleryImage.style.opacity = "1";
    }
    else galleryTimeout = setTimeout("galleryOpacityIncreasor()",5);
}

function imgOpacityIncreasor(){
    imgOpacityCounter += 0.02;
    if (imgOpacityCounter <= 1.0 && imgOpacityCounter >= 0.0) imgContainer.style.opacity = imgOpacityCounter;
    if (imgOpacityCounter >= 1) {
        clearTimeout(imgTimeout);
        imgContainer.style.opacity = "1";
        imgIncreasorcStatus = false;
        imgOpacityCounter = 1.0;
    }
    else imgTimeout = setTimeout("imgOpacityIncreasor()",5);
}



function galleryCrosser(){
    imgShiftStatus = false;
    imgTimeout = setTimeout("imgOpacityDecreasor()",5);
}


function imgOpacityDecreasor(){
    imgOpacityCounter -= 0.02;
    if (imgOpacityCounter <= 1.0 && imgOpacityCounter >= 0.0) imgContainer.style.opacity = imgOpacityCounter;
    if (imgOpacityCounter <= 0.0){
        clearTimeout(imgTimeout);
        if (imgShiftStatus === true){
            imgContainer.setAttribute("src","img/gallery-img-0" + imgCounter + ".jpg");
            imgOpacityCounter = 0.0;
            imgOpacityIncreasor();
        }
    }
    else imgTimeout = setTimeout("imgOpacityDecreasor()",5);
    if (imgOpacityCounter <= 0.0 && imgShiftStatus === false) {
        galleryTimeout = setTimeout("galleryOpacityDecreasor()",5);
    }
}

function galleryOpacityDecreasor(){
    galleryOpacityCounter -= 0.02;
    if (galleryOpacityCounter <= 1.0 && galleryOpacityCounter >= 0.0) galleryImage.style.opacity = galleryOpacityCounter;
    if (galleryOpacityCounter <= 0) {
        clearTimeout(galleryTimeout);
        galleryImage.style.opacity = "0";
        galleryImage.style.display = "none";
        imgParent.removeChild(imgContainer);
    }
    else galleryTimeout = setTimeout("galleryOpacityDecreasor()",5);
}
function imgLeftShifter(){
    if (imgCounter > 1){
        imgCounter--;
        imgShiftStatus = true;
        imgTimeout = setTimeout("imgOpacityDecreasor()",5);
    } else {
        imgContainer.style.transition = "margin 0.2s linear";
        imgContainer.style.marginLeft = "50px";
        imgTimeout = setInterval(function (){
            imgContainer.style.marginLeft = "0";
            clearInterval(imgTimeout);
        }, 200);
    }
}
function imgRightShifter(){
    if (imgCounter < imgNodeListLength){
        imgCounter++;
        imgShiftStatus = true;
        imgTimeout = setTimeout("imgOpacityDecreasor()",5);
    } else {
        imgContainer.style.transition = "margin 0.2s linear";
        imgContainer.style.marginLeft = "-50px";
        imgTimeout = setInterval(function (){
            imgContainer.style.marginLeft = "0";
            clearInterval(imgTimeout);
        }, 200);
    }
}
}


/*
*/

/*
*/