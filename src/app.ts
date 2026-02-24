import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;