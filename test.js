const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_datbase", { useNewUrlParser: true });

BlogPost.create(
  {
    title: "El dia que Marta comio el pollo de Southern Fried Chicken!!",
    body: "No recuerda el dia, pero fue para ella un dia maravilloso. Fue el dia que comio por primera vez este esquisito manjar de este famoso restaurante Maltes.   ",
  },
  (error, blogspost) => {
    console.log(error, blogspost);
  }
);
// const id = "63b98abc9b4378f4ad5ab282";
// BlogPost.findByIdAndUpdate(
//   id,
//   {
//     title: "This is the new Title my Boy!!!",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );
