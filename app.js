const colors = ["green", "red", "rgba(133, 122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelectorAll(".color");

btn.addEventListener("click", function() {
 // obter numero aleatorio entre 0 e 3 colors[3]
  const randomNumber = getRandomNumber();
  for (let i = 0; i < 6; i++) {

}
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
};
