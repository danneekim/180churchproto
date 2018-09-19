// var images to target class of homeslideshows
var images = document.getElementsByClassName('homeslideshow');


function cycleImages (n) {
// if its not the very first slide we are going to make it show
// and make the one before it dissappear.
	if (n !== 0) {
		images[n].style.display = "block"
		images[n - 1].style.display = "none"
	// if it is the first slide we are going to show it and make the very last slide dissappear
	} else {
		images[n].style.display = "block"
		images[images.length - 1].style.display = "none"
	}
	// if it is the last slide we are going to restart the slideshow after 4.5 seconds and start again @ the first image (0)
	if (n === images.length - 1) {
		return setTimeout(cycleImages, 4500, 0);
	}

	//run slide again after interval has been completed and increment it by one
	return setTimeout(cycleImages, 4500, n + 1);
}

cycleImages(0);



// function showImage(n){
// 	var i;
// 	var x = document.getElementsByClassName('homeslideshow');

// 	if (n > x.length) {
// 		imageposition = 1
// 	}

// 	if (n < 1) {
// 		imageposition = x.length
// 	}

// 	i = 0
// 	while (i < x.length){
// 		x[i].style.display = "none";
// 		i++;
// 	}

// 	x[imageposition - 1].style.display = "block";
// }





