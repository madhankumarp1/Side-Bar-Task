let Right_btn = document.querySelector(".main");
let X_Btn = document.querySelector(".closebtn");
let Nav_content = document.querySelector(".dio");
// console.log(Nav_content);
// console.log(Right_btn);
// console.log(X_Btn);
let value = 0;
function myFunction() {
  if (value == 0) {
    // Right_btn.classList.add("myStyle");
    Nav_content.classList.add("dio");
    Nav_content.classList.remove("open");
    value = 1;
  } else {
    Right_btn.classList.remove("myStyle");
    Nav_content.classList.add("open");
    value = 0;
  }
}
