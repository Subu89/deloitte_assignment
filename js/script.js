var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=== navbar toggle ==*/

let navBar = document.querySelector(".navBar");
let menuBar = document.querySelector("#menuBar");
let closeBtn = document.querySelector("#closeBtn");

menuBar.onclick = () => {
  navBar.classList.add("active");
};

closeBtn.onclick = () => {
  navBar.classList.remove("active");
};

/*=== customer ==*/
var swiper = new Swiper(".CustomSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=== products ===*/
const cardsContainer = document.getElementById("products-list");
const list = document.createDocumentFragment();
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {console.log(data)
    let products = data;
    products.map(function(product) {
      let mainDiv = document.createElement('div')
      let imgDiv = document.createElement('div')
      let img = document.createElement('img');
      img.setAttribute("src", `${product.image}`);
      mainDiv.appendChild(imgDiv);
      imgDiv.appendChild(img);
      list.appendChild(mainDiv);
      mainDiv.classList.add('col-2');
      imgDiv.classList.add('image');
    })
  });
cardsContainer.appendChild(list);

