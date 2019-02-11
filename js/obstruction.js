(function() {
	document.getElementById("no").addEventListener("click", obstruct); 

})()

function obstruct() {
	var yes_button = document.getElementById("yes");
	yes_button.checked = true;

	swal("Oh, wait buddy, are you sure you meant to say “No”?", {
  		buttons: ["No", "Yes"],
	})
	.then ((cont) => {
		if(cont) {
			swal("Are you suuuuuuuuuure?", {
		  		buttons: ["No", "Yes"],
			})
			.then ((cont) => {
				if(cont) {
					swal("Wait! Did you mean instead to say, 'I am a massive chutiya?'", {
				  		buttons: ["No", "Yes"],
					})			

					.then ((cont) => {

						if(!cont) {
							swal("Hmmmm.... So you’d not like to be my valentine?'", {
						  		buttons: ["No", "Yes"],
							})			

							.then ((cont) => {
								if(!cont) {
									swal("Would you not not not not not not not not not like to be my Valentine?'", {
						  				buttons: ["No", "Yes"],
									})

									.then ((cont) => {
										swal({
										  text: 'Well, then, I\'m sure you won\'t mind solving a riddle, to prove how certain you are.\n\nI have wilderness but no trees.\nI have river but no water.\nI have streets but no cars\n\nWhat am I?',
										  content: "input",
										  button: {
										    text: "Enter answer (one word)",
										    closeModal: false,
										  }
										})
										.then(answer => {
											if (answer.toLowerCase() == "map") {
												swal("Okay, well then I have one final test you can use to prove your certainty. Sit through this marquee I made for my Pokemon website when I was a kid, and wait for the hint at the end.", {
													  buttons: true,
												})
												.then ((cont) => {
													if (cont) {
														run_marquee();
													}
												})
											}
										})
									})
								}
							})
						}
					})
				}

			})
		}
	})
}