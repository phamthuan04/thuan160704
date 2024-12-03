const openShopping = document.querySelector(".shopping");
const body = document.querySelector("body");
const closeShopping = document.querySelector(".closeShopping")
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart")
const total = document.querySelector(".total")
const quantity = document.querySelector(".quantity")

openShopping.addEventListener("click", function () {
    body.classList.add("active");
    
})
closeShopping.addEventListener("click", function () {
    body.classList.remove("active");
    
})
let products = [
    {id: 1, name: "AK47", image: "1.png", price:4000000},
    {id: 2, name: "M4A1", image: "2.png", price:3500000},
    {id: 3, name: "600CZ", image: "600cz.png", price:4000000},
    {id: 4, name: "CRB", image: "CRB.png", price:4000000},
    {id: 5, name: "MP5", image: "Mp5.png", price:4000000},
    {id: 6, name: "SMG", image: "SMG.png", price:4000000},
];
const listCards = JSON.parse(localStorage.getItem("listCards")) || [];


function initApp() {
    for (let i = 0; i < products.length; i++) {
        let value = products[i];
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="/image/${value.image}" />
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addToCart(${i})">Add to Cart</button>
        `;
        
        list.appendChild(newDiv);
    }
    
};
initApp();


function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] ={...products[key], quantity: 1}
    } else{
        listCards[key].quantity +=1;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards));
    reloadCart();
}


function reloadCart() {
    listCart.innerHTML="";
    let count = 0;
    let totalPrice = 0;
    for (let i = 0; i < listCards.length; i++) {
        let value = listCards[i];
        if (value !=null) {
            let newLi = document.createElement("li");
            newLi.innerHTML=`
            <div> <img src="/image/${value.image}" /></div>
            <div>${value.name}</div>
            <div>${value.price}</div>
            <div>
            <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
            <div>${value.quantity}</div>
            <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCart.appendChild(newLi);
            totalPrice += value.price * value.quantity;
            count += value.quantity;

        }
        
    }
total.innerText = totalPrice;
quantity.innerText = count;
    
}
reloadCart();

function changeQuantity(index, newQuantity) {
    if (newQuantity <=0) {
        delete listCards[index];
    }else{
        listCards[index].quantity = newQuantity;
    }
    localStorage.setItem("listCarts", JSON.stringify(listCards));
    reloadCart();
}
changeQuantity();