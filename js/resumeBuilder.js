var bio = {
	name : "Ebrahem Samer" ,
	role : "Front-End Developer" , 
	contacts : {
		mobile : "01128284736" , 
		email : "Soltan_algaram41@yahoo.com" ,
		github : "https://github.com/ebrahemsamer",
		location: "Egypt , Damanhour"
	},
	welcomeMessage : "Hello , I am Ebrahem Samer , I am an student in azhar-University ,"+
					" This is my last year in my college and i would like to work as a full-stack web developer" ,
	skills : ["HTML" , "CSS" , "Javascript" , "Bootstrap" , "PHP"],
	biopic : "images/me.jpg"
};


bio.display = function() {

	var formattedName = HTMLheaderName.replace('%data%' , bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%' , bio.role);

	var formattedMobile = HTMLmobile.replace('%data%' , bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%' , bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%' , bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%' , bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// contact information
	$("#topContacts").prepend(formattedMobile , formattedEmail , formattedGithub , formattedLocation);
	$("#footerContacts").append(formattedMobile , formattedEmail , formattedGithub , formattedLocation);

	// my image and welcome message 
	var formattedImage = HTMLbioPic.replace('%data%' , bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%' , bio.welcomeMessage);

	$("#header").append(formattedImage);
	$("#header").append(formattedWelcomeMessage);

	// my skills
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace('%data%' , skill);
		$("#skills").append(formattedSkill);
	});
};

var work = {
  jobs : [
    {
      employer: "Metacafe Company ",
      title: "Web developer trainer",
      location: "Egypt",
      dates: "02-Jun-2018",
      description: "I was training in this company on web development , i was working with php programming language "
    },
    {
      employer: "ITI Company ",
      title: "Front-End Developer",
      location: "Alexandria",
      dates: "10-Aug-2017",
      description: "I was building a great Front-End pages "
    },
    {
      employer: "Softhouse ",
      title: "java Developer",
      location: "Damanhour",
      dates: "01-Jan-2015",
      description: "I was working on java Apps, fixing it and Developing it "
    }
  ],
  display : function() {
	$("#workExperience").append(HTMLworkStart);
	work.jobs.forEach(function(job) {
		var formattedEmployer = HTMLworkEmployer.replace('%data%' ,job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%' , job.title);
		var formattedTitle_Employer = formattedEmployer+formattedTitle;
		var formattedworkDescription = HTMLworkDescription.replace('%data%' , job.description);
		var formattedworkLocation = HTMLworkLocation.replace('%data%' , job.location);
		var formattedworkDates = HTMLworkDates.replace('%data%' , job.dates);

		$(".work-entry:last").prepend(formattedworkDescription);
		$(".work-entry:last").prepend(formattedworkLocation);
		$(".work-entry:last").prepend(formattedworkDates);
		$(".work-entry:last").prepend(formattedTitle_Employer);
	});
  }
};

var education = {
	schools : [
		{
			name : "Azhar-University",
			location : "Egypt , Cairo",
			degree : "Bachelor",
			majors: ["Engineering " , " Computers and Systems "] ,
			dates: "Aug-2015"
			
		},
		{
			name : "Ain Shams" , 
			location : "Egypt , Cairo",
			degree: "Masters",
			majors: [" Engineering "],
			dates: "Aug-2017"
		}
	],

	onlineCourses : [
		{
			title : "Front-End web developer ",
			school : "Udemy" ,
			dates : "Dec-2016",
			url : "https://www.udemy.com/learn-how-to-become-a-front-end-web-developer-from-scratch/"
		},
		{
			title : "Bootstrap 4",
			school : "Coursera" ,
			dates : "Nov 2017",
			url : "https://www.coursera.org/learn/bootstrap-4/home/welcome"
		},
		{
			title : "Front-End NanoDegree" , 
			school : "Udacity",
			dates : "Feb-2018",
			url : "https://classroom.udacity.com/nanodegrees/nd001/"
		},
		{
			title : "Laravel",
			school : "Udemy" ,
			dates : "Feb-2018",
			url : "https://www.udemy.com/php-with-laravel-for-beginners-become-a-master-in-laravel/"
		}
	],
	display : function() {
		if(education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
			education.schools.forEach(function(school) {
				var formattedSchoolName = HTMLschoolName.replace('%data%' , school.name);
				var formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , school.degree);
				var formattedSchoolName_Degree = formattedSchoolName + formattedSchoolDegree;
				var formattedDate = HTMLschoolDates.replace('%data%' , school.dates);
				var formattedLocation = HTMLschoolLocation.replace('%data%' , school.location);
				var formattedMajor = HTMLschoolMajor.replace('%data%' , school.majors);


				$('.education-entry:last').append(formattedSchoolName_Degree);
				$('.education-entry:last').append(formattedDate);
				$('.education-entry:last').append(formattedLocation);
				$(".education-entry:last").append(formattedMajor);
			});
		}
		if(education.onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(course) {
				var formattedCourseTitle = HTMLonlineTitle.replace('%data%' , course.title);
				var formattedWebsite = HTMLonlineSchool.replace('%data%' , course.school);
				var formattedTitle_School = formattedCourseTitle + formattedWebsite;
				var formattedDate = HTMLonlineDates.replace('%data%' , course.dates);
				var formattedURL = HTMLonlineURL.replace('%data%' , course.url);

				$('.education-entry:last').append(formattedTitle_School);
				$('.education-entry:last').append(formattedDate);
				$('.education-entry:last').append(formattedURL);
				$('.education-entry:last').append('<br>');
			});
		}
	}
};

var projects = {
	projects : [
		{
			title : "Filmico Site",
			dates : "Jun-2017",
			description : "Filmico website is a website that introduce amazing content of the best newest movies for the greatest actors "+
			" This website has a lot of features like watching online with 1080P Quality ",
			images : ["images/filmico.png", "images/filmico2.png"]
		},
		{
			title : "Graduation Project",
			dates : "Dec-2017",
			description : "This is a website that introduce a graduation project for graduated team , this project consists of flowchart , its component and "+
			" The way to implement the project ",
			images : ["images/graduation.png" , "images/graduation2.png"]
		}
	],
	display: function() {
		$("#projects").append(HTMLprojectStart);
		projects.projects.forEach(function(project) {
			var formattedTitle = HTMLprojectTitle.replace('%data%' , project.title);
			var formattedDescription = HTMLprojectDescription.replace('%data%' , project.description);
			var formattedDates = HTMLprojectDates.replace('%data%' , project.dates);

			project.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace('%data%' , image);
				$(".project-entry:last").prepend(formattedImage);
			});

			$(".project-entry:last").prepend(formattedDescription);
			$(".project-entry:last").prepend(formattedDates);
			$(".project-entry:last").prepend(formattedTitle);
		});
	}
};

// Basic information

bio.display();

// my work experiance

work.display();

// my projects 

projects.display();

// Education (schools and online courses)
education.display();

$("#mapDiv").append(googleMap);