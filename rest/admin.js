let productElement = document.getElementById("add_product_form")
let url = 'https://middleweb-26b2.restdb.io/rest/product'
productElement.addEventListener('submit', function(event){
    event.preventDefault()
    let data = JSON.stringify({
        "name" : event.target['name'].value,
        "description": event.target['description'].value,
        "price": event.target['price'].value,
        "photo_url": event.target['photo_url'].value
    })

fetch(url, {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "x-apikey": "676830dae70533cf0c3584f3",
        "cache-control": "no-cache"
    },
    body:data
})
})
let cartProd = document.getElementById('cart-product');

function openCart(){
    cartProd.classList.toggle('hide')
}
