//Review Slider 
let reviewContainer = document.querySelector("#review-section .review-container");
let customers = document.querySelectorAll("#review-section .review-container .review-inner");
let customerCount = customers.length;


window.addEventListener('resize', () => {
    setCustomerWidth();
});

function slider(i, j, x) {
    if (x > 0) {
        let w = 1;
        let y = 99;
        customers[j].style.marginLeft = "-100%";
        customers[j].classList.remove("hidden-review");
        let temp = setInterval(function() {
            if (w >= 100) {
                clearInterval(temp);
                customers[i].style.marginLeft = "100%";
                customers[i].classList.add("hidden-review");
                
                customers[j].style.marginLeft = "0%";
            }
            customers[i].style.marginLeft = w + "%";
            customers[j].style.marginLeft = "-" + y + "%";
            y--;
            w++;
        }, 3);
    } else {
        let w = 1;
        let y = 99;
        customers[j].style.marginLeft = "100%";
        customers[j].classList.remove("hidden-review");
        let temp = setInterval(function() {
            if (w >= 100) {
                clearInterval(temp);
                customers[i].style.marginLeft = "-100%";
                customers[i].classList.add("hidden-review");
                
                customers[j].style.marginLeft = "0%";
            }
            customers[i].style.marginLeft = "-" + w + "%";
            customers[j].style.marginLeft = y + "%";
            y--;
            w++;
        }, 3);
    }
            
}

function reviewSlide(x) {
    for ( let i = 0; i < customerCount; ++i){
        if (!customers[i].classList.contains("hidden-review")) {
            if (x > 0) {
                if (i == 0) slider(i, customerCount - 1, x);
                else slider(i, i - 1, x);
            } else {
                if ( i == customerCount - 1) slider(i, 0, x);
                else slider(i, i + 1, x);
            }
            break;
        }
    }
}
