var div1=document.getElementById("first");
var div2=document.getElementById("second");
div2.onmousedown=mouseDown;

function overlapp( el1,el2){
  var rect1=el1.getBoundingClientRect();
  var rect2=el2.getBoundingClientRect();
  if(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom){
    return false;
  }
  else{
    return true;
  }
}


function mouseDown(e){
	//console.log(this.target);
 	this.addEventListener("mousedown", function(e){
 		isDown = true;
   		offset = [
    		this.offsetLeft - e.clientX,
       		this.offsetTop - e.clientY
    	];
 	}, true);
 	document.body.addEventListener("mouseup", function(e){ 		
 		d=e.target;
 		isDown=false;
 	}, true);
       document.body.addEventListener("mousemove", function(ev){
    	ev.preventDefault();
	   	if (isDown) {
     		mousePosition = {
          		x : ev.clientX,
           		y : ev.clientY
        };

        if (d === null) return;

        d.style.left = (mousePosition.x + offset[0]) + 'px';
      	d.style.top  = (mousePosition.y + offset[1]) + 'px';
      }
     
    }, true);
  
  this.addEventListener("mousemove", function(e){
  if(overlapp(this,div1)){
  console.log("overlap");
}
else{
  console.log("no overlap!");
}
  }, true);
 }