import express from "express";
import productRoutes from "../src/api/v1/routes/productRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1", productRoutes);

const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;