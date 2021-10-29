
function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
				document.getElementById("thisImg").src = images[x];

	y = (y === iconImages.length - 1) ? 0 : y + 1;
				document.getElementById("thisSmallImg").src = iconImages[y];

}
  
function displayPreviousImage() {
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("thisImg").src = images[x];

	y = (y <= 0) ? iconImages.length - 1 : y - 1;
	document.getElementById("thisSmallImg").src = iconImages[y];
}
  
function startTimer() {
	setInterval(displayNextImage, 2000);
}
var iconImages = [], y = -1;  
var images = [], x = -1; 
// images[0] = "images/solar-logo-13.png"
// images[1] ="images/solar-logo-6.png";
// images[2] ="images/solar-logo-12.png";
// images[3] ="images/solar-logo-4.png";
// images[4] ="images/solar-logo-1.png";
// images[5] ="images/solar-logo-22.png";
// images[6] ="images/solar-logo-32.png";
// images[7] ="images/solar-logo-7.png";
// images[8] ="images/solar-logo-5.png";
// images[9] ="images/solar-logo-4.png";
// images[10] ="images/solar-logo-9.png";
// images[11] ="images/solar-logo-8.png";
// images[12] ="images/solar-logo-32.png";
// images[13] ="images/solar-logo-11.png";

// images[0] = "images/O-logo-xmas-1.png"
// images[1] ="images/O-logo-xmas-2.png";
// images[2] ="images/O-logo-xmas-3.png";
// images[3] ="images/O-logo-xmas-4.png";
// images[4] ="images/O-logo-xmas.png";
// images[5] ="images/solar-logo-22.png";
// images[6] ="images/solar-logo-32.png";

images[0] = "images/halloween-2.png"
images[1] ="images/halloween-3.png";
images[2] ="images/halloween-4.png";
images[3] ="images/halloween-logo.png";




iconImages[0] = "images/solor-funding-0.png";
iconImages[1] = "images/solor-funding-1.png";
iconImages[2] = "images/solor-funding-2.png";
iconImages[3] = "images/solor-funding-3.png";


