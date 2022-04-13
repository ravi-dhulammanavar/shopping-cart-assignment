import './product.scss'
import './common.scss'
import { saveCart, syncCartCount } from './cart.js'

const HOST = "http://localhost:5001/";

console.log('Products JS File')



async function apiCall(endPoint) {
    try {
        let response = await fetch(`http://localhost:5001/${endPoint}`)
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            throw new Error("Some this went wrong!");
        }
    } catch (e) {
        console.log("Error Within Catch method");
        console.log(e);
    }
}

async function getProductsByCategory(category) {
    var products = await apiCall('products');
    // console.log(products);
    var filteredData = products.filter(function(product) {
        return product.category == category;
    });
    return filteredData
}

async function getCategories() {
    var categories = await apiCall('categories');
    var sortObject = categories.sort(function(a, b) {
        return a.order - b.order;
    });

    for (const category of sortObject) {
        // console.log(key)
        if (category.enabled) {
            displayCategory(category)
        }
    }


}

async function displayCategory(category) {

    // console.log(category);

    var tabBtnDiv = document.getElementById('v-pills-tab');
    var tabBtn = document.createElement('button');

    if (category.order == 1) {

        tabBtn.setAttribute('class', 'nav-link active')
        tabBtn.setAttribute('aria-selected', 'true')
    } else {
        tabBtn.setAttribute('class', 'nav-link')
        tabBtn.setAttribute('aria-selected', 'false')

    }
    tabBtn.setAttribute('id', `v-pills-${category.id}-tab`)
    tabBtn.setAttribute('data-bs-toggle', 'pill')
    tabBtn.setAttribute('data-bs-target', `#v-pills-${category.id}`)
    tabBtn.setAttribute('type', 'button')
    tabBtn.setAttribute('role', 'tab')
    tabBtn.setAttribute('aria-controls', 'v-pills-' + category.id)

    tabBtn.innerHTML = category.name;
    tabBtnDiv.appendChild(tabBtn)


    var tabContentDiv = document.getElementById('v-pills-tabContent');
    var tabContent = document.createElement('div')
        // tabContent.innerText = category.name
    tabContent.setAttribute('id', `v-pills-${category.id}`)
    tabContent.setAttribute('role', 'tabpanel')
    tabContent.setAttribute('aria-labelledby', `v-pills-${category.id}-tab`)


    if (category.order == 1) {
        tabContent.setAttribute('class', 'tab-pane fade show active')
    } else {
        tabContent.setAttribute('class', 'tab-pane fade ')
    }

    tabContentDiv.appendChild(tabContent)
    var products = await getProductsByCategory(category.id)
        // console.log(products);
    var productItemDiv = document.getElementById(`v-pills-${category.id}`)
    var productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'product-div')

    productItemDiv.appendChild(productDiv)
    for (const product of products) {
        var productItem = document.createElement('div')
        productItem.setAttribute('class', 'product-item')
        productDiv.appendChild(productItem)

        var title = document.createElement('h1');
        title.setAttribute('class', 'product-title')
        title.innerText = product.name
        productItem.appendChild(title)

        var firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'product-image-and-desc')

        productItem.appendChild(firstDiv)

        var Productimage = document.createElement('img');
        const myArray = product.imageURL.split("/");
        let imageName = myArray.slice(-1)[0];
        let imageDir = myArray[4];

        var contacted = 'static/images/products/' + imageDir + '/' + imageName;
        var img = require(`/static/images/products/${imageDir}/${imageName}`)
        Productimage.setAttribute('src', img)
        firstDiv.appendChild(Productimage)

        var secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'product-desc-btn')
        firstDiv.appendChild(secondDiv)

        var decsription = document.createElement('p')
        decsription.setAttribute('class', "decsription-p")
        decsription.innerText = product.description.substring(0, 51) + "..."
        secondDiv.appendChild(decsription)




        var pricingDiv = document.createElement('div')
        pricingDiv.setAttribute('class', "pricing-div")
        secondDiv.appendChild(pricingDiv)


        var pricing = document.createElement('p')
        pricing.setAttribute('class', "pricing-p")
        pricing.innerText = "MRP RS :" + product.price
        pricingDiv.appendChild(pricing)

        var buyBtn = document.createElement('button')
        buyBtn.innerText = "Buy Now"
        buyBtn.setAttribute('class', 'btn btn-buy m-hide')
        buyBtn.setAttribute('id', product.id)
        buyBtn.setAttribute('data-product-id', product.id)
        buyBtn.setAttribute('datasku', product.sku)
        buyBtn.setAttribute('price', product.price)
        pricingDiv.appendChild(buyBtn)
        buyBtn = addEventListener('click', saveCart);

        var buyBtn1 = document.createElement('button')
        buyBtn1.innerText = "Buy Now @ Rs. " + product.price;
        buyBtn1.setAttribute('class', 'btn btn-buy d-hide')
        buyBtn1.setAttribute('id', product.id)
        buyBtn1.setAttribute('data-product-id', product.id)
        buyBtn1.setAttribute('datasku', product.sku)
        buyBtn1.setAttribute('price', product.price)
        pricingDiv.appendChild(buyBtn1)
        buyBtn1 = addEventListener('click', saveCart);



    }

}

window.addEventListener("DOMContentLoaded", getCategories);
window.addEventListener("DOMContentLoaded", getProductsByCategory);

document.getElementById('selectId').addEventListener('change', function(e) {
    const boxes = document.querySelectorAll('.tab-pane');

    boxes.forEach(box => {

        box.classList.remove('active');
        box.classList.remove('show');

    });
    var div = document.getElementById(e.target.value);
    div.classList.add('active')
    div.classList.add('show')

})