const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3009,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    /*process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/newsellerplatform",*/
    "mongodb+srv://GoBillionGBdev20@cluster0-yltu8.mongodb.net/test?retryWrites=true&w=majority",
};

export default config;
