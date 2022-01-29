// Instantiates the following packages
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var htmlspecialchars = require('locutus/php/strings/htmlspecialchars');
// Login session packages
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var flash = require("connect-flash");

// Configures passport:

// Checks if user is authorized by checking the database
passport.use(new LocalStrategy(
  function(username, password, done) {
    dbo.collection("registerinfo", function (error, collection) {
      if (error) throw err;
      collection.findOne({
        'username': "admin",
        'password': "grouptwentyfour123"
      },
      function (err, user) {
        if (err) {
          return done(err);
        }
        if (user.username != username) {
          //console.log('Username does not exist!');
          return done(null, false, {message: 'Username does not exist!'});
        }
        if (user.password != password) {
          //console.log('Incorrect password!');
          return done(null, false, {message: 'Incorrect password!'});
        }
        return done(null, user);
      });
    });
}));

// Configures Passport authenticated session persistence:

// Supplies the userID
passport.serializeUser(function(user, done) {
  done(null, user);
});
// Checks the userID
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Configure multer storage
var storage = multer.diskStorage({

  // After "renaming" the uploaded file,
  // the image gets saved / stored to '/images' directory
  destination: function (req, file, callback) {
    callback(null, __dirname + '/images');
  },

  // "Renames" the uploaded image file (to original name of the image)
  // in order to move the file
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

// Initializes upload variable
var upload = multer({ storage: storage });

// Defining application to be express
var app = express ();

// Gives the permissions required to send JSON to angular
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Credentials", true);
res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, content-type,application/json");
next();
});

// Ensures form data gets parsed to JSON object properly
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Creates sessions
app.use(session({
  // hashes the cookies
  secret: 'finalprojectgrouptwentyfour',
  // Decides if session should be updated even when no change is made to data on the backend
  // If true, when page is reloaded, session is updated even though no change is made to the session specifically
  // set to false so session is only updated when changes are directly made to it
  resave: false,
  // Creates a cookie and session for user automatically (just by visiting a page)
  // Set to false as we want the user to login and be authenticated first
  saveUninitialized: false,
}))

// Initializes passport & session
app.use(passport.initialize());
app.use(passport.session());

// Initializes flash error messages
app.use(flash());

// Includes the module mongodb
var MongoClient = require('mongodb').MongoClient
// Specifies the host name(address) / port number & we want to connect to
var  url = "mongodb://localhost:27017/";

// Tells the client which database it should connect to
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db('FinalWeb');
});

// When localhost:8080 is visited, index.html will be rendered and shown;
// CSS & JS files will be sent to the browser as well
app.use(express.static(__dirname));

// Before rendering these files, server will checked if user is authorized

app.get('/admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/admin.html');
})

app.get('/bio-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/bio-admin.html');
})

app.get('/news-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/news-admin.html');
})

app.get('/pub-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/pub-admin.html');
})

app.get('/press-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/press-admin.html');
})

app.get('/research-program-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/research-program-admin.html');
})

app.get('/teaching-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/teaching-admin.html');
})

app.get('/group-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/group-admin.html');
})

app.get('/contact-admin', checkAuthenticated, function(req, res){
  res.sendFile(__dirname + '/adminpages' + '/contact-admin.html');
})

app.get('/login', checkNotAuthenticated, function(req, res){
	res.sendFile(__dirname + '/adminpages'+ '/login.html');
  console.log(req.flash('error'));
});

// Handles POST request of Login
app.post('/loginupdate', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect : '/admin',
  failureRedirect : '/login',
  failureFlash : true
}));

// Handles POST request of BIO;
// ultimately stores parsed data in collection inside database
app.post('/bioupdate/',  upload.single('profilePic'), function(req, res) {
  console.log(req.originalUrl);
  var specialM = htmlspecialchars(req.body.specialM);
  var biography = htmlspecialchars(req.body.biography);
  var profilePic = '/images/' + req.file.originalname;

  // Defines a JS object that has all (3) properties recieved from form data
  var newBio= {specialM: specialM, biography: biography, profilePic: profilePic};

  // We access the collection "bioinfo" in "FinalWeb" database
  // and add ONE object / document in the collection that is inside the database
  dbo.collection("bioinfo").insertOne(newBio, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in bioinfo");
    // User will be redirected to the respective main page
    // so that they'll immdeiately see the changes they made
   res.redirect('/');
  });
});

// Handles POST request of NEWS;
app.post('/newsupdate/', function(req, res) {
  console.log(req.originalUrl);
  // Adds req.body (all parsed info submitted by form) to collection
  var newsTitle = htmlspecialchars(req.body.newsTitle);
  var newsDate = req.body.newsDate;
  var newsMonth = req.body.newsMonth;
  var newsDay = req.body.newsDay;
  var newsYear = req.body.newsYear;
  var newspos = req.body.newspos;
  var newsContent = htmlspecialchars(req.body.newsContent);
  var newNews= {newsTitle: newsTitle, newsDate: newsDate,
    newsMonth: newsMonth, newsDay: newsDay,
    newsYear: newsYear, newspos: newspos, newsContent: newsContent};
  dbo.collection("newsinfo").insertOne(newNews, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in newsinfo");
    res.redirect('/');
  });
});

// Handles POST request of PUB
app.post('/pubupdate/', function(req, res) {
  console.log(req.originalUrl);
  var pubTitle = htmlspecialchars(req.body.pubTitle);
  var pubLink = req.body.pubLink;
  var pubAuthor = htmlspecialchars(req.body.pubAuthor);
  var pubPublisher = htmlspecialchars(req.body.pubPublisher);
  var pubYear = req.body.pubYear;
  var pubType = req.body.pubType;
  var pubjournalpos = req.body.pubjournalpos;
  var pubcpaperpos = req.body.pubcpaperpos;
  var pubwpaperpos = req.body.pubwpaperpos;
  var pubposterpos = req.body.pubposterpos;
  var pubtreportpos = req.body.pubtreportpos;
  var newPub= {pubTitle: pubTitle, pubLink: pubLink, pubAuthor: pubAuthor,
    pubPublisher: pubPublisher, pubYear: pubYear, pubType: pubType, pubjournalpos: pubjournalpos, pubcpaperpos: pubcpaperpos, pubwpaperpos: pubwpaperpos, pubposterpos: pubposterpos, pubtreportpos: pubtreportpos};
  dbo.collection("pubinfo").insertOne(newPub, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in pubinfo");
    res.redirect('/pub.html');
  });
});

// Handles POST request of PRESS
app.post('/pressupdate/',  upload.single('pressimg'), function(req, res) {
  console.log(req.originalUrl);
  var pressTitle = htmlspecialchars(req.body.pressTitle);
  var pressLink = req.body.pressLink;
  var pressPublisher = htmlspecialchars(req.body.pressPublisher);
  var pressDay = req.body.pressDay;
  var pressMonth = req.body.pressMonth;
  var pressYear = req.body.pressYear;
  var presspos = req.body.presspos;
  var pressimg = '/images/' + req.file.originalname;
  var newPress= {pressTitle: pressTitle, pressLink: pressLink,
    pressPublisher: pressPublisher, pressDay: pressDay,
    pressMonth: pressMonth, pressYear: pressYear, presspos: presspos, pressimg: pressimg};
  dbo.collection("pressinfo").insertOne(newPress, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in pressinfo");
    res.redirect('/press.html');
  });
});

// Handles POST request of RESEARCH
app.post('/researchupdate/',  upload.single('researchImg'), function(req, res) {
  console.log(req.originalUrl);
  var researchTitle = htmlspecialchars(req.body.researchTitle);
  var researchDescrip = htmlspecialchars(req.body.researchDescrip);
  var researchImg = '/images/' + req.file.originalname;
  var newResearch = {researchTitle: researchTitle, researchDescrip: researchDescrip, researchImg: researchImg};
  dbo.collection("researchinfo").insertOne(newResearch, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in researchinfo");
    res.redirect('/research.html');
  });
});

// Handles POST request of TEACHING
app.post('/teachingupdate/', function(req, res) {
  console.log(req.originalUrl);
  var courseTitle = htmlspecialchars(req.body.courseTitle);
  var courseNumber = req.body.courseNumber;
  var courseSem = req.body.courseSem;
  var courseYear = req.body.courseYear;
  var coursepos = req.body.coursepos;
  var newTeaching = {courseTitle: courseTitle, courseNumber: courseNumber, courseSem: courseSem, courseYear: courseYear, coursepos: coursepos};
  dbo.collection("teachinginfo").insertOne(newTeaching, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in teachinginfo");
    res.redirect('/teaching.html');
  });
});

// Handles POST request of GROUP
app.post('/groupupdate/',  upload.single('studentImg'), function(req, res) {
  console.log(req.originalUrl);
  var name = htmlspecialchars(req.body.name);
  var degree = htmlspecialchars(req.body.degree);
  var grad = req.body.grad;
  var status = req.body.status;
  var groupcurrentpos = req.body.groupcurrentpos;
  var grouppastpos = req.body.grouppastpos;
  var studentImg = '/images/' + req.file.originalname;
  var newGroup = {name: name, degree: degree, grad: grad,
    status: status, groupcurrentpos: groupcurrentpos, grouppastpos: grouppastpos, studentImg: studentImg};
  dbo.collection("groupinfo").insertOne(newGroup, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in groupinfo");
    res.redirect('/group.html');
  });
});

// Handles POST request of CONTACT
app.post('/contactupdate/', function(req, res) {
  console.log(req.originalUrl);
  var address = htmlspecialchars(req.body.address);
  var email = req.body.email;
  var phone = req.body.phone;
  var map = req.body.map;
  var newContact = {address: address, email: email, phone: phone, map: map};
  dbo.collection("contactinfo").insertOne(newContact, function(err, result) {
    if (err) throw err;
    console.log("New info inserted in contactinfo");
    res.redirect('/contact.html');
  });
});

// Shows BIO DATA
// Handles GET request; shows data to client-side
app.get('/biodata/', function(req, res){
  console.log(req.originalUrl);
  // Find everything and convert it to an array
  dbo.collection("bioinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows NEWS DATA
app.get('/newsdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("newsinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows PUB DATA
app.get('/pubdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("pubinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows PRESS DATA
app.get('/pressdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("pressinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows RESEARCH DATA
app.get('/researchdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("researchinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows TEACHING DATA
app.get('/teachingdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("teachinginfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows GROUP DATA
app.get('/groupdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("groupinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// Shows CONTACT DATA
app.get('/contactdata/', function(req, res){
  console.log(req.originalUrl);
  dbo.collection("contactinfo").find({}).toArray(function(err, result) {
    if (err) throw err;
    if (result == "") {
      res.send("Empty! No data!");
    }
    else {
      res.send(result);
    }
  });
});

// If user clicks the logout button, their session ends and they are redirected to the login page
app.post('/logout/', function(req, res){
  req.logOut()
  res.redirect('/login')
})

// Checks if user is logged in:
// if user is not logged in, they are redirected to login page if they try to access any admin pages
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

// Checks if user is NOT logged in:
// if user is logged in, and they try to access the login page again, they are redirected to the admin page
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/admin')
  }
  next()
}

// Constantly listening on the port 8080
app.listen(8080);
