//create an array containing information about different products, including their names, prices, and descriptions.

const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" ,imageURL:  "images/laptop.jpg"},
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are",imageURL:  "/images/smartphone.jpg" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience",imageURL:  "/images/headphones.jpg" }
];

//write a function to display the product information on the webpage dynamically.

function displayProducts(products){
    const container = document.getElementById('productContainer')


    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
    

        //product name
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        //product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productDiv.appendChild(productPrice);

        //product description
        const productDesc = document.createElement('p');
        productDesc.textContent = product.description;
        productDiv.appendChild(productDesc);

        //product image
        const productImage = document.createElement('img');
        productImage.src = product.imageURL;
        productImage.style.width = "300px";
        productDiv.appendChild(productImage);

        container.appendChild(productDiv);

    });
}



// implement an event listener to trigger the display of products when the page loads
window.addEventListener('DOMContentLoaded',()=> {
    displayProducts(products)
})