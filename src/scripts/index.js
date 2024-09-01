const products = [
  {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },

  {
    id: "002",
    image: "images/4.jpg",
    company: "ADIDAS",
    item_name: "Indian Cricket ODI Jersey",
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 5.0,
      count: 10,
    },
  },
  {
    id: "003",
    image: "images/5.jpg",
    company: "Roadster",
    item_name: "Pure Cotton T-shirt",
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 3500,
    },
  },
  {
    id: "004",
    image: "images/6.jpg",
    company: "Nike",
    item_name: "Men ReactX Running Shoes",
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 0.0,
      count: 0,
    },
  },
  {
    id: "005",
    image: "images/7.jpg",
    company: "The Indian Garage Co",
    item_name: "Men Slim Fit Regular Shorts",
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    rating: {
      stars: 4.2,
      count: 388,
    },
  },
  {
    id: "006",
    image: "images/8.jpg",
    company: "Nivea",
    item_name: "Men Fresh Deodrant 150ml",
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 5200,
    },
  },
  {
    id: "007",
    image: "images/2.jpg",
    company: "CUKOO",
    item_name: "Women Padded Halter Neck Swimming Dress",
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 24,
    },
  },
  {
    id: "008",
    image: "images/3.jpg",
    company: "NUEVOSDAMAS",
    item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.1,
      count: 249,
    },
  },
  {
    id: "009",
    image: "images/4.jpg",
    company: "NUEVOSDAMAS",
    item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.1,
      count: 249,
    },
  },
  {
    id: "010",
    image: "images/5.jpg",
    company: "NUEVOSDAMAS",
    item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.1,
      count: 249,
    },
  },
]
let bagItemStr = localStorage.getItem("bagItems")
let bagItems = bagItemStr ? JSON.parse(bagItemStr) : []
onLoadHome()
function onLoadHome() {
  displayProducts()
  displayBagItemsQty()
}

function displayProducts() {
  let productsContainer = document.querySelector("#products-container")
  if (!productsContainer) {
    return
  }
  let innerHtml = ""
  products.forEach((item) => {
    innerHtml += `  <div class="flex flex-col p-2 shadow-xl ">
      <img src="./${item.image}" alt="" class="  object-cover">
      <div class="flex flex-col  p-2 ">
        <div class="font-bold tracking-wider text-base">${item.company}</div>
        <div class="text-gray-600 text-nowrap">${item.item_name.slice(
          0,
          20
        )}</div>
        <div class="">
          <span class="font-semibold">Rs.${item.current_price}</span>
          <span class="text-gray-600 line-through">Rs. ${
            item.original_price
          }</span>
          <span class="text-orange-500">(${item.discount_percentage}%OFF)</span>
        </div>
        <button class="bg-blue-500 text-white py-2 font-semibold rounded mt-1" onclick="addtoBag(${
          item.id
        })">
        Add to Cart
        </button>
      </div>
    </div>`
  })
  productsContainer.innerHTML = innerHtml
}

function addtoBag(productId) {
  bagItems.push(productId)
  displayBagItemsQty()
  localStorage.setItem("bagItems", JSON.stringify(bagItems))
}

function displayBagItemsQty() {
  let bagElement = document.querySelector("#bag-qty")
  bagElement.innerText = bagItems.length
}

function showSidebar() {
  document.getElementById("sideBar").classList.remove("-translate-x-full")
  document.getElementById("sideBar").classList.add("translate-x-0")
}

function hideSidebar() {
  document.getElementById("sideBar").classList.remove("translate-x-0")
  document.getElementById("sideBar").classList.add("-translate-x-full")
}
