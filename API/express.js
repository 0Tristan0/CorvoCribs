const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const { default: getApartments } = require("./zillow");

dotenv.config();
const PORT = process.env.API_PORT || 3000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());


// DOWN HERE

app.get("/newApartments", (req, res) => {
    let totalApartments = [];

    let zillowApartments = getApartments();
    let redfinApartments = getApartments();

    totalApartments.push(zillowApartments);
    totalApartments.push(redfinApartments);

    return res.status(200).json(totalApartments);
});

app.post("/status", (req, res) => {
    return res.status(200).json({ status: "Fully functional." });
});

// STOP HERE


app.listen(PORT, () => {
    initializeFirebaseApp();
    console.log("Ravenous API listening on port [", PORT, "] !\n");
});
