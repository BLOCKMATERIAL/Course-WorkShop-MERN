const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://materialblock:qwerty201868@main.k23of.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
