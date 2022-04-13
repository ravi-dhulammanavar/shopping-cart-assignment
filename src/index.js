import './home.scss'
import './common.scss'
import {syncCartCount } from './cart.js'
const HOST = "http://localhost:5001/";

console.log("Index JS file");


async function apiCall(endPoint) {
    try {
        let response = await fetch(`http://localhost:5001/${endPoint}`)
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw new Error("Some this went wrong!");
        }
    } catch (e) {
        console.log("Error Within Catch method");
        console.log(e);
    }
}

async function loadBanners() {
    let banners = await apiCall('banners');
    let sortObject = banners.sort(function (a, b) {
        return a.order - b.order;
    });
    for (const banner of sortObject) {
        displayBanner(banner);
    }
}

function displayBanner(banner) {

    var bannerSection = document.querySelector('#banners');
    var bannerImage = document.createElement('img');
    const myArray = banner.bannerImageUrl.split("/");
    let imageName = myArray.slice(-1)[0];
    var imagURL = require(`../static/images/offers/${imageName}`)
    bannerImage.setAttribute('src', imagURL)
    bannerImage.setAttribute('alt', banner.bannerImageAlt)
    bannerSection.appendChild(bannerImage)


}

window.addEventListener("DOMContentLoaded", loadBanners);


async function getCategories() {
    var categories = await apiCall('categories');
    var sortObject = categories.sort(function (a, b) {
        return a.order - b.order;
    });

    for (const category of sortObject) {
        if (category.enabled) {

            displayCategory(category)
        }
    }


}

function displayCategory(category) {

    // console.log(category);
    var categorySection = document.getElementById('categories');

    var categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class', 'categories-item')
    categorySection.appendChild(categoryDiv)

    var categoryImageDiv = document.createElement('div');
    categoryImageDiv.setAttribute('class', 'category-image')
    categoryDiv.appendChild(categoryImageDiv)

    var catImage = document.createElement('img');
    const myArray = category.imageUrl.split("/");
    let imageName = myArray.slice(-1)[0];
    var imagURL = require(`../static/images/category/${imageName}`)
    catImage.setAttribute('src', `${imagURL}`)
    catImage.setAttribute('alt', "Sabka Bazzar" + category.key)
    categoryImageDiv.appendChild(catImage);

    var cateTextDiv = document.createElement('div')
    cateTextDiv.setAttribute('class', 'category-text')
    categoryDiv.appendChild(cateTextDiv)

    var cateHeader = document.createElement('header')
    var cateHeaderH1 = document.createElement('h1')
    cateHeaderH1.innerText = category.name;
    cateHeader.appendChild(cateHeaderH1)
    cateHeader.setAttribute('class', 'cate-text')
    cateTextDiv.appendChild(cateHeader)

    var cateDescription = document.createElement('p');
    cateDescription.innerText = category.description;
    cateDescription.setAttribute('class', 'category-desc')
    cateTextDiv.appendChild(cateDescription);

    var cateButton = document.createElement('button');
    cateButton.setAttribute('class', 'btn cat-btn');
    cateButton.innerText = 'Explore ' + category.key;
    cateTextDiv.appendChild(cateButton)
}

window.addEventListener("DOMContentLoaded", getCategories);


function slikSlider() {

    $('#banners').slick({
        dots: true,
        arrows: true
    })
}

setTimeout(slikSlider, 50)
