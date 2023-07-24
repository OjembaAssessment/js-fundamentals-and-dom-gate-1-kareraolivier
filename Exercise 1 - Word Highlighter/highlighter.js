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
  const newSpan = document.createElement("span");
//   newSpan.style.backgroundColor = green;
  for (let i = 0; i < pal.length; i++) {
    for (let i = 0; i < newcheck.length; i++) {
      if ((pal[i] = newcheck[i])) {
        pal[i] = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk";
      }
    }
  }
  console.log(pal);
};
Highlighter();
