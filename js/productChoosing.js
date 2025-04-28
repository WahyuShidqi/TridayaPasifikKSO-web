const products = document.querySelectorAll(".product");
const selector = document.querySelector("#product");
const goBackBtn = document.querySelector("#gobackbutton");
const body = document.querySelector("body");
const staticOptions = selector.querySelectorAll("option");
const selectorNotif = selector.getElementsByClassName("selector-notif");

//global variable
let selectedProductId = "";

products.forEach((product) => {
  //finding the target parents
  const parentContainer = product.closest(".my-product-slide");

  //finding the target inside its parent
  const productsTexts = parentContainer.querySelector(".my-product-text");
  //assigning each product order button with product text as a value
  product.dataset.value = productsTexts.textContent;

  //assigning a unique id to product text/title element so goback btn will work
  product.id =
    productsTexts.textContent.replace(/\s+/g, "-") +
    "-" +
    Math.floor(Math.random() * 10000);

  //assigning value from product order button to mail order form
  product.addEventListener("click", function () {
    //storing unique product text id so goback btn can use it universally
    selectedProductId = this.id;

    //passing value to selector when product clicked

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
      newOptions.textContent = this.dataset.value;

      selector.appendChild(newOptions);
      selector.value = this.dataset.value;
    } else {
      document.querySelectorAll(".new-option").forEach((opt) => opt.remove());
    }

    selector.value = this.dataset.value;
    selectorNotif.textContent = `You've Chosen ${this.dataset.value} from products' menu`;

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

//
// ✨ More Useful JavaScript Methods & Their Differences ✨
//
// 🔁 Looping & Iterating
// - forEach(): loops through each item, runs a function (no return)
// - map(): like forEach but returns a new array with transformed values
// - filter(): returns a new array with only items that pass a test
// - reduce(): reduces the array to a single value (sum, string, object, etc.)
// - every(): returns true if all items pass a test
// - some(): returns true if at least one item passes a test
// - find(): returns the first item that passes a test
// - findIndex(): returns the index of the first item that passes
//
// 🧪 Array Utilities
// - Array.from(): turns NodeList or iterable into a real Array
// - includes(): checks if an array contains a certain value
// - indexOf(): finds the index of a value (returns -1 if not found)
// - concat(): joins arrays
// - slice(): copies part of an array
// - splice(): adds/removes items in-place
// - sort(): sorts array (be careful with numbers)
//
// 🌳 DOM Traversal
// - querySelector(): finds the first match (CSS selector)
// - querySelectorAll(): finds all matches (returns NodeList)
// - closest(): climbs up the DOM until it finds a match
// - parentElement: gets the direct parent of an element
// - children: gets all child elements
// - nextElementSibling / previousElementSibling: get next/previous sibling
//
// 🧼 DOM Content & Attributes
// - textContent / textContent: get or set the visible text of an element
// - innerHTML: get or set HTML inside an element
// - value: get or set value of input/select/textarea
// - dataset: get or set custom data attributes (data-*)
//
// 🎨 Class & Style
// - classList.add(), .remove(), .toggle(), .contains(): control element classes
// - style.property = "value": directly edit inline styles
//
// ⚙️ Element Creation & Insertion
// - document.createElement("tag"): make new HTML element
// - element.appendChild(): adds child to the end
// - element.remove(): deletes an element
// - element.setAttribute() / getAttribute(): work with HTML attributes
//
// 🧠 Event Listeners
// - addEventListener("click", fn): react to clicks or other events
// - removeEventListener(): remove the event if needed
//
// 🔍 Comparisons
// - some() vs every(): some = at least one passes, every = all must pass
// - map() vs forEach(): map = transforms and returns new array, forEach = no return
// - querySelectorAll() vs Array.from(): querySelectorAll returns NodeList, use Array.from to get real array
//

//
// JavaScript Method Reference (used in the code above)
//
// Array.from()
// - Converts array-like or iterable objects (like NodeList or HTMLCollection) into real Arrays
// - Useful when you want to use array methods like .map(), .some(), etc. on things like querySelectorAll()
// - Similar to: [...arrayLike] (spread operator can do the same thing)
// - Use when you need full array power from non-array collections
//
// .some(callback)
// - Checks if **at least one** item in an array passes a condition (returns true)
// - Stops at the first true result (more efficient than looping all items)
// - Similar to: .every() (but .every checks if **all** items pass)
// - Use when you want to know "Does this exist?" or "Is there any that matches?"
//
// .forEach(callback)
// - Loops over every item in an array or NodeList
// - Doesn’t return anything (not chainable), just runs your function for each item
// - Similar to: .map() (but .map returns a new array), or for() loops
// - Use when you just want to do something with each item, like adding event listeners
//
// .closest(selector)
// - Starts from an element and goes up the DOM tree until it finds a matching parent
// - Similar to: .parentElement (but only goes one level), .querySelector() (but that searches downward)
//
// .querySelector()
// - Finds the **first** element that matches a CSS selector
// - .querySelectorAll() gets all matching elements as a NodeList
// - Similar to: getElementById(), getElementsByClassName(), etc., but more flexible with CSS-like selectors
//
// .dataset
// - Allows you to store custom data attributes (like data-value="something") in HTML elements
// - You can access it in JS with element.dataset.value
// - Cleaner and safer than using textContent or class names to store custom info
//
