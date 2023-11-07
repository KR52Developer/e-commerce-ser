import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "../server/routers/userRoutes.js";
import productRoutes from "../server/routers/productRoutes.js";
import cartRoutes from "../server/routers/cartRoutes.js";







dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

// This will add mongoose and dotenv to your project’s node_modules directory and list them as dependencies in your package.json file.

// mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
// It provides a straightforward, schema - based solution to model your application data and includes
// built -in type casting, validation, query building, business logic hooks and more, out of the box.

// dotenv is a zero - dependency module that loads environment variables from a.env file into process.env.
// Storing configuration in the environment separate from code is based on The Twelve - Factor App methodology.





app.use(cors());
app.use(express.json({ limit: "20mb" }));
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));




app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);


app.get("/", (req, res) => {
    res.status(200).send("Welcome to Ecommerce Server");
});

// app.listen(PORT, () => {
//     console.log(`Server is running in https:/localhost:${PORT}`);
// });


// mongoose.connect(process.env.DB_HOST);
// console.log(process.env.DB_HOST);


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is succesfully  connected with database `);
        });
    })
    .catch((error) => console.log(error));