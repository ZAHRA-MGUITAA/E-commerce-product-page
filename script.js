function Menu() {
  iconmenu = document.getElementById("menu");
  if (iconmenu.style.display == "none") {
    iconmenu.style.display = "block";
  } else {
    iconmenu.style.display = "none";
  }
}
document
  .querySelectorAll(".product-details .images-slider img")
  .forEach((image) => {
    image.addEventListener("click", () => {
      document.getElementById("main-image").src = image
        .getAttribute("src")
        .replace("-thumbnail", "");

      document
        .querySelectorAll(".product-details .images-slider img")
        .forEach((image_slide) => {
          if (image_slide !== image) {
            image_slide.style.opacity = "1";
            image.style.borderColor = "transparent";
          } else {
            image.style.opacity = "0.5";
            image.style.border = "1px solid hsl(26, 100%, 55%)";
          }
        });
    });
  });

document
  .querySelectorAll(".product-overlay .images-slider img")
  .forEach((image) => {
    image.addEventListener("click", () => {
      document.querySelector(".product-overlay .main-product").src = image
        .getAttribute("src")
        .replace("-thumbnail", "");

      document
        .querySelectorAll(".product-overlay .images-slider img")
        .forEach((image_slide) => {
          if (image_slide !== image) {
            image_slide.style.opacity = "1";
            image.style.borderColor = "transparent";
          } else {
            image.style.opacity = "0.4";
            image.style.border = "1px solid hsl(26, 100%, 55%)";
          }
        });
    });
  });

var i = 0;
var images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
function prev() {
  var image = document.getElementById("slider");
  let imagemain = document.getElementById("main-image");

  i--;

  if (i < 0) {
    i = images.length - 1;
  }
  image.src = images[i];
  imagemain.src = images[i];
}

function next() {
  var image = document.getElementById("slider");
  let imagemain = document.getElementById("main-image");
  i++;
  if (i >= images.length) {
    i = 0;
  }
  image.src = images[i];
  imagemain.src = images[i];
}

var btnClose = document.querySelector(".main-overlay .fa-xmark");
btnClose.addEventListener("click", () => {
  document.querySelector(".product-overlay").style.visibility = "hidden";
});
document.querySelector("#main-image").addEventListener("click", () => {
  document.querySelector(".product-overlay").style.visibility = "visible";
});

document.querySelector(".cart").addEventListener("click", () => {
  let cartshop = document.querySelector(".cart-shop");
  if (cartshop.style.display === "block") {
    cartshop.style.display = "none";
  } else if (cartshop.style.display === "none") {
    cartshop.style.display = "block";
  }
});

var quantity = document.querySelector(".quantity input").value;
document.querySelector(".quantity #plus-one").addEventListener("click", () => {
  quantity++;
  document.querySelector(".quantity input").value = quantity;
});
document.querySelector(".quantity #minus-one").addEventListener("click", () => {
  if (quantity !== 0) {
    quantity--;
    document.querySelector(".quantity input").value = quantity;
  }
});

document.querySelector(".add-to-cart button").addEventListener("click", {});

document.getElementById("addtocart").addEventListener("click", () => {
  document.querySelector(".cart-shop").style.display = "block";
  document.querySelector("#cartquantity").textContent = quantity;
  document.getElementById("productprice").value =
    document.querySelector(".price").value;
  document.getElementById("productquantity").innerHTML = quantity;
  document.getElementById("total").innerHTML = (
    document.querySelector("#productprice").innerHTML * quantity
  ).toFixed(2);
});
