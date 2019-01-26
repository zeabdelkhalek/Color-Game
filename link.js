/* CopyRight Zellat Abdelkhaleek */

var number = 6 ,
 	colors 			= 	generateColor (number),
	h1 				= 	document.querySelector("h1"),
  	squares			= 	document.querySelectorAll(".square"), 
  	pickedColor 	= 	pickColor(),
  	colorDisplay 	= 	document.getElementById("colorDisplay"),
  	messageDisplay 	= 	document.getElementById("message"),
  	resetbutton 	= 	document.querySelector("#reset") , 
  	easybtn 		= 	document.getElementById ("easybtn"),
  	hardbtn 		= 	document.getElementById ("hardbtn"),
  	foot 			= 	document.getElementById ("foot") ; 
  

  easybtn.addEventListener("click" , function() { 


easybtn.classList.add("selected");
number = 3 ;
hardbtn.classList.remove("selected");
colors = generateColor(number);

pickedColor = pickColor() ;
colorDisplay.textContent = pickedColor ;
for ( var i = 0 ; i < squares.length ; i++) { 
    if ( colors[i]){ 
        squares[i].style.background = colors[i];
    } else { 
        squares[i].style.display = "none";
    }
}

  })
   hardbtn.addEventListener("click" , function() { 
    easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
number = 6 ;
colors = generateColor(number);
pickedColor = pickColor() ;
colorDisplay.textContent = pickedColor ;
for ( var i = 0 ; i < squares.length ; i++) { 
   
        squares[i].style.background = colors[i];
    
        squares[i].style.display = "block";
    
}
  })

resetbutton.addEventListener("click" , function() { 
    colors = generateColor(number) ; 
    pickedColor = pickColor() ;
    colorDisplay.textContent = pickedColor;
    for ( var i = 0 ; i < squares.length ; i++) { 
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue" ;
    resetbutton.textContent = "New Colors"
    messageDisplay.textContent= " " ;
    foot.style.background = "steelblue" ;
});

  colorDisplay.textContent = pickedColor ;
  for ( var i = 0 ; i < squares.length ; i++) {
      // add initial colors to squares 
      squares[i].style.background = colors [i]; 
      // add clicks listeneers to suqres 
      squares[i].addEventListener("click",function() {
    clickedColor = this.style.background ; 
    if (clickedColor === pickedColor) { 
        messageDisplay.textContent= "Correct " ;
        resetbutton.textContent = "Play Again ??"
        h1.style.background = clickedColor ;
        foot.style.background = clickedColor ;
        changeColor(clickedColor);

    }
    else { 
        this.style.background = "#232323";
        messageDisplay.textContent= "Try AGain" ;
    }
      }) ; 
  
  }
  function changeColor(color) { 
      for ( var i = 0 ; i < squares.length ;i++) { 
          squares[i].style.background = color ;
      }
  }
  function pickColor() { 
   var random =  Math.floor ( Math.random() * colors.length);
   return colors[random] ;
  }
  function generateColor(num) {
      var arr = [];
for (var i = 0 ; i < num ; i++ ) { 
    arr.push(randomColor()) ;
}
      return arr ;
  }

  function randomColor(){ 
    var r=  Math.floor ( Math.random() * 256 ) ;
    var g=  Math.floor ( Math.random() * 256 ) ;
    var b=  Math.floor ( Math.random() * 256 ) ;
   return  "rgb(" + r + ", " + g + ", " + b + ")";
  }

  /* CopyRight Zellat Abdelkhaleek */