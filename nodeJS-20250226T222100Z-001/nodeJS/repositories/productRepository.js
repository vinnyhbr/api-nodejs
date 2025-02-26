let products = [
    { id: 1, name: "Notebook", price: 3000 },
    { id: 2, name: "Smartphone", price: 1500 },
];

const getAllProducts = () => products;

const getProductById = (id) => products.find((p) => p.id === id);

const createProduct = (product) => {
    const newProduct = { id: products.length + 1, ...product };
    products.push(newProduct);
    return newProduct;
};

const updateProduct = (id, updatedData) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...updatedData };
    return products[index];
};

const deleteProduct = (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    return products.splice(index, 1)[0];
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
