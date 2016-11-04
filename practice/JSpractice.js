// Javascript Practice
// Encapsulation


for(item in work) {putOnResume()}
	
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

	}
}