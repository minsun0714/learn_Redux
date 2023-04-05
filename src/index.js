const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateCount = (count) => {
  number.innerText = count;
};

const handleAdd = (event) => {
  count++;
  updateCount(count);
};

const handleMinus = (event) => {
  count--;
  updateCount(count);
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
