var canvas = new fabric.Canvas('myCanvas');

ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;

ballImageWidth = 5;
ballImageHeight = 5;

function loadImage() {
	
	fabric.Image.fromURL("golf-h.png", function(Img) {
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);

		holeObject.set({
			top: holeY,
			left: holeX
		});
		canvas.add(holeObject);
	});
	newImage();

}

function newImage() {

	fabric.Image.fromURL("ball.png", function(Img) {
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);

		ballObject.set({
			top: ballY,
			left: ballX
		});
		canvas.add(ballObject);
	});

}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {

	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ballX == holeX) && (ballY == holeY)) {
		canvas.remove(ballObject);

		document.getElementById("goalTag").innerHTML = "You've hit the Goal!";
		document.getElementById("myCanvas").style.borderColor = "#c70000";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("Up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("Down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("Left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("Right");
		}
	}
	
	function up() {

		if(ballY >=450) {
			ballY = ballY - ballImageHeight;
			console.log("Ball height = " + ballImageHeight);
			console.log("When up arrow key is pressed, X of ball = " + ballX + " and Y = " + ballY);
			canvas.remove(ballObject);
			newImage();
		}

	}

	function down() {

		if(ballY <=450) {
			ballY = ballY + ballImageHeight;
			console.log("Ball height = " + ballImageHeight);
			console.log("When up arrow key is pressed, X of ball = " + ballX + " and Y = " + ballY);
			canvas.remove(ballObject);
			newImage();
		}

	}

	function left() {

		if(ballX >5) {
			ballX = ballX - ballImageWidth;
			console.log("Ball width = " + ballImageWidth);
			console.log("When up arrow key is pressed, X of ball = " + ballX + " and Y = " + ballY);
			canvas.remove(ballObject);
			newImage();
		}
	}

	function right() {
		if(ballX <=1050) {
			ballX = ballX + ballImageWidth;
			console.log("Ball width = " + ballImageWidth);
			console.log("When up arrow key is pressed, X of ball = " + ballX + " and Y = " + ballY);
			canvas.remove(ballObject);
			newImage();
		}
	}
	
}

