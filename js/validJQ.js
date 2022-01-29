// Validation for bio-admin
$(document).ready(function () {
  $("#loginAdmin").validate({ // initialize the plugin
    rules: {
      username: {
        required: true,
        minlength: 3
      },
      password: {
        required: true,
        minlength: 8
      }
    },
    messages: {
      username: {
        required: "Please enter your username",
        minlength: "Please enter at least 3 characters"
      },
      password: {
        required: "Please enter your password",
        minlength: "Please enter at least 8 characters"
      }
    }
  });
});
// Validation for bio-admin
$(document).ready(function () {
  $("#bioAdmin").validate({ // initialize the plugin
    rules: {
      specialM: {
        required: true,
        minlength: 10
      },
      biography: {
        required: true,
        minlength: 20
      },
      profilePic: {
        required: true
      }
    },
    messages: {
      specialM: {
        required: "Please enter your special mentions",
        minlength: "Please enter at least 10 characters"
      },
      biography: {
        required: "Please enter your biography",
        minlength: "Please enter at least 20 characters"
      }
    }
  });
});
// Validation for news-admin
$(document).ready(function () {
  $("#newsAdmin").validate({ // initialize the plugin
    rules: {
      newsTitle: {
        required: true,
        minlength: 5
      },
      newsDate: {
        require_from_group: [1, ".selectnewsDate"]
      },
      newsMonth: {
        require_from_group: [1, ".selectnewsMonth"]
      },
      newsDay: {
        required: true,
        digits: true,
        range: [1, 31]
      },
      newsYear: {
        required: true,
        digits: true,
        rangelength: [4, 4]
      },
      newspos: {
        require_from_group: [1, ".selectewspos"]
      },
      newsContent: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      newsTitle: {
        required: "Please enter the title of the news",
        minlength: "Please enter at least 5 characters"
      },
      newsDate: {
        require_from_group: "Select at least one option"
      },
      newsMonth: {
        require_from_group: "Select at least one option"
      },
      newsDay: {
        required: "Please enter the news' day of publication",
        digits: "Please enter digits only",
        range: "Please specify a valid day"
      },
      newsYear: {
        required: "Please enter the news' year of publication",
        digits: "Please enter digits only",
        rangelength: "Please specify a valid year"
      },
      newspos: {
        require_from_group: "Select at least one option"
      },
      newsContent: {
        required: "Please enter the content of news",
        minlength: "Please enter at least 10 characters"
      }
    }
  });
});
// Validation for pub-admin
$(document).ready(function () {
  $("#pubAdmin").validate({ // initialize the plugin
    rules: {
      pubTitle: {
        required: true,
        minlength: 5
      },
      pubLink: {
        required: true,
        url: true
      },
      pubAuthor: {
        required: true,
        minlength: 5
      },
      pubPublisher: {
        required: true,
        minlength: 5
      },
      pubYear: {
        required: true,
        digits: true,
        rangelength: [4, 4]
      },
      pubType: {
        require_from_group: [1, ".selectpubType"]
      },
      pubjournalpos: {
        require_from_group: [1, ".selectpubjournalpos"]
      },
      pubcpaperpos: {
        require_from_group: [1, ".selectpubcpaperpos"]
      },
      pubwpaperpos: {
        require_from_group: [1, ".selectpubwpaperpos"]
      },
      pubposterpos: {
        require_from_group: [1, ".selectpubposterpos"]
      },
      pubtreportpos: {
        require_from_group: [1, ".selectpubtreportpos"]
      }
    },
    messages: {
      pubTitle: {
        required: "Please enter the title of the publication",
        minlength: "Please enter at least 5 characters"
      },
      pubLink: {
        required: "Please enter the link of the publication",
        url: "Please specify a valid link"
      },
      pubAuthor: {
        required: "Please enter the authors of the publication",
        minlength: "Please enter at least 5 characters"
      },
      pubPublisher: {
        required: "Please enter the publisher of the publication",
        minlength: "Please enter at least 5 characters"
      },
      pubYear: {
        required: "Please enter the year of publication",
        digits: "Please enter digits only",
        rangelength: "Please specify a valid year"
      },
      pubType: {
        require_from_group: "Select at least one type"
      },
      pubjournalpos: {
        require_from_group: "Select at least one option"
      },
      pubcpaperpos: {
        require_from_group: "Select at least one option"
      },
      pubwpaperpos: {
        require_from_group: "Select at least one option"
      },
      pubposterpos: {
        require_from_group: "Select at least one option"
      },
      pubtreportpos: {
        require_from_group: "Select at least one option"
      }
    }
  });
});
// Validation for press-admin
$(document).ready(function () {
  $("#pressAdmin").validate({ // initialize the plugin
    rules: {
      pressTitle: {
        required: true,
        minlength: 5
      },
      pressLink: {
        required: true,
        url: true
      },
      pressPublisher: {
        required: true,
        minlength: 5
      },
      pressDay: {
        required: true,
        digits: true,
        range: [1, 31]
      },
      pressMonth: {
        require_from_group: [1, ".selectpressMonth"]
      },
      pressYear: {
        required: true,
        digits: true,
        rangelength: [4, 4]
      },
      presspos: {
        require_from_group: [1, ".selectpresspos"]
      },
      pressimg: {
        required: true
      }
    },
    messages: {
      pressTitle: {
        required: "Please enter the title of the press",
        minlength: "Please enter at least 5 characters"
      },
      pressLink: {
        required: "Please enter the link of the press",
        url: "Please specify a valid link"
      },
      pressPublisher: {
        required: "Please enter the publisher of the press",
        minlength: "Please enter at least 5 characters"
      },
      pressDay: {
        required: "Please enter the press's day of publication",
        digits: "Please enter digits only",
        range: "Please specify a valid day"
      },
      pressMonth: {
        require_from_group: "Select at least one option"
      },
      pressYear: {
        required: "Please enter the press's year of publication",
        digits: "Please enter digits only",
        rangelength: "Please specify a valid year"
      },
      presspos: {
        require_from_group: "Select at least one option"
      }
    }
  });
});
// Validation for research-program-admin
$(document).ready(function () {
  $("#researchAdmin").validate({ // initialize the plugin
    rules: {
      researchTitle: {
        required: true,
        minlength: 5
      },
      researchDescrip: {
        required: true,
        minlength: 10
      },
      researchImg: {
        required: true
      }
    },
    messages: {
      researchTitle: {
        required: "Please enter the title of the research project",
        minlength: "Please enter at least 5 characters"
      },
      researchDescrip: {
        required: "Please enter the desciption of the research project",
        minlength: "Please enter at least 10 characters"
      }
    }
  });
});
// Validation for teaching-admin
$(document).ready(function () {
  $.validator.addMethod("properFormat", function(value, element, string) {
    return string.test(value);
  });
  $.validator.addMethod("specificSem", function(value, element, string) {
        return $.inArray(value.toUpperCase(), string) !== -1;
    });
  $("#teachingAdmin").validate({ // initialize the plugin
    rules: {
      courseTitle: {
        required: true,
        minlength: 5
      },
      courseNumber: {
        required: true,
        properFormat: /^[a-z]{4}[ ]?\d{4}$/i
      },
      courseSem: {
        required: true,
        minlength: 4,
        specificSem: ["FALL", "WINTER"]
      },
      courseYear: {
        required: true,
        digits: true,
        rangelength: [4, 4]
      },
      coursepos: {
        require_from_group: [1, ".selectcoursepos"]
      }
    },
    messages: {
      courseTitle: {
        required: "Please enter the title of the course",
        minlength: "Please enter at least 5 characters"
      },
      courseNumber: {
        required: "Please enter the course number",
        properFormat: "Please specify a valid course number"
      },
      courseSem: {
        required: "Please enter the offered semester of the course",
        minlength: "Please enter at least 4 characters",
        specificSem: "Please specify a valid semester"
      },
      courseYear: {
        required: "Please enter the offered year of the course",
        digits: "Please enter digits only",
        rangelength: "Please specify a valid year"
      },
      coursepos: {
        require_from_group: "Select at least one option"
      }
    }
  });
});
// Validation for group-admin
$(document).ready(function () {
  $("#groupAdmin").validate({ // initialize the plugin
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      degree: {
        required: true,
        minlength: 2
      },
      grad: {
        required: true,
        digits: true,
        rangelength: [4, 4]
      },
      status: {
        require_from_group: [1, ".selectstatus"]
      },
      groupcurrentpos: {
        require_from_group: [1, ".selectgroupcurrentpos"]
      },
      grouppastpos: {
        require_from_group: [1, ".selectgrouppastpos"]
      },
      studentImg: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Please enter the student's full name",
        minlength: "Please enter at least 5 characters"
      },
      degree: {
        required: "Please enter the degree the student has",
        minlength: "Please enter at least 2 characters"
      },
      grad: {
        required: "Please enter the student's year of graduation",
        digits: "Please enter digits only",
        rangelength: "Please specify a valid year"
      },
      status: {
        require_from_group: "Select at least one option"
      },
      groupcurrentpos: {
        require_from_group: "Select at least one option"
      },
      grouppastpos: {
        require_from_group: "Select at least one option"
      },
    }
  });
});
// Validation for contact-admin
$(document).ready(function () {
  $("#contactAdmin").validate({ // initialize the plugin
    rules: {
      address: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      map: {
        required: true,
        url: true
      }
    },
    messages: {
      address: {
        required: "Please enter your complete mailing address",
        minlength: "Please enter at least 5 characters"
      },
      email: {
        required: "Please enter your email address",
        email: "Please specify a valid email address"
      },
      phone: {
        required: "Please enter your phone number",
        phoneUS: "Please specify a valid phone number"
      },
      map: {
        required: "Please enter the map location embed url",
        url: "Please specify a valid url"
      }
    }
  });
});
// Makes sure "placeholder" for selectable options appears grey when page is loaded
$(document).ready(function() {
   $('#select').css('color','gray');
   $('#select').change(function() {
      var current = $('#select').val();
      if (current != 'null') {
          $('#select').css('color','black');
      } else {
          $('#select').css('color','gray');
      }
   });
   $('#select1').css('color','gray');
   $('#select1').change(function() {
      var current = $('#select1').val();
      if (current != 'null') {
          $('#select1').css('color','black');
      } else {
          $('#select1').css('color','gray');
      }
   });
   $('#select2').css('color','gray');
   $('#select2').change(function() {
      var current = $('#select2').val();
      if (current != 'null') {
          $('#select2').css('color','black');
      } else {
          $('#select2').css('color','gray');
      }
   });
   $('#select3').css('color','gray');
   $('#select3').change(function() {
      var current = $('#select3').val();
      if (current != 'null') {
          $('#select3').css('color','black');
      } else {
          $('#select3').css('color','gray');
      }
   });
   $('#select4').css('color','gray');
   $('#select4').change(function() {
      var current = $('#select4').val();
      if (current != 'null') {
          $('#select4').css('color','black');
      } else {
          $('#select4').css('color','gray');
      }
   });
   $('#select5').css('color','gray');
   $('#select5').change(function() {
      var current = $('#select5').val();
      if (current != 'null') {
          $('#select5').css('color','black');
      } else {
          $('#select5').css('color','gray');
      }
   });
});
// Group Admin & Pub Admin Position Number
$(document).ready(function() {
    $('select').change(function() {
        if ($(this).val() === "current") {
            $("#currentpos").show();
            $("#pastpos").hide();
        }
        if ($(this).val() === "past") {
            $("#pastpos").show();
            $("#currentpos").hide();
        }
        if ($(this).val() === "Journal") {
            $("#journalpos").show();
            $("#cpaperpos").hide();
            $("#wpaperpos").hide();
            $("#posterpos").hide();
            $("#treportpos").hide();
        }
        if ($(this).val() === "Conference Paper") {
            $("#cpaperpos").show();
            $("#journalpos").hide();
            $("#wpaperpos").hide();
            $("#posterpos").hide();
            $("#treportpos").hide();
        }
        if ($(this).val() === "Workshop Paper") {
            $("#wpaperpos").show();
            $("#journalpos").hide();
            $("#cpaperpos").hide();
            $("#posterpos").hide();
            $("#treportpos").hide();
        }
        if ($(this).val() === "Poster") {
            $("#posterpos").show();
            $("#wpaperpos").hide();
            $("#journalpos").hide();
            $("#cpaperpos").hide();
            $("#treportpos").hide();
        }
        if ($(this).val() === "Technical Report") {
            $("#treportpos").show();
            $("#posterpos").hide();
            $("#wpaperpos").hide();
            $("#journalpos").hide();
            $("#cpaperpos").hide();
        }
    });
});
