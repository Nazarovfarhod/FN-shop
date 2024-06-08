const API = "https://dummyjson.com/products";

const queryString = location.search;
const query = new URLSearchParams(queryString);
const id = query.get("product");

const updateUI = (product) => {
  console.log(product);
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const brend = document.getElementById("brend");
  const wariant = document.getElementById("wariant");
  const description = document.getElementById("description");
  const stock = document.getElementById("stock");
  img1.src = product.images[0];
  img2.src = product.images[1];
  img3.src = product.images[2];
  brend.textContent = "Brand : " + product.brand;
  wariant.innerHTML = `<i><b>Garant : </b></i>` + product.warrantyInformation;
  description.textContent = product.description;
  stock.innerHTML =
    `<i>we have :</i> ` + product.stock + `<i> of this product</i>`;
  if (product.images[1] == undefined) {
    img2.src = product.images[0];
    img3.src = product.images[0];
  }
};

const getData = async (url) => {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("hidden");
  const request = await fetch(url);
  const data = await request.json();
  overlay.classList.add("hidden");
  return data;
};
getData(API + `/${id}`)
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
