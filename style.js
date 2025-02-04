let arrayListBuy = [
    {
        product: 'Молоко',
        count: 2,
        buy: true
    },
    {
        product: 'Масло',
        count: 1,
        buy: false
    },
    {
        product: 'Хлеб',
        count: 1,
        buy: true
    },
    {
        product: 'Яйца',
        count: 0,
        buy: false
    },
    {
        product: 'Кунжут',
        count: 1,
        buy: false
    },
    {
        product: 'Шоколад',
        count: 0,
        buy: true
    },
    {
        product: 'Игрушка',
        count: 0,
        buy: true
    },
];

function sortListBuy(array){
    return array.sort((a, b) => b.buy - a.buy); // Сортируем по полю buy (true - в начале)
}

function addPurchase(name, count, buy){
    let foundProduct = arrayListBuy.find(listProduct => listProduct.product === name);
    if(foundProduct){
        foundProduct.count += count;
    } else {
        arrayListBuy.push({
            product: name,
            count: count,
            buy: buy
        });
    }
    return sortListBuy(arrayListBuy);
}

function buyProduct(name){
    let listBuyProduct = arrayListBuy.find(products => products.product === name);
    if(listBuyProduct){
        listBuyProduct.buy = true;
    } else {
        return 'Такого продукта нет';
    }
    return sortListBuy(arrayListBuy);
}

// Отображение начального списка
console.log(sortListBuy(arrayListBuy));

// Примеры использования функций
console.log(addPurchase('Молоко', 2, true));
console.log(addPurchase('PS5', 1, true));
console.log(addPurchase('Smm', 2, false));

console.log(buyProduct('Smm'));
console.log(buyProduct('Масло'));
console.log(buyProduct('3fw'));

function addProduct(){
    const NAMEPRODUCT = document.getElementById('productName').value;
    const COUNTPRODUCT = parseInt(document.getElementById('productCount').value);
    const BUYPRODUCT = document.querySelector('input[name="productBuy"]:checked').value === 'true';

    if(!NAMEPRODUCT || !COUNTPRODUCT){ // Исправлено: заменено name на NAMEPRODUCT и count на COUNTPRODUCT
        alert('Заполните все поля!');
        return;
    }

    addPurchase(NAMEPRODUCT, COUNTPRODUCT, BUYPRODUCT);
    document.getElementById('productName').value = '';
    document.getElementById('productCount').value = '';
    displayProducts();
}

function displayProducts() {
    const productList = document.getElementById('productList');
    const purchasedList = document.getElementById('purchasedList');

    productList.innerHTML = '';
    purchasedList.innerHTML = '';

    arrayListBuy.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.product} - Количество: ${product.count}`;

        if (product.buy) {
            purchasedList.appendChild(li); // Список купленных продуктов
        } else {
            productList.appendChild(li); // Остальные продукты
        }
    });
}

// Изначально отображаем продукты
displayProducts();
