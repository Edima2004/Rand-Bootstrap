var due = new Date('2022-01-01');
var today = new Date();

//in 3 days(milliseconds)
var daydiff = Math.ceil((due.getTime() - today.getTime()) / 259200000);
var opacity = daydiff < 0 ? (100 + daydiff) / 100 : 1;
document.querySelector("body").style.opacity = opacity;
