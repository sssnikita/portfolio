let productGrid = document.getElementById("products-grid")
let productsArray = []
let url = 'https://middleweb-26b2.restdb.io/rest'

let my_headers = {
    "Content-Type":"aplication/json",
    "x-apikey": "676830dae70533cf0c3584f3",
    "cache-control": "no-cache"
}

fetch(`${url}/product`, 
    {
    method: "GET",
    headers: my_headers,
})

.then(async function(response) {
    productsArray = await response.json()
    console.log(productsArray)
    productGrid.innerHTML = null
        productsArray.forEach(p => {
            productsArray.push(p)
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
            <h2 class="product-name">${p.name}</h2>
            <img class="product-photo" src="${p.photo_url}">
            <p class="product-price">Price: ${p.price}</p>
            <p class= "product-description"> Description: ${p.description}</p>
            <button onclick ="addProductToCart('${p._id}')">Buy</button>
            `
            productGrid.append(pElem)
        })
})

let cartProd = document.getElementById('cart-product');

function openCart(){
    cartProd.classList.toggle('hide')
}
let cart = []
function addProductToCart(id){
    let product = productsArray.find(function(p){
        return p._id == id
    })
    cart.push(product)
    drawCartProduct()
    document.getElementById("cart-button").classList.add('active')
    setTimeout(function(){
        document.getElementById("cart-button").classList.remove('active')
    }, 500)

}

function drawCartProduct(){
    if(cart.lenght === 0){
        return cartProd.innerHTML = 'Cart is empty'
    }
    cartProd.innerHTML = null
    let sum = 0
    cart.forEach(function(p){
        cartProd.innerHTML += `
        <p><img src="${p.photo_url}">${p.name} | ${p.price}</p>
        <hr>
        `
        sum +=p.price
    })
    cartProd.innerHTML += `
    <p>Total price: ${sum}$</p>
    <button onclick = "buyAll()">Buy All</button>
    `
}
function buyAll(){
    cart = []
    cartProd.innerHTML = "Thanks for buying our product! :)"
}