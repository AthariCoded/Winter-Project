let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// add an item from the menu to the cart
function addToCart() {
  document.getElementById("order1").innerHTML = "cart item 05";
  document.getElementById("orderPic").innerHTML =
    '<img src="images/menu-6.png" alt="cart1" />';
  document.getElementById("orderPrice").innerHTML = "10.55 KD";
  document.getElementById("orderX").innerHTML =
    '<span class="fas fa-times"></span>';
}

// alert user if contact information are all filled correctly
function mySubmit() {
  let inputName = document.getElementById("formName").value;
  let inputEmail = document.getElementById("formEmail").value;
  let inputNumber = document.getElementById("formNumber").value;

  if (inputName == "" || inputEmail == "" || inputNumber == "")
    alert("Missing information");
  else alert("Thank you! We will get in touch with you soon.");
}
