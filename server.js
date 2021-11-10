const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/routes.js");
require("dotenv").config();

// Mongoose Connection
mongoose
	.connect(process.env.DB_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));

const db = mongoose.connection;

// Middlewares
app.use(express.json());
app.use("/cats", routes);

app.listen(PORT, () => console.log(`Server alive at http://localhost:${PORT}`));
