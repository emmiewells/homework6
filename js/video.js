var video = document.querySelector('video');

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	span = document.getElementById("volume").innerHTML = (video.volume * 100) + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector('#volumeSlider').addEventListener("change", function() {
	video.volume = this.value/100;
	span = document.getElementById("volume").innerHTML = (video.volume * 100) + "%";

});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true) {
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
	}
	else {
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute" ;
	}

});

document.querySelector('#slower').addEventListener("click", function() {
		video.playbackRate = video.playbackRate * .9;
		console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);

});

document.querySelector('#skip').addEventListener("click", function() {
	video.currentTime = (video.currentTime + 5);
	video.play();
	console.log(video.currentTime);
	
});