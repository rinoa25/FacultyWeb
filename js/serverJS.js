// Angular application
var app  = angular.module("WebApp", []);

// Bio Controller
app.controller("bioCtrl" , function($scope, $http) {
  // Sends a get request to specified address to get values from the server for $scope
  $http.get("http://localhost:8080/biodata/").then(function(res){
    console.log(res);
    // Recieves data from server
    var content = res.data;
    // Gets the latest array from collection
    var current = content.length - 1;
    // Assigns latest variables from server to $scope variables
    $scope.specialM = content[current].specialM;
    $scope.biography = content[current].biography;
    $scope.profilePic = content[current].profilePic;
  });
});

// News Controller
app.controller("newsCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/newsdata/").then(function(res){
    console.log(res);
    var content = res.data;

    // Loops through each document in the collection
    // Assigns each info to its respective angular scope variable based on its position #

    // Side note: If there's a duplicate position #, the latest info with position number replaces the info before with the same position #
    for (var data of content) {
      let pos = data.newspos;
      switch (pos) {
        case "1":
          $scope.news = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "2":
          $scope.news2 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "3":
          $scope.news3 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "4":
          $scope.news4 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "5":
          $scope.news5 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "6":
          $scope.news6 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "7":
          $scope.news7 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "8":
          $scope.news8 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "9":
          $scope.news9 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
        case "10":
          $scope.news10 = {newsTitle: data.newsTitle, newsDate: data.newsDate, newsMonth: data.newsMonth, newsDay: data.newsDay, newsYear: data.newsYear, newsContent: data.newsContent};
          break;
      }
    }

  });
});

// Pub Controller
app.controller("pubCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/pubdata/").then(function(res){
    console.log(res);
    var content = res.data;

    // Loops through each document in the collection & there's a nested switch statements
    // Categorizes by type first then assigns each info by position # (based on type)
    // to its respective angular scope variable
    for (var data of content) {
      let type = data.pubType;
      switch (type) {
        case "Journal":
          let jpos = data.pubjournalpos;

          switch (jpos) {
            case "1":
              $scope.journal = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "2":
              $scope.journal2 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "3":
              $scope.journal3 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "4":
              $scope.journal4 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "5":
              $scope.journal5 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "6":
              $scope.journal6 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
          }
          break;

        case "Conference Paper":
          let cpos = data.pubcpaperpos;

          switch (cpos) {
            case "1":
              $scope.cpaper = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "2":
              $scope.cpaper2 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "3":
              $scope.cpaper3 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "4":
              $scope.cpaper4 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "5":
              $scope.cpaper5 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
          }
          break;

        case "Workshop Paper":
          let wpos = data.pubwpaperpos;

          switch (wpos) {
            case "1":
              $scope.wpaper = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "2":
              $scope.wpaper2 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "3":
              $scope.wpaper3 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
          }
          break;

        case "Poster":
          let ppos = data.pubposterpos;

          switch (ppos) {
            case "1":
              $scope.poster = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "2":
              $scope.poster2 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "3":
              $scope.poster3 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "4":
              $scope.poster4 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
          }
          break;

        case "Technical Report":
          let tpos = data.pubtreportpos;

          switch (tpos) {
            case "1":
              $scope.treport = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "2":
              $scope.treport2 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
            case "3":
              $scope.treport3 = {pubTitle: data.pubTitle, pubLink: data.pubLink, pubAuthor: data.pubAuthor, pubPublisher: data.pubPublisher, pubYear: data.pubYear};
              break;
          }
          break;
      }
    }

  });
});

// Press Controller
app.controller("pressCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/pressdata/").then(function(res){
    console.log(res);
    var content = res.data;

    // A function that filters untrusted external URLS to become trusted
    app.filter('trusted', ['$sce', function ($sce) {
      return $sce.trustAsResourceUrl;
    }]);

    // Loops through each document in the collection
    // Assigns each info to its respective angular scope variable based on its position #

    // Side note: If there's a duplicate position #, the latest info with position number replaces the info before with the same position #
    for (var data of content) {
      let pos = data.presspos;
      switch (pos) {
        case "1":
          $scope.press = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
        case "2":
          $scope.press2 = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
        case "3":
          $scope.press3 = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
        case "4":
          $scope.press4 = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
        case "5":
          $scope.press5 = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
        case "6":
          $scope.press6 = {pressTitle: data.pressTitle, pressLink: data.pressLink, pressPublisher: data.pressPublisher, pressDay: data.pressDay, pressMonth: data.pressMonth, pressYear: data.pressYear, pressimg: data.pressimg};
          break;
      }
    }

  });
});

// Research Controller
app.controller("researchCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/researchdata/").then(function(res){
    console.log(res);
    var content = res.data;
    var current = content.length - 1;
    // Assigns latest variables from server to $scope variables
    $scope.researchTitle = content[current].researchTitle;
    $scope.researchDescrip = content[current].researchDescrip;
    $scope.researchImg = content[current].researchImg;
  });
});

// Teaching Controller
app.controller("teachingCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/teachingdata/").then(function(res){
    console.log(res);
    var content = res.data;

    // Loops through each document in the collection
    // Assigns each info to its respective angular scope variable based on its position #

    // Side note: If there's a duplicate position #, the latest info with position number replaces the info before with the same position #
    for (var data of content) {
      let pos = data.coursepos;
      switch (pos) {
        case "1":
          $scope.teaching = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
        case "2":
          $scope.teaching2 = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
        case "3":
          $scope.teaching3 = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
        case "4":
          $scope.teaching4 = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
        case "5":
          $scope.teaching5 = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
        case "6":
          $scope.teaching6 = {courseTitle: data.courseTitle, courseNumber: data.courseNumber, courseSem: data.courseSem, courseYear: data.courseYear};
          break;
      }
    }

  });
});

// Group Controller
app.controller("groupCtrl" , function($scope, $http) {
  $http.get("http://localhost:8080/groupdata/").then(function(res){
    console.log(res);
    var content = res.data;

    // Loops through each document in the collection & there's a nested switch statements

    // Categorizes by status first then assigns each info by position # (based on status)
    // to its respective angular scope variable
    for (var data of content) {
      let status = data.status;
      switch (status) {
        case "current":
          let cpos = data.groupcurrentpos;

          switch (cpos) {
            case "1":
              $scope.current = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "2":
              $scope.current2 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "3":
              $scope.current3 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "4":
              $scope.current4 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
          }
          break;

        case "past":
          let ppos = data.grouppastpos;

          switch (ppos) {
            case "1":
              $scope.past = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "2":
              $scope.past2 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "3":
              $scope.past3 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "4":
              $scope.past4 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "5":
              $scope.past5 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
            case "6":
              $scope.past6 = {name: data.name, degree: data.degree, grad: data.grad, studentImg: data.studentImg};
              break;
          }
          break;
      }
    }

  });
});

// Contact Controller
app.controller("contactCtrl" , function($scope, $sce, $http) {
  $http.get("http://localhost:8080/contactdata/").then(function(res){
    console.log(res);
    var content = res.data;
    var current = content.length - 1;
    // Assigns latest variables from server to $scope variables
    $scope.address = content[current].address;
    $scope.email = content[current].email;
    $scope.phone = content[current].phone;
    // AngularJS prevents binding ng-src to untrusted external resources, such as an external URL.
    // Therfore $sce.trustAsResourceUrl is used to mark the external URL as trusted.
    $scope.map = $sce.trustAsResourceUrl(content[current].map);
  });
});
