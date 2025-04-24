const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

// Start the server
app.listen(3004, () => console.log("Server running on http://localhost:3004"));
