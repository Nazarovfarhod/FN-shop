const temp = document.querySelector("template");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});

const updateUI = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    const clone = temp.content.cloneNode(true);
    console.log(product);

    const h3 = clone.querySelector("h3");
    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const para = clone.querySelector("p");
    const span = clone.querySelector("span");
    const heart = clone.querySelector("#heart");
    const addCart = clone.getElementById("add-cart");
    const cartNumber = document.getElementById("cart-number");
    const cards = clone.getElementById("cards");

    let counter = 0;

    if (product.discountPercentage) {
      para.style = `
          text-decoration: line-through;
          opacity: 0.5;
      `;
      span.textContent =
        (
          product.price -
          (product.price * product.discountPercentage) / 100
        ).toFixed(2) + " $";
    }

    img.src = product.thumbnail;

    h3.textContent = product.title;
    para.textContent = "Old price : " + product.price + " $";

    a.href = `./about.html?product=${product.id}`;

    heart.addEventListener("click", () => {
      heart.classList.toggle("red");
    });
    addCart.addEventListener("click", () => {
      counter += 1;
      console.log(counter);
      cartNumber.textContent = counter;
    });

    const bosish = () => {
      a.click();
    };
    cards.addEventListener("click", bosish);

    ul.appendChild(clone);
  });
};
