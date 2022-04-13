import './drawer.scss'
import './drawer.js'
console.log('cart js loaded')

async function apiCall(endPoint) {
    try {
        let response = await fetch(`http://localhost:5001/${endPoint}`)
        if (response.ok) {
            let data = await response.json()
            return data
        } else {
            throw new Error('Some this went wrong!')
        }
    } catch (e) {
        console.log('Error Within Catch method')
        console.log(e)
    }
}

export function saveCart(e) {
    try {
        var productSKU = e.target.attributes.datasku.nodeValue
        var productPrice = e.target.attributes.price.nodeValue
        var newItem = {
            pid: productSKU,
            qty: 1,
            price: productPrice,
            total: productPrice
        }
        var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || []
        var cartCount = JSON.parse(localStorage.getItem('cartCount'))
        var item = cartList.find(item => item.pid === productSKU)

        if (item) {
            item.qty += 1
            item.total = item.qty * item.price
        } else {
            cartCount += 1
            cartList.push(newItem)
        }
        localStorage.setItem('itemsInCart', JSON.stringify(cartList))
        localStorage.setItem('cartCount', cartCount)
        syncCartCount()
    } catch {}
}

export function syncCartCount() {
    var cartCount = localStorage.getItem('cartCount')
    var cartElem = document.querySelector('.cart-count')

    var cartItems = JSON.parse(localStorage.getItem('itemsInCart'))

    var filteredData = cartItems.filter(function(product) {
            return product.qty != 0
        })
        // console.log(filteredData.length);
    cartElem.innerText = filteredData.length + ' Items'
    var cartCountElem = document.querySelector('.drawer__title')
    cartCountElem.innerText = 'MY CART ' + filteredData.length + ' Items'

    calculateTotal()

}

syncCartCount()

function getCartItems() {
    document.querySelector('.cart-list').innerHTML = ''
    var cartItems = JSON.parse(localStorage.getItem('itemsInCart'))

    for (const item of cartItems) {
        if (item.qty >= 1) {
            displayCartItem(item)
        }
    }
}

var cartBTN = document.querySelector('.cart-btn')
cartBTN.addEventListener('click', function() {
    // console.log('clicked');
    getCartItems()
})

async function displayCartItem(item) {
    var products = await apiCall('products')
    var filteredData = products.filter(function(product) {
            return product.sku === item.pid
        })
        // console.log(item);
        // console.log(filteredData[0].sku);
    var singleproduct = filteredData[0]

    var cartDiv = document.querySelector('.cart-list')

    var cartItemlist = document.createElement('div')
    cartItemlist.setAttribute('class', 'cart-item')
    cartDiv.appendChild(cartItemlist)

    var cartImageDiv = document.createElement('div')
    cartImageDiv.setAttribute('class', 'cart-image')
    cartItemlist.appendChild(cartImageDiv)

    var cartImage = document.createElement('img')
    const myArray = singleproduct.imageURL.split('/')
    let imageName = myArray.slice(-1)[0]
    let imageDir = myArray[4]
    var img = require(`/static/images/products/${imageDir}/${imageName}`)
    cartImage.setAttribute('src', img)
    cartImageDiv.appendChild(cartImage)

    var cartDescDiv = document.createElement('div')
    cartDescDiv.setAttribute('class', 'cart-pro-desc')
    cartItemlist.appendChild(cartDescDiv)

    var cartTitle = document.createElement('h3')
    cartTitle.innerText = singleproduct.name
    cartDescDiv.appendChild(cartTitle)

    var catSecondDiv = document.createElement('div')
    catSecondDiv.setAttribute('class', 'second-inner')
    cartDescDiv.appendChild(catSecondDiv)

    var buttonGroup = document.createElement('div')
    buttonGroup.setAttribute('class', 'button-group')
    catSecondDiv.appendChild(buttonGroup)

    var decreamentBtn = document.createElement('button')
    decreamentBtn.setAttribute('class', 'decrease')
    decreamentBtn.setAttribute('datasku', singleproduct.sku)
    decreamentBtn.innerText = '-'
    buttonGroup.appendChild(decreamentBtn)
    decreamentBtn.addEventListener('click', decreaseCount)

    var cartInput = document.createElement('input')
    cartInput.setAttribute('class', 'cart-input')
    cartInput.setAttribute('value', item.qty)
    buttonGroup.appendChild(cartInput)

    var increamentBtn = document.createElement('button')
    increamentBtn.setAttribute('class', 'increase')
    increamentBtn.setAttribute('datasku', singleproduct.sku)
    increamentBtn.innerText = '+'
    buttonGroup.appendChild(increamentBtn)
    increamentBtn.addEventListener('click', increaseCount)

    var multipleDiv = document.createElement('div')
    multipleDiv.setAttribute('class', 'calculate')
    catSecondDiv.appendChild(multipleDiv)

    var multipleP = document.createElement('p')
    multipleP.innerText = '× Rs.' + item.price
    multipleDiv.appendChild(multipleP)

    var totalDiv = document.createElement('div')
    totalDiv.setAttribute('class', 'single-tota-price')
    catSecondDiv.appendChild(totalDiv)

    var totalP = document.createElement('p')
    totalP.innerText = 'Rs.' + item.total
    totalDiv.appendChild(totalP)
}

window.addEventListener('DOMContentLoaded', getCartItems)

function increaseCount(e) {
    // console.log("increase");
    var productSKU = e.target.attributes.datasku.nodeValue
        // console.log(productSKU);

    var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || []
    var cartCount = JSON.parse(localStorage.getItem('cartCount'))
    var item = cartList.find(item => item.pid === productSKU)

    if (item) {
        // console.log(item);
        item.qty += 1
        item.total = item.qty * item.price
        cartCount += 1
    } else {}
    localStorage.setItem('itemsInCart', JSON.stringify(cartList))
    syncCartCount()
    getCartItems()
    calculateTotal()

}

function decreaseCount(e) {
    var productSKU = e.target.attributes.datasku.nodeValue
        // console.log("decrease");

    var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || []
    var cartCount = JSON.parse(localStorage.getItem('cartCount'))
    var item = cartList.find(item => item.pid === productSKU)

    if (item) {
        // console.log(item);
        item.qty -= 1
        item.total = item.qty * item.price
        cartCount += 1
    } else {}
    localStorage.setItem('itemsInCart', JSON.stringify(cartList))
    syncCartCount()
    getCartItems()
    calculateTotal()

}

function calculateTotal() {
    var cartItems = JSON.parse(localStorage.getItem('itemsInCart'))
    var total = 0
    var filteredData = cartItems.map(item => item.total + total)

    const reducer = (accumulator, curr) => accumulator + curr
    total = filteredData.reduce(reducer)
    if (total <= 0) {
        document.querySelector('.checkout-price').innerText = ""
        document.querySelector('.btn-txt').innerText = "Start Shopping"

        document.querySelector('.empty-cart').style.display = "block";
    } else {
        document.querySelector('.empty-cart').style.display = "none";

        document.querySelector('.btn-txt').innerText = "Proceed to checkout"
        document.querySelector('.checkout-price').innerText = "Rs." + total
    }
}

calculateTotal();