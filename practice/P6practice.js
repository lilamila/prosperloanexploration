d3.select('div.col-xs-3').remove()
d3.select('div.col-xs-3’).html() //see all the html in the div
d3.select('div.col-xs-3’).html('')

/*
- need to map data values to pixel values
- specify range of possible input values, a function that transforms these to output values, and appropriate limits on output range
- .domain() —> data values (input)
- .range() —> pixel values (output)
- since using linear scale, the function is equation of a line (y=mx+b where m and b are constants)
- pick max and mins for .domain() and .range()
- coordinate plane in svg has 0 at top left (instead of usual bottom left)
*/

var svg = d3.select('div.col-xs-3')
            .append('svg')
            .attr('width', 300)
            .attr('height', 150)

// define the svg
var svg = d3.select('div.col-xs-3').append('svg')

//define the y scale (.domain for data input range, and .range for pixel range
var y = d3.scale.linear().domain([15,90]).range([150, 0]) 

// define x scale (the .range we want to map to corresponds to the width of our SVG element (300)...since x coordinate isn’t inverted for SVG, we want to map from zero to, let’s say 250 for buffer)
var x = d3.scale.log().domain([250,100000]).range([0, 250])

// left off at 1b D3 Building Blocks > adding and formatting china's red cicle
console.log(y(75), x(8347))
svg.append('circle').attr('r', 10).attr('fill', 'red').attr('cx', x(8347)).attr('cy', y(75))


// javascript basics: lesson 1
// arrays
var skills = ["awesomeness", "programming", "teaching", "JS"];

$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.length);

// object literal notation
// no classes in JS, just objects, unlike python 

var bio={
	"name" : "Marie",
	"age" : 25,
	"skills" : skills
};

$("main").append(bio.name);


// dot and bracket notation - allows us to declare object then define its properties outside the curly brackets
// don't use var because adding properties to object, not declaring new object
bio.city = "New York City";
bio.email = "mariesleaf@gmail.com";

$("main").append(bio.city);
$("main").append(bio["city"]);

// bracket notation similar to dot notation, but just using brackets like so: 
myObj["property"] = somevalue;


// javascript basics: lesson 2 - flow control
// click metrics
function displayWork() {
	for (job in work.jobs) {
		//create new div for work experience
		$("workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job])
	}
}

displayWork();

//to collect click locations
$(document).click(function(loc) {
	// code goes here
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// $(document).click() is a jQuery event handler on the page, loc is a jQuery event object (http://api.jquery.com/category/events/event-object/)

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// internationalize names solution

function inName(name) {
	name = name.trim().slit(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name{1};
}

$('#main').append(internationalizeButton);

// encapsulation
displayWork();
var displayProjects = function() {

}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}
