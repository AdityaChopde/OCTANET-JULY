
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            image: 'op.jpg',
        },
        {
            image: 'sams.jpg',
        },
        {
            image: 'vi.jpeg',
        },
        {
            image: 'mi.png',   
        },
        {
            image: 'mot.png',
        },
        {
            image: 'one.jpg',
        },
        {
            image: 'ipho.jpg',
        },
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        productList.appendChild(productItem);
    });

    document.getElementById('shopNow').addEventListener('click', function() {
        window.location.href = '#products';
    });
});
