const productRepository = require("../repositories/productRepository");

const getProducts = () => productRepository.getAllProducts();

const getProductById = (id) => productRepository.getProductById(id);

const createProduct = (productData) => {
    if (!productData.name || !productData.price) {
        throw new Error("Nome e preço são obrigatórios");
    }
    return productRepository.createProduct(productData);
};

const updateProduct = (id, updatedData) => {
    const product = productRepository.updateProduct(id, updatedData);
    if (!product) throw new Error("Produto não encontrado");
    return product;
};

const deleteProduct = (id) => {
    const product = productRepository.deleteProduct(id);
    if (!product) throw new Error("Produto não encontrado");
    return product;
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
