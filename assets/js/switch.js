
function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
				document.getElementById("thisImg").src = images[x];
}
  
function displayPreviousImage() {
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("thisImg").src = images[x];
}
  
function startTimer() {
	setInterval(displayNextImage, 2000);
}
  
var images = [], x = -1;
images[0] ="images/solar-logo-6.png";
images[1] ="images/solar-logo-12.png";
images[2] ="images/solar-logo-4.png";
images[3] ="images/solar-logo-1.png";
images[4] ="images/solar-logo-22.png";
images[5] ="images/solar-logo-32.png";
images[6] ="images/solar-logo-7.png";
images[7] ="images/solar-logo-5.png";
images[8] ="images/solar-logo-4.png";
images[9] ="images/solar-logo-9.png";
images[10] ="images/solar-logo-8.png";
images[11] ="images/solar-logo-32.png";
images[12] ="images/solar-logo-11.png";







