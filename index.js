const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect to database
connectDB();

app.use(express.json({ extened: false }));

//Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));
const PORT = 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
