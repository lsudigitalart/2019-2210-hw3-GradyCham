function setup(){
	createCanvas (2000, 2000);
	background(0);
	
}
function draw (){
	stroke(255);
	strokeWeight(3);
	fill (255, 0, 0, 3);
	for (var x = 0; x < 2000; x += 50){
		for (var y = 0; y < 2000; y +=70){
			
		  beginShape();
  		  vertex (x + 100,y- 100);
  		  vertex (x+140, y);
  		  vertex (x, y+160);
  		  vertex (x-140, y);
  		  vertex (x - 100,y- 100);
  		  endShape(CLOSE);
			
		}
	}
	
}