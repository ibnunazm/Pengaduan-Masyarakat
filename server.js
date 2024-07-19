import express from "express";
import db from "./config/database.js";

import masyarakatRoute from "./routes/masyarakatRoute.js";
import petugasRoute from "./routes/petugasRoute.js";
import pengaduanRoute from "./routes/pengaduanRoute.js";
import tanggapanRoute from "./routes/tanggapanRoute.js";

const app = express();
app.use(express.json());

app.use(masyarakatRoute);
app.use(petugasRoute);
app.use(pengaduanRoute);
app.use(tanggapanRoute);

await db.authenticate();
await db.sync();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
