const products = document.querySelectorAll(".product");
const selector = document.querySelector("#product");
const goBackBtn = document.querySelector("#gobackbutton");
const body = document.querySelector("body");
const staticOptions = selector.querySelectorAll("option");

let selectedProductId = "";

products.forEach((product) => {
  //finding the target parents
  const parentContainer = product.closest(".my-product-slide");

  //finding the target inside its parent
  const productsTexts = parentContainer.querySelector(".my-product-text");
  //assigning each product order button with product text as a value
  product.dataset.value = productsTexts.innerText;

  //assigning a unique id to product text/title element so goback btn will work
  product.id =
    productsTexts.innerText.replace(/\s+/g, "-") +
    "-" +
    Math.floor(Math.random() * 10000);

  //assigning value from product order button to mail order form
  product.addEventListener("click", function () {
    //storing unique product text id so goback btn can use it universally
    selectedProductId = this.id;

    //assing value to selector when product clicked

    //comparing if the value coming from the product is available in the options
    const isValueAvailable = Array.from(staticOptions).some((staticOption) => {
      return staticOption.value === this.dataset.value;
    });

    //removing additional added option that are more than one
    if (!isValueAvailable) {
      document.querySelectorAll(".new-option").forEach((opt) => opt.remove());

      //create new option and make select tag use its value
      const newOptions = document.createElement("option");
      newOptions.classList.add("new-option");
      newOptions.value = this.dataset.value;
      newOptions.innerText = this.dataset.value;

      selector.appendChild(newOptions);
      selector.value = this.dataset.value;
    } else {
      document.querySelectorAll(".new-option").forEach((opt) => opt.remove());
    }

    selector.value = this.dataset.value;

    //go to email form
    body.classList.remove("scroll-5vh");
    body.classList.add("scroll-20vh");
    product.href = "#product";
  });
});

//go back to clicked item menu
goBackBtn.addEventListener("click", function () {
  body.classList.add("scroll-5vh");
  body.classList.remove("scroll-20vh");
  this.href = `#${selectedProductId}`;
});
