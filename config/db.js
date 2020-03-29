require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const mongoDB = process.env.DB_URL;

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, 
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6 
}

mongoose.connect(mongoDB, options)
.then(() =>  {
  console.log("Connected to Mongo Atlas");
})
.catch(err => {
  console.error(err);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log(`Connected to Database`);
});

module.exports = db;