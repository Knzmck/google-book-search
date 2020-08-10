const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//  API routes
// app.use(routes)

//Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true }
);


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});