const Engine = Matter.Engine,
	World = Matter.World,
	Events = Matter.Events,
	Bodies = Matter.Bodies;
var particles
var plinkos = [];
var divisions = [];
var turn = 0;
var divisionHeight = 300;
var score = 0;
var gameState = "play";

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width / 2, height, width, 20);
	for (var k = 0; k <= width; k = k + 80) {
		divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
	}
	for (var j = 75; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 75));
	}
	for (var j = 50; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 175));
	}
	for (var j = 75; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 275));
	}
	for (var j = 50; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 375));
	}
}

function draw() {
	background("black");
	textSize(20)
	text("Score=" + score, 50, 30);
	text("100", 25, 650);
	text("200", 105, 650);
	text("300", 185, 650);
	text("400", 265, 650);
	text("500", 345, 650);
	text("500", 425, 650);
	text("400", 505, 650);
	text("300", 585, 650);
	text("200", 665, 650);
	text("100", 745, 650);
  Engine.update(engine)
  
	if (particles != null) {
		particles.display();
		if (particles.body.position.y > 780 && particles.body.position.x > 0 && particles.body.position.x < 80) {
			score = score + 100;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 80 && particles.body.position.x < 160) {
			score = score + 200;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 160 && particles.body.position.x < 240) {
			score = score + 300;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 240 && particles.body.position.x < 320) {
			score = score + 400;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 320 && particles.body.position.x < 400) {
			score = score + 500;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 400 && particles.body.position.x < 480) {
			score = score + 500;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 480 && particles.body.position.x < 560) {
			score = score + 400;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 560 && particles.body.position.x < 640) {
			score = score + 300;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 640 && particles.body.position.x < 720) {
			score = score + 200;
			particles = null;
		} else if (particles.body.position.y > 780 && particles.body.position.x > 720 && particles.body.position.x < 800) {
			score = score + 100;
			particles = null;
		}
	}
	if (gameState === "end") {
		textSize(100)
		text("Game Over", 150, 400);
	}
	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}
	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	}
}

function mousePressed() {
	if (gameState != "end") {
		turn = turn + 1;
		particles = new Particle(mouseX, 20, 10);
		//console.log(turn)
		if (turn === 5) {
			gameState = "end"
		}
	}
}