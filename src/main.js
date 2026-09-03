let icon= document.getElementById("icon")
let menu = document.getElementById("menu")
let searchInput = document.getElementById("input");
let res = [];
let post = "";

let fetchPost = async () => {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    res = await data.json();
    renderPro(res);
    console.log(res);

  } catch (error) {
    console.log(error);
  }
};


function renderPro(res) {

  post = res.map((item) => {
    return `<div class="card">
        <h2>${item.title}</h2>
        <img class='pro-img' src=${item.image} alt=${item.title}>
        <p>${item.description}</p>
        <h4>${item.price}</h4>
        <h3>${item.category}</h3>
      </div>`;
  });

  document
    .querySelector(".wrapper")
    .insertAdjacentHTML("afterbegin", post.join(""));
}


searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();
  let filteredPro = res.filter(item=>
     item.title.toLowerCase().includes(value)
  );
  console.log("filteredPro:",filteredPro)
  renderPro(filteredPro);
  console.log(value);
});

fetchPost();



icon.addEventListener("click",() =>{
 if (menu.style.display === "none"){
    menu.style.display="block";
 }else{
    menu.style.display = "none";
  }
 
});

