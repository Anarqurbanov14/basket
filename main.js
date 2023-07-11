const ProductArea = document.getElementById("product");

const products = [
  {
    id: 1,
    img: "Images/Product/product01.png",
    Name: "Coco Kat Kitten Milk",
    OldPrice: "$250",
        price: 150,
  },
  {
    id: 2,
    img: "Images/Product/product02.png",
    Name: "Coco Dog Kitten Milk",
    OldPrice: "$250",
    price: 120,
  },
  {
    id: 3,
    img: "Images/Product/product03.png",
    Name: "Coco Pika Kitten Milk",
    OldPrice: "$250",
    price: 90,
  },
  {
    id: 4,
    img: "Images/Product/product04.png",
    Name: "Coco Fikali Kitten Milk",
    OldPrice: "$250",
    price: 20,
  },
];
products.forEach((product) => {
    let html = `
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xsm-6">
      <div class="productCardShop text-center mb-5 ">
          <div class="productCardShopItem mt-3 mb-2">
              <a href="ShopDetail.html">
                  <img src="${product.img}" alt="Product">
              </a>
              <div class="productIconShop">
                  <span>
                      <i class="fa-regular fa-heart"></i>
                  </span>
              </div>
              <div class="prodictClearanceShop">
                  <span class="badge prodictClearanceShopItem">Sale</span>
              </div>
          </div>
          <div class="productItemContentShop">
              <a href="ShopDetail.html" class="productItemContentShop_item">${product.Name}</a>
              <ul class="d-flex justify-content-center align-items-center starIconShop mb-2">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star-half-stroke"></i></li>
              </ul>
              <h6 class="productPriceShop mb-3">
                  <s>${product.OldPrice}</s>
                  ${product.price}
              </h6>
              <button data-id='${product.id}' class="btnProduct">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    ProductArea.insertAdjacentHTML('beforeend',html)
});
const wishlistProducts = [];
const btnProducts = document.querySelectorAll(".btnProduct");

btnProducts.forEach(btnProduct => {
    btnProduct.addEventListener('click', function (e) {
        let initialProduct = products.find(m => m.id == e.target.dataset.id);
        wishlistProducts.push(initialProduct);
        localStorage.setItem("wishlistpr",JSON.stringify(wishlistProducts))
    })
    
});
