/*
	-- Content for index.html -> mattchupp.com --
	
	-- link for script in html file --
	*<script type="text/jsx" src="index.js"></script>*

*/
		// variables for content 
		var name = "Matt Chupp"; 
		var elevationJob = "IT Intern @ Elevation Church";
		var elevationJobYear = "Summer 2015"; 
		var bennerLibrary = "Web Developer @ Benner Library"; 
		var bennerLibraryYear = "August 2014 - May 2015";
		var skills = "CSS | Javascript | PHP "; 

		// ****
		var Name = React.createClass({
			render: function() {
    			return <div>{name}</div>;
			}
		});
		var ElevationJob = React.createClass({
			render: function() {
				return <div>{elevationJob}</div>; 
			}
		});
		var ElevationJobYear = React.createClass({
			render: function() {
				return <div>{elevationJobYear}</div>; 
			}
		}); 
		var BennerLibrary = React.createClass({
			render: function() {
				return <div>{bennerLibrary}</div>;
			}
		}); 
		var BennerLibraryYear = React.createClass({
			render: function() {
				return <div>{bennerLibraryYear}</div>;
			}
		});
		var Skills = React.createClass({
			render: function() {
				return <div>{skills}</div>;
			}
		});  

		// render
		React.render(<Name />, document.getElementById('name'));
		React.render(<ElevationJob />, document.getElementById('elevation'));
		React.render(<ElevationJobYear />, document.getElementById('elevation-year'));
		React.render(<BennerLibrary />, document.getElementById('benner'));
		React.render(<BennerLibraryYear />, document.getElementById('benner-year'));
		React.render(<Skills />, document.getElementById('skills'));


		