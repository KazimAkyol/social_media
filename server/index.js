import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(mull, file.originalname);
    },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */


/* ROUTES */


/* MONGOOSE SETUP */
// const PORT = process.env.PORT || 6001;
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => {
//         app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//         /* ADD DATA ONE TIME */
//         // User.insertMany(users);
//         // Post.insertMany(posts);
//     })
//     .catch((error) => console.log(`${error} did not connect`));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000, // 5 saniye timeout
        });
        console.log('✅ MongoDB bağlantısı başarılı');
    } catch (error) {
        console.error('❌ MongoDB bağlantı hatası:', error.message);
        process.exit(1); // Uygulamayı sonlandır
    }
};

connectDB();

// 20:25