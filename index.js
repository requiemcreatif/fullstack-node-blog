const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost.js");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(express.static("public"));
//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining the Routes / Paths
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogpost,
  });
});

//////////////////////////////////

app.get("/posts/new", (req, res) => {
  res.render("create");
});

//function to handle POST request:

app.post("/posts/store", async (req, res) => {
  //model creates a new doc with browser data
  await BlogPost.create(req.body);

  res.redirect("/");
});

//display List of blog posts
app.get("/", async (req, res) => {
  try {
    const blogposts = await BlogPost.find({});
    console.log(blogposts);
    res.render("index", {
      blogposts,
    });
  } catch (error) {
    console.error(error); // log any errors that occur
  }
});

//listening to the server
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
