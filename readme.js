what I want (sorry for "I") to succeed in this 20*20 array
of chracters '.' is that when we give 1 in txt1 we simply 
move the character 'X' right,left,up and down in the 
20*20 array of '.' through an if statement that simulates the counters 
with the clicks of button2 that includes itself and the mtxt1(=txt1) 
it in the function call with the 
name option2  e.g. 
/*-----------------------------------------------------*/
var clickcountt = buttonn;
var posx = 1;
var posy = 1;
var posz = 1;
var post = 1;
clickcountt.onclick = function() 
{
if (mtxt2 == 6){ posx += 1;}
else if if (mtxt2 == 3){ posy += 1;}
else if if (mtxt2 == 4){ posx -= 1;}
else if if (mtxt2 == 5){ posy -= 1;}
}

/*-----------------------------------------------------*/

but when we give 2 in txt1 
/*-----------------------------------------------------*/
select your first option
<input id ="txt1" type="text">
<input id = "getbutton" type ="button"  value = "your option">
<div id = "optionOne"></div>
/*-----------------------------------------------------*/

we include the same counters to increase the position of character 'X'
but now  we replace the characters '.' that 'X' passed with the character 'O'
e.g. 'X' passed from 
[1][1],[1][2],[1][3],[1][4],[1][5],[2][5],[2][6],[2][7],[3][7],[3][6],[3][5],[3][4],[3][3],[2][3],[2][2],[2][1],
[3][1],[4][1],[4][2],[5][2]
for simplicity reason we illustrate a 5*20 array

/*-----------------------vol 1-----------------------*/
1 . . . . . . . . . . . . . . . . . . . .
2 . . . . . . . . . . . . . . . . . . . .
3 . . . . . . . . . . . . . . . . . . . .
4 . . . . . . . . . . . . . . . . . . . .
5 . . . . . . . . . . . . . . . . . . . .
/*-----------------------vol 1-----------------------*/
/*-----------------------vol 2-----------------------*/
1 X . . . . . . . . . . . . . . . . . . .
2 . . . . . . . . . . . . . . . . . . . .
3 . . . . . . . . . . . . . . . . . . . .
4 . . . . . . . . . . . . . . . . . . . .
5 . . . . . . . . . . . . . . . . . . . .
/*-----------------------vol 2-----------------------*/
/*-----------------------vol 3-----------------------*/
 1  2  3    4  5  . . . . . . . . . . . . . . .1
 16 15 14   .  6  7 8 . . . . . . . . . . . . .2
 17  . 13  12 11 10 9 . . . . . . . . . . . . .3
 18  19 .   .  .  . . . . . . . . . . . . . . .4
 .   X  .   .  .  . . . . . . . . . . . . . . .5
/*-----------------------vol 3-----------------------*/
/*-----------------------vol 4-----------------------*/
1 O O O O O . . . . . . . . . . . . . . .
2 O O O . O O O . . . . . . . . . . . . .
3 O . O O O O O . . . . . . . . . . . . .
4 O O . . . . . . . . . . . . . . . . . .
5 . X . . . . . . . . . . . . . . . . . .
/*-----------------------vol 4-----------------------*/
