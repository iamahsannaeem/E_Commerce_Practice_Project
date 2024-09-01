let cartItems
onLoadBag()

function onLoadBag() {
  displayBagAddedItems()
  displayBillingSummary()
}
function displayBagAddedItems() {
  let bagContainer = document.querySelector("#item-cart-container")
  cartItems = bagItems.map((itemId) => {
    for (let i = 0; i < products.length; i++) {
      if (itemId == products[i].id) {
        return products[i]
      }
    }
  })

  let innerHtml = ""
  cartItems.forEach((element) => {
    innerHtml += `<div class="flex gap-4 items-center relative bg-blue-300 px-4 rounded">
    <img src="./../${element.image}" alt="" class="w-[100px] h-[100px] object-cover rounded-full">
    <div class="flex flex-col py-2 ">
      <div class="text-lg font-bold">${element.item_name}</div>
      <div>${element.company}</div>
      <div class="flex gap-2">
        <span class="font-bold">Rs ${element.current_price}</span>
        <span class="text-gray-500">Rs ${element.original_price}</span>
        <span class="text-orange-700">(${element.discount_percentage}% Off)</span>
      </div>
      <div><span class="font-bold">14 Days</span> return available</div>
      <div>Delivery by <span class="text-green-600">10 OCT 2024</span></div>
    </div>
    <div class="absolute right-4 top-4 cursor-pointer text-2xl"><i class="fa-regular fa-circle-xmark" onclick="removeFromBag(${element.id})"></i></div>
  </div>`
  })

  bagContainer.innerHTML = innerHtml
    ? innerHtml
    : "<div class='text-center text-red-500 font-semibold text-2xl mt-10 w-full'>Cart is Empty</div>"
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((item) => itemId != item)
  localStorage.setItem("bagItems", JSON.stringify(bagItems))
  displayBagAddedItems()
  displayBagItemsQty()
  displayBillingSummary()
}

function displayBillingSummary() {
  let billingSummaryElement = document.querySelector(
    "#billing-summary-container"
  )
  let totalMrp = 0
  let totaldiscout = 0
  let finalPayment = 0
  cartItems.forEach((item) => {
    totalMrp += item.original_price
    totaldiscout += item.original_price - item.current_price
  })
  finalPayment += totalMrp - totaldiscout + 99

  billingSummaryElement.innerHTML = `    <div class="text-gray-800 font-semibold mb-4">PRICE DETAIL (1 Items)</div>
          <div class="flex justify-between">
            <div>Totak MRP</div>
            <div>Rs ${totalMrp}</div>
          </div>
          <div class="flex justify-between">
            <div>Discount on MRP</div>
            <div class="text-green-500">-Rs ${totaldiscout}</div>
          </div>
          <div class="flex justify-between">
            <div>Convenience Fee</div>
            <div>Rs 99</div>
          </div>
          <div class="border-b border-gray-400 mt-2"></div>
          <div class="flex justify-between font-bold text-base uppercase">
            <div>Final Payment </div>
            <div>Rs ${finalPayment}</div>
          </div>
          <div class="border-b border-gray-400 mt-2"></div>
          <button class="bg-red-500 py-3 text-white uppercase rounded-lg mt-3 font-bold tracking-widest">Place
            Order</button>`
}
