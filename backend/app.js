require("dotenv").config();
require("express-async-errors");

//express
const express = require("express");
const app = express();

//rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");

//database
const connectDB = require("./database/connectDB");

//routers
const authRouter = require("./routes/authRoutes");
const propertyRouter = require("./routes/propertyRoutes");
const communicationRouter = require("./routes/communicationRoutes");
const locationRouter = require("./routes/locationRoutes");
const counterRouter = require("./routes/counterRoutes");
const wishlistRouter = require("./routes/wishlistRoutes");

//middleware
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
); 

app.use(helmet());

 app.use(cors({ origin: [process.env.CLIENT_SIDE_URL,process.env.CLIENT_SIDE_URL_2, "http://localhost:5173", "http://localhost:3000"], credentials: true ,  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",}));
app.use(xss());
app.use(mongoSanitize());

app.use(cookieParser(process.env.JWT_SECRET));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/communication", communicationRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/count", counterRouter);
app.use("/api/v1/wishlist", wishlistRouter);


app.use(errorHandlerMiddleWare);
app.use(notFoundMiddleWare);

//server
const port = process.env.PORT || 4000;
const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
