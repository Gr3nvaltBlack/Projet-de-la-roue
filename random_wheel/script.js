let wheel = document.querySelector('.wheel');
let spinButton = document.querySelector('.spin');
let number = Math.ceil(Math.random() * 1000);

spinButton.onclick = function() {
    wheel.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
};