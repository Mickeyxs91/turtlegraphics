function start()
{

	document.getElementById("wrapper").style="visibility:hidden";
	
	
	var  optionOne = document.getElementById("optionOne");
	var display = "";
	
	var txt1 = document.getElementById("txt1");
	var mtxt1 = parseInt(txt1.value);
	
	if (mtxt1 == 1)
		{
		display += "<p>Pen is currently NOT DRAWING</p>";
		 document.getElementById("wrapper").style="visibility:display";
		
		}
	else if (mtxt1 == 2)
		{
		display += "<p>Pen is  DRAWING</p>";
		document.getElementById("wrapper").style="visibility:display";
		}
	optionOne.innerHTML = display;
	
	
	 var button = document.getElementById("getbutton");
	 button.addEventListener("click",start,false );
	 
	 
	 //var displaygmb = document.getElementById("displaygmb");
	 //displaygmb.addEventListener("click", displaygameboard("Gameboard",array,length,arraydisplay),false );
	 
	 var button2 = document.getElementById("get2button");
	 button2.addEventListener("click",option2(button2,mtxt1),false );

	 
}



function option2(buttonn,symbolinput)
{
	
	 var input = symbolinput; 
	 var usedspace = "O";
	 var turtle = "X";
	 var gameboardSymbol = ".";
	 
		var clickcountt = buttonn;
		var count6 = 1;
		var count5 = 1;
		var count3 = 1;
		var count4 = 1;
		var display = "";
		clickcountt.onclick = function() {
			 
	
	var optiontwo = document.getElementById("optiontwo");
	var display2 = "";
	
	var txt2 = document.getElementById("txt2");
	var mtxt2 = parseInt(txt2.value);
	
	
	 if (mtxt2 == 6)
		{
		 count6 += 1;
		 display2 += "<p>Turtle is moving "+count6+" places down</p>";
		}
	 else if (mtxt2 == 5)
		{
		 count6 -=1;
		 count5 +=1;
		 display2 += "<p>Turtle is moving "+count6+" places up</p>";
		}
	 else if (mtxt2 == 3)
		{
		 count3 += 1;
		 display2 += "<p>Turtle is moving "+count3+" places to the right</p>";
		}
	 else if (mtxt2 == 4)
		{
		 count3 -=1
		 count4 += 1;
		 display2 += "<p>Turtle is moving "+count3+" places to the left</p>";
		}
	 
	 optiontwo.innerHTML = display2;
	 
	 

		 var gameboardsize = 20;
		 var  arraydisplay = document.getElementById("arraydisplay");
		 
		 
		 var array = new Array (gameboardsize);
	     var length = array.length;
	     for (var i = 0; i <= length; i++ )
		 {
		  array[i] = new Array(gameboardsize);
		 }
	     
	 	var  arraydisplay = document.getElementById("arraydisplay");
	     
	     var displaygbd = "<table id=gameb align=center><thead><th>"+"Gameboard"+"</th></thead><tbody>";
		 
			
	 	 for (var row = 1; row <= length;  row++)
		{
	 		//three += 1;
	 		displaygbd += "<tr>";
		for (var col = 1; col <= length;  col++)
		{
			
			
			if (input == 1){
			//four += 1;
			if (((row ==count6)&&(col ==count3))) 
				{
				array[row][col]= turtle;
				}
			else {
				array[row][col]=gameboardSymbol;
			}
			}
			//----------------------------
			else if(input == 2)
			{
			
				
			if (((row == count6)&&(col ==count3)))
			{
			array[row][col]= turtle;
			
			}
      /*how to make 'O' follow 'X' by ibncrease the appropriate counter in the if below?*/
			else if (((row <= count6)&&(col <=count3)))
				{
				array[row][col]= usedspace;
				}

				
				
			else  if ((((row >= count6)||(col >= count3))))
			{
			array[row][col]=gameboardSymbol;
			}
			
			}//end else if 
					
			//----------------------------
			
			displaygbd += "<th>"+array[row][col]+"\xa0"+"</th>";
		}
		displaygbd += "</tr>";
		}
	 	displaygbd += "</tbody></table>";
	     
		 
	 	arraydisplay.innerHTML = displaygbd;
	     
	     
		}//end clickout function     
		
}





window.addEventListener("load",start,false);
