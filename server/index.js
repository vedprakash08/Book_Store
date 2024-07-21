import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { AdminRouter } from "./routes/auth.js";
import { studentRouter } from "./routes/student.js";
import { bookRouter } from "./routes/book.js";
import { Book } from "./models/Book.js";
import { Student } from "./models/Student.js";
import { Admin } from "./models/Admin.js";
import bodyParser from "body-parser";
import { AdminAccount } from "./seed.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//     // origin:['http://localhost:5173'],
//     origin:['https://book-store-client-murex.vercel.app/'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }))

const corsOptions = {
  origin: [

    "http://localhost:3001",
    "https://book-store-we4z.vercel.app",
    
    "https://book-store-client-murex.vercel.app",
    "http://localhost:5173",
    "https://book-store-nine-eta.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
// Handle preflight requests
app.options("*", cors(corsOptions));
app.use(cookieParser());
dotenv.config();


//---------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));
//---------------

app.get("/", (req, res, next) => {
  res.sendFile(path.join(clientDistPath,"index.html"));
  // res.status(200).json({
    // message: "hello",
    // f_name : __filename
  // });
});

app.use("/auth", AdminRouter);
app.use("/student", studentRouter);
app.use("/book", bookRouter);

app.get("/dashboard", async (req, res) => {
  try {
    const student = await Student.countDocuments();
    const admin = await Admin.countDocuments();
    const book = await Book.countDocuments();
    return res.json({ ok: true, student, book, admin });
  } catch (err) {
    return res.json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
