
// Función para filtrar productos
function filterProducts(products, maxPrice, available){
    const filteredProducts = products.filter(product => product.price <= maxPrice && product.available === available);
    return filteredProducts;
}

// Función para validar los productos
function validateProductFilter(actualProducts, expectedProducts){

    if(actualProducts.length === expectedProducts.length){
        return "PASS";
    }else{
        return "FAIL";
    }
}

// Creamos un array que contendra nuestros productos
const products = [
    { id: 1, name: "Laptop", price: 15000, available: true },
    { id: 2, name: "Mouse", price: 500, available: true },
    { id: 3, name: "Keyboard", price: 1200, available: false },
    { id: 4, name: "Monitor", price: 4500, available: true },
    { id: 5, name: "Headphones", price: 1800, available: true }
];

// --------------------------------------------------------------------------- //
// Probando las funciones:
// 1. Para filtrar por precio y disponibilidad
const filteredProducts = filterProducts(products, 5000, true);
console.log(filteredProducts);

// Se vuelve a llamar a la funcion de filtrar, pero para validar resultado actual vs esperado
const actualProducts = filterProducts(products, 5000, true);

//Creamos un array que contendra productos ya filtrados
const expectedProducts = [
    { id: 2, name: "Mouse", price: 500, available: true },
    { id: 4, name: "Monitor", price: 4500, available: true },
    { id: 5, name: "Headphones", price: 1800, available: true }
];

// 2. Para validar los productos despues del filtro, segun los productos actuales vs los esperados
console.log(validateProductFilter(actualProducts, expectedProducts));

