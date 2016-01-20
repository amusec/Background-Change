$(document).ready(function() {
	
		
	
	$('#submit-btn').click(function(event) {
		console.log("#submit-btn")
        event.preventDefault()

		var city = $('#city-type').val()
	
	

	if (city == 'New York' || city == 'NYC' || city == 'NY') {
		$('body').css('background-image', 'url("../dewaynehw5/images/nyc.jpg")')
		}
	if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
		$('body').css('background-image', 'url("../dewaynehw5/images/sf.jpg")')
		}
	if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
		$('body').css('background-image', 'url("../dewaynehw5/images/la.jpg")')
		}
	if (city == 'Austin' || city == 'ATX') {
		$('body').css('background-image', 'url("../dewaynehw5/images/austin.jpg")')
		}

	if (city == 'Sydney' || city == 'Syd') {
		$('body').css('background-image', 'url("../dewaynehw5/images/sydney.jpg")')
		}
	
	
	});
	});

// Make sure DOM is isolated
// listen for user submit/click
// prevent default 
// get string from form submission
// set string to variable
// write if statments about our options, NY, NYC, New York City, etc
// display img, change background style (city)





//if (city = 'New York City' || 'NYC' || 'NY')
//	$('background').display()

