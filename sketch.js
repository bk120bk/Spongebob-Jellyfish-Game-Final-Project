var song;
var jelly1 = [];
var jelly2 = [];
var ct = 0;


function preload() {
	song = loadSound('jellyfish_jam.mp3');
	bg = loadImage('11j34o.jpg');
}
var num;
var cenX, cenY; 
var counter = 10;
var Dist = 5; 
var sign = 1.3; 
var move = true;
var button; 
var slider
var ang = 50;
var otherslider
var diaNum;
var Diameter = 300;
var Radius =Diameter/2;
var counter2 = 10;
var move2 = true;
var move3 = true;
var j = 0
var k = 0;
var counter3 = 10;
var sc = 0
//var sign2 = 1;
//var Dist2 = 10;


function setup() {
	createCanvas(2000, 1000);
	background(bg);
	cenX = windowWidth/2; 
	cenY = windowHeight/2;
	
/*	button = createButton("stop / go"); 
	button.position(200,50); 
	button.size(80,40);
	button.mousePressed(Pause); */
	
	pausebutton = createButton("pause");
	pausebutton.position(350,650)
	pausebutton.size(50,20)
	pausebutton.mousePressed(pausesong);
	
	playbutton = createButton("play");
	playbutton.position(200,650)
	playbutton.size(50,20)
	playbutton.mousePressed(playsong);
	
		
	song.loop();  
  analyzer = new p5.Amplitude();

  analyzer.setInput(song);
   var rms = analyzer.getLevel();
	
	for (var i = 0; i < 16; i++) {
			jelly1[i] = new jelly(width/2-800,height/2, 50,50);
		  jelly2[i] = new jelly(width/2+800,height/2, 50,50);
	}
	
	frameRate(30);
		
}

function draw() {
	background(bg);
	textSize(50);
	text('SCORE:',1350 ,100)
	text(sc, 1600,100)
			angleMode(DEGREES); 
	
	if (move) { 
		counter = counter + sign*Dist; 
	
	}
	
	if (counter>width/3 || counter<0) {
		sign = sign*-1; 
		//print(counter)
	}

	if (move2) { 
		counter2 = counter2 + sign; 
	}	
	
	if (counter2>300 || counter2<-800) {
		sign=sign*-1;
	}
	
		if (move3) { 
		counter3 = counter3 + sign*Dist; 
	}	
	
	if (counter3>1800 || counter3<-800) {
		sign=sign*-1;
	}
	
	
	stroke(1);
  

	fill(255,254,76);
	rect(600,20, 500, 700);
	rect(680,700,30,200);
	rect(980,700,30,200);
	rect(450,500,150,25);
	rect(1100,500,150,25);
	fill(255,255,255);
	strokeWeight(4);
	ellipse(750,150,200,200);
	ellipse(950,150,200,200);
	fill(57,188,232);
	ellipse(750,165,60,60);
	ellipse(950,165,60,60);
	fill(0,0,0);
	ellipse(750,170,20,20);
	ellipse(950,170,20,20);
	strokeWeight(2);
	fill(255,254,97);
	ellipse(850,250,40,80);
	strokeWeight(4);
	//smile
	noFill();
	bezier(630,300,680,400,1000,400,1060,300);
	line(750,50,750,30);
	line(700,60,700,30);
	line(800,60,800,30);
	line(950,50,950,30);
	line(900,60,900,30);
	line(1000,60,1000,30);
	strokeWeight(0);
	fill(214,79,52);
	//dimples
	ellipse(631,290,5,5);
	ellipse(624,280,5,5);
	ellipse(638,280,5,5);
	ellipse(1060,290,5,5);
	ellipse(1053,280,5,5);
	ellipse(1067,280,5,5);
	strokeWeight(2);
	fill(255,255,255);
	rect(790,375,40,60);
	rect(860,375,40,60);
	rect(600,450,500,100);
	fill(212,128,33);
	rect(600,550,500,170);
	strokeWeight(0);
	fill(164,177,58);
	ellipse(700,300,32,75);
	ellipse(1058,54,25,64);
	ellipse(643,62,23,69);
	ellipse(620,93,17,48);
	ellipse(950,405,24,67);
	ellipse(990,420,17,53);
	strokeWeight(1);
	//tie
	fill(247,0,32);
	quad(840,450,860,450,790,580,900,580);
	triangle(790,580,845,630,900,580);
	
	fill(0,0,0);
	rect(620,580,70,30);
	rect(710,580,70,30);
	rect(910,580,70,30);
	rect(1000,580,70,30);
	//shoes
	fill(0,0,0);
	rect(680,870,70,30,0,10,5,0);
	rect(980,870,70,30,0,10,5,0);
	strokeWeight(0);
	fill(255);
	rect(680,800,30,70);
	rect(980,800,30,70);
	fill(63,110,171);
	rect(680,820,30,5);
	rect(980,820,30,5);
	fill(252,48,43);
	rect(680,830,30,5);
	rect(980,830,30,5);
	//net
	net(1230,250)
	
	
	//boombox
	speaker(300,500)
	speaker(1600,500)
	
	//snail
	strokeWeight(0);
	gary(100,900);
	//diaNum = DiaSlider.value();
	diaNum = counter2
	//println(diaNum);
	
	//var numberOfJelly = JellySlider.value(); //code adopted from "circle slider loops"
	
	var AngleDiff1 = 360/jelly1.length;
	var AngleDiff2 = 360/jelly2.length;
	var rad = 200+counter2;
	ct = (ct+1)%360;
	for (var i =0; i < jelly1.length; i++) {
		ang = i*AngleDiff1 + ct*2;
		jelly1[i].X = cenX + rad*cos(ang) + counter ;   //Get the X and Y value of ellipse
	  jelly1[i].Y = cenY + rad*sin(ang);
	  jelly1[i].display();
	}
		for (var k =0; k < jelly2.length; k++) {
		ang = k*AngleDiff2 - ct*2;
		jelly2[k].X = cenX + rad*cos(ang) - counter ;   //Get the X and Y value of ellipse
	  jelly2[k].Y = cenY + rad*sin(ang);
	  jelly2[k].display();
	}
	net(mouseX, mouseY-250);
}

/*function Pause() {
	move = !move;
}*/


function jelly(X,Y,SizeX,SizeY){
	this.X = X
	this.Y = Y
	this.SizeX = 120
	this.SizeY = 90
	
	
	this.display = function() {
		strokeWeight(1);
		fill(208,122,220);
		ellipse(this.X,this.Y,120,90);
		line(this.X+25,this.Y+42,this.X+25,this.Y+70);
		line(this.X,this.Y+45,this.X,this.Y+70);
		line(this.X-25,this.Y+42,this.X-25,this.Y+70);
		strokeWeight(0);
		fill(144,53,159);
		ellipse(this.X-27,this.Y-12,20,17);
		ellipse(this.X,this.Y,17,15);
		ellipse(this.X+30,this.Y+5,17,22);
	}

	this.hitcheck = function(qX,qY) {
		  if ( (abs(this.X-qX) <this.SizeX/2) && (abs(this.Y-qY) < this.SizeY/2)) {
				this.live = 1;
				//print("got 'em");
				sc = sc +1
				
	 	  }
	  }
	} //Jelly
	
	function mousePressed() {
		for (var j = 0; j < jelly1.length; j++) {
			 jelly1[j].hitcheck(mouseX,mouseY);
	  }
		
		for (var j = 0; j < jelly1.length; j++)  {
	     if (jelly1[j].live == 1) {
			   var Point = j;
	       var sub1 = subset(jelly1, 0, Point);
	       var sub2 = subset(jelly1, Point+1,jelly1.length);
	       jelly1 = concat(sub1,sub2)
				 //print(jelly1.length)
		   }
	   }
		for (var k = 0; k < jelly2.length; k++) {
			 jelly2[k].hitcheck(mouseX,mouseY);
	  }
		
		for (var k = 0; k < jelly2.length; k++)  {
	     if (jelly2[k].live == 1) {
			   var Point = k;
	       var sub1 = subset(jelly2, 0, Point);
	       var sub2 = subset(jelly2, Point+1,jelly2.length);
	       jelly2 = concat(sub1,sub2)
				 //print(jelly2.length)
		   }
	   }
	} //mousePress


	


function net(X,Y){
	fill(145,121,80);
	rect(X, Y, 10,330,20);
	noFill();
	strokeWeight(1);
	ellipse(X+75,Y+15,170,80);
	line(X+75,Y-25,X+75,Y+55);
	line(X+45,Y-23,X+45,Y+53);
	line(X+105,Y-23,X+105,Y+53);
	line(X+15,Y-13,X+15,Y+43);
	line(X+135,Y-13,X+135,Y+43);
	line(X-10,Y+15,X+160,Y+15);
	line(X-1,Y-5,X+150,Y-5);
	line(X-1,Y+35,X+150,Y+35);
	
}



/*function reset() {
	if (sc = 32) {
		sc = sc -32
		jelly1 = push(sub1,sub2)
		jelly2 = push(sub1,sub2)
	}
}*/




function gary(X,Y) {
	this.X = X+counter3;
	this.Y = Y;
	
			fill(217,128,116);
			ellipse(this.X,this.Y,130,125);
			fill(121,181,210);
			ellipse(this.X,this.Y+60,170,20);
			ellipse(this.X+76,this.Y+5,5,105);
			ellipse(this.X+66,this.Y+5,5,105);
			fill(175,210,119);
			ellipse(this.X+66,this.Y-40,20,20);
			ellipse(this.X+76,this.Y-40,20,20);
			fill(212,34,13);
			ellipse(this.X+66,this.Y-37,10,10);
			ellipse(this.X+76,this.Y-37,10,10);
			fill(0);
			ellipse(this.X+66,this.Y-36,5,5);
			ellipse(this.X+76,this.Y-36,5,5);
			fill(104,85,180);
			ellipse(this.X-45,this.Y-7,15,30);
			ellipse(this.X-30,this.Y-25,15,25);
			ellipse(this.X-5,this.Y-45,25,15);
			ellipse(this.X+30,this.Y-25,25,15);
			ellipse(this.X+45,this.Y,25,15);
			fill(205,4,35);
			ellipse(this.X+10,this.Y+10,20,50);
			ellipse(this.X-3,this.Y-15,40,15);
			ellipse(this.X+10,this.Y-10,15,15);
			ellipse(this.X-20,this.Y,10,30);
			ellipse(this.X+7,this.Y+25,20,40);
			ellipse(this.X+2,this.Y+35,20,30);
 
}

function speaker(X,Y){
	var rms = analyzer.getLevel();
	fill(36,39,38)
	rect(X-100,Y-100,200,600)
	fill(117,137,141)
	ellipse(X,Y,120+(rms*200),120+(rms*200))
	fill(15,15,15)
	ellipse(X,Y,100+(rms*200),100+(rms*200))
	fill(117,137,141)
	ellipse(X,Y,40+(rms*200),40+(rms*200))
	ellipse(X-50,Y+300,90+(rms*100),90+(rms*100))
	fill(15,15,15)
	ellipse(X-50,Y+300,70+(rms*100),70+(rms*100))
	fill(117,137,141)
	ellipse(X-50,Y+300,30+(rms*100),30+(rms*100))
	ellipse(X+50,Y+300,60+(rms*100),60+(rms*100))
	fill(15,15,15)
	ellipse(X+50,Y+300,40+(rms*100),40+(rms*100))
	fill(117,137,141)
	ellipse(X+50,Y+300,20+(rms*100),20+(rms*100))
}



function pausesong(){
	pausebutton.mousePressed = song.pause();
	}
function playsong(){
	playbutton.mousePressed = song.play();
}
