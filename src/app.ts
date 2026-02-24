import express from "express";
import { HealthCheckResponse } from "./api/v1/models/healthCheckModel";
import productRoutes from "../src/api/v1/routes/productRoutes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
})

app.use("/api/v1", productRoutes);

const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;