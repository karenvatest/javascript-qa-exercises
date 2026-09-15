
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

// Esta funcion fue de prueba, para validar filtrar solo por nombre, y null si no estaba en el listado de productos
/*function findProductByName(products, name){
    const productByName = products.find(product => product.name === name);

    if (productByName !== undefined){
        return productByName;
    }else{
        return null;
    }
}*/

// Funcion para buscar productos por letra o palabra
function findProductByName(products, searchTerm){
   
    const productByName = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return productByName;
}

// Funcion para validar la busqueda de productos, de los actuales vs la cantidad esperada de la busqueda
function validateProductSearch(actualProducts, expectedQuantity){
    if(actualProducts.length === expectedQuantity){
        return "PASS"
    }
    return "FAIL";
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

// Para filtrar por nombre o letra que contenga el producto
// y validar el producto segun la busqueda contra el listado de productos
const result1 = findProductByName(products, "mouse");
console.log("Test 1 - Buscar Mouse:", validateProductSearch(result1, 1));

const result2 = findProductByName(products, "o");
console.log('Test 2 - Buscar "o":', validateProductSearch(result2, 5));

const result3 = findProductByName(products, "tablet");
console.log("Test 3 - Buscar Tablet:", validateProductSearch(result3, 0));
