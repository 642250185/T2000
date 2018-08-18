const calc_data = [
    { "brand": "Samsung", "model": "Galaxy S8+", "memory": 64, "discount": " 29 600 " },
    { "brand": "Samsung", "model": "Galaxy S8+", "memory": 128, "discount": " 32 800 " },
    { "brand": "Samsung", "model": "Galaxy S8", "memory": 64, "discount": " 28 500 " },
    { "brand": "Samsung", "model": "Galaxy S7 Edge", "memory": 32, "discount": " 22 100 " },
    { "brand": "Samsung", "model": "Galaxy S7 Edge", "memory": 64, "discount": " 22 700 " },
    { "brand": "Samsung", "model": "Galaxy S7 Edge", "memory": 128, "discount": " 25 000 " },
    { "brand": "Samsung", "model": "Galaxy S7", "memory": 32, "discount": " 20 700 " },
    { "brand": "Samsung", "model": "Galaxy S7", "memory": 64, "discount": " 21 200 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge+", "memory": 32, "discount": " 18 300 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge+", "memory": 64, "discount": " 19 500 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge+", "memory": 128, "discount": " 19 800 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge", "memory": 32, "discount": " 19 200 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge", "memory": 64, "discount": " 19 500 " },
    { "brand": "Samsung", "model": "Galaxy S6 Edge", "memory": 128, "discount": " 20 000 " },
    { "brand": "Samsung", "model": "Galaxy S6", "memory": 32, "discount": " 17 500 " },
    { "brand": "Samsung", "model": "Galaxy S6", "memory": 64, "discount": " 17 700 " },
    { "brand": "Samsung", "model": "Galaxy S6", "memory": 128, "discount": " 19 400 " },
    { "brand": "Samsung", "model": "Galaxy S5", "memory": 16, "discount": " 3 700 " },
    { "brand": "Samsung", "model": "Galaxy S5", "memory": 32, "discount": " 3 500 " },
    { "brand": "Samsung", "model": "Galaxy Note5", "memory": 64, "discount": " 15 200 " },
    { "brand": "Samsung", "model": "Galaxy A7 2017 ", "memory": 32, "discount": " 18 600 " },
    { "brand": "Samsung", "model": "Galaxy A7 2016", "memory": 16, "discount": " 7 700 " },
    { "brand": "Samsung", "model": "Galaxy A5 2017", "memory": 32, "discount": " 18 000 " },
    { "brand": "Samsung", "model": "Galaxy A5 2016", "memory": 16, "discount": " 6 100 " },
    { "brand": "Samsung", "model": "Galaxy A3 2017 ", "memory": 16, "discount": " 15 500 " },
    { "brand": "Samsung", "model": "Galaxy A3 2016", "memory": 16, "discount": " 4 900 " },
    { "brand": "Apple", "model": "iPhone 5", "memory": 16, "discount": " 2 300 " },
    { "brand": "Apple", "model": "iPhone 5", "memory": 32, "discount": " 2 700 " },
    { "brand": "Apple", "model": "iPhone 5", "memory": 64, "discount": " 3 100 " },
    { "brand": "Apple", "model": "iPhone 5c", "memory": 8, "discount": " 2 300 " },
    { "brand": "Apple", "model": "iPhone 5c", "memory": 16, "discount": " 2 700 " },
    { "brand": "Apple", "model": "iPhone 5c", "memory": 32, "discount": " 2 700 " },
    { "brand": "Apple", "model": "iPhone 5s", "memory": 16, "discount": " 15 200 " },
    { "brand": "Apple", "model": "iPhone 5s", "memory": 32, "discount": " 15 400 " },
    { "brand": "Apple", "model": "iPhone 5s", "memory": 64, "discount": " 16 400 " },
    { "brand": "Apple", "model": "iPhone 6", "memory": 16, "discount": " 18 100 " },
    { "brand": "Apple", "model": "iPhone 6", "memory": 32, "discount": " 17 500 " },
    { "brand": "Apple", "model": "iPhone 6", "memory": 64, "discount": " 19 000 " },
    { "brand": "Apple", "model": "iPhone 6", "memory": 128, "discount": " 19 600 " },
    { "brand": "Apple", "model": "iPhone 6 Plus", "memory": 16, "discount": " 17 900 " },
    { "brand": "Apple", "model": "iPhone 6 Plus", "memory": 64, "discount": " 20 000 " },
    { "brand": "Apple", "model": "iPhone 6 Plus", "memory": 128, "discount": " 20 100 " },
    { "brand": "Apple", "model": "iPhone 6s", "memory": 16, "discount": " 18 300 " },
    { "brand": "Apple", "model": "iPhone 6s", "memory": 32, "discount": " 20 300 " },
    { "brand": "Apple", "model": "iPhone 6s", "memory": 64, "discount": " 21 800 " },
    { "brand": "Apple", "model": "iPhone 6s", "memory": 128, "discount": " 24 000 " },
    { "brand": "Apple", "model": "iPhone 6s Plus", "memory": 16, "discount": " 20 900 " },
    { "brand": "Apple", "model": "iPhone 6s Plus", "memory": 32, "discount": " 21 700 " },
    { "brand": "Apple", "model": "iPhone 6s Plus", "memory": 64, "discount": " 22 900 " },
    { "brand": "Apple", "model": "iPhone 6s Plus", "memory": 128, "discount": " 25 400 " },
    { "brand": "Apple", "model": "iPhone 7", "memory": 32, "discount": " 25 500 " },
    { "brand": "Apple", "model": "iPhone 7", "memory": 128, "discount": " 27 500 " },
    { "brand": "Apple", "model": "iPhone 7", "memory": 256, "discount": " 29 600 " },
    { "brand": "Apple", "model": "iPhone 7 Plus", "memory": 32, "discount": " 29 600 " },
    { "brand": "Apple", "model": "iPhone 7 Plus", "memory": 128, "discount": " 33 300 " },
    { "brand": "Apple", "model": "iPhone 7 Plus", "memory": 256, "discount": " 33 800 " },
    { "brand": "Apple", "model": "iPhone SE", "memory": 16, "discount": " 16 500 " },
    { "brand": "Apple", "model": "iPhone SE", "memory": 32, "discount": " 17 000 " },
    { "brand": "Apple", "model": "iPhone SE", "memory": 64, "discount": " 18 200 " },
    { "brand": "Apple", "model": "iPhone SE", "memory": 128, "discount": " 19 600 " },
    { "brand": "Apple", "model": "iPhone 8", "memory": 64, "discount": " 35 200 " },
    { "brand": "Apple", "model": "iPhone 8", "memory": 256, "discount": " 38 900 " },
    { "brand": "Apple", "model": "iPhone 8 Plus", "memory": 64, "discount": " 40 800 " },
    { "brand": "Apple", "model": "iPhone 8 Plus", "memory": 256, "discount": " 40 800 " },
    { "brand": "Apple", "model": "iPhone X", "memory": 64, "discount": " 46 700 " },
    { "brand": "Apple", "model": "iPhone X", "memory": 256, "discount": " 50 000 " }
];

console.info(calc_data.length);