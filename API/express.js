import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { getZillowApartments } from "./zillow.js";
import analyzeApartment from "./ai_analysis.js";


dotenv.config();
const PORT = process.env.API_PORT || 3000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());


// DOWN HERE

app.get("/newApartments", async (req, res) => {
    try {
        let zillowApartments = await getZillowApartments();
        return res.status(200).json(zillowApartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/analyzeApartment", async (req, res) => {
    try {
        let analysis = await analyzeApartment(req.body);
        return res.status(200).json(analysis);
    } catch (error) {
        console.error("Error analyzing apartment:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/status", (req, res) => {
    return res.status(200).json({ status: "Fully functional." });
});

// STOP HERE


app.listen(PORT, () => {
    console.log("Ravenous API listening on port [", PORT, "] !\n");
});
