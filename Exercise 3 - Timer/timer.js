console.log("Exercise 3 - Timer");

let nbr = 10;
let x = setInterval(function () {
  if (nbr >= 0) {
    document.getElementById("demo").innerHTML = nbr;
    nbr--;
  }
}, 1000);

const addSec = (num) => {
  nbr += num;
};
const removeSec = (num) => {
  nbr -= num;
};

const disablestyle = () => {
  document.getElementById("butto").setAttribute("style", "display:none");
};
