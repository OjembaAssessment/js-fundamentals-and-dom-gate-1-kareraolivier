console.log("Exercise 1 - Word Highlighter");
const Highlighter = () => {
  let count = 0;
  let newpal = {};
  let pal = document
    .getElementById("myParagraph")
    .textContent.toString()
    .split(" ")
    .filter((text) => text != "");

  console.log(pal.length);
  obj = {};
  for (let i = 0; i < pal.length; i++) {
    if (obj[pal[i]] === undefined) {
      obj[pal[i]] = 1;
    } else {
      obj[pal[i]]++;
    }
  }
  console.log(obj);
  let sortedValues = Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });
  let newcheck = sortedValues.slice(0, 5);
  console.log(newcheck);
  //   const newSpan = document.createElement("span");
  //   newSpan.style.backgroundColor = green;
  for (let i = 0; i < newcheck.length; i++) {
    for (let j = 0; j < pal.length; j++) {
      if (pal[j] == newcheck[i]) {
        [
          ...pal.replace(
            pal[i],
            `<span style='background-color:red'>${pal[i]} </span>`
          ),
        ];
      }
    }
  }
  console.log(pal);
  document.getElementById("myParagraph").innerHTML = pal.join(" ");
};
Highlighter();
