const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://andrewmiddleton1:Gundaroo484@cluster0.ree7w.mongodb.net/exercise", {
    useNewUrlParser: true,
    useFindAndModify: false
});


// // routes

app.use(require("./routes/user-api-routes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
