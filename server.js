require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para receber JSON no corpo das requisições

// Rotas
app.use("/api", productRoutes);

// Rota raiz (opcional)
app.get("/", (req, res) => {
    res.send("API de Produtos está rodando! 🚀");
});

// Configuração da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
});
