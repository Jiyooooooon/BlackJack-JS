   <script>
	
	var drnd;      //dealer's random number
	var dmin = 17; //dealer's minimum number
	var dmax = 21; //dealer's maximum number
	var mrnd;      //player's random number
	var mmin = 1;  //player's minimum number
	var mmax = 13; //player's maximum number
	
    
    drnd = Math.floor(Math.random() * (dmax-dmin) + 1) + dmin; // get dealer random number(Dealer's score) using Math.floor function.
	var iddealer = document.getElementById("dealer"); // Assian one JavaScript variable and utilize document.getElementById method to display.
	var message1 = "Dealer's Score : "; 
	iddealer.innerHTML = message1 + "<span style='color:red'>" + drnd + "</span><br>"; //display meesage1.
	
	var myVar = 0;
	var sum = 0;

	do {
			mrnd = Math.floor(Math.random() * (mmax-mmin) + 1) + mmin; // get player random number(Player'S Score) using Math.floor function.
			myVar++;
			alert ("Your Card is : " + mrnd);
				if(mrnd > 10){
					mrnd = 10; //if player's card is one of 11,12 or 13, then assigned a value of 10.
				}	
			var idhand = document.getElementById("hand");
			var message2 = "Player's Hand : ";
			idhand.innerHTML = message2 + "<span style='color:red'>" + myVar + "</span><br>"; //keep track of each card played and display.
			
			sum += mrnd; 
			var idplayer = document.getElementById("player");
			var message3 = "Player's Score : ";
			idplayer.innerHTML = message3 + "<span style='color:red'>" + sum + "</span><br>"; // keep a running total of player's score and display.

				
	}while(sum <= 21 && confirm("Do you want another card?")); //if player's score didn't go over 21 then ask weather you want another card or not.

	//Once the loop has ended, test player's score and compary it againt the dealer's.
	if(sum > 21) {
				var idlost = document.getElementById("lost");
				var message4 = "You went Bust, You lost! ";
				idlost.innerHTML = "<span style='color:red'>" + message4 + "</span>";
			}	
	else if (sum > drnd){
				var idwin = document.getElementById("win");
				var message5 = "You Win! "; 
				idwin.innerHTML = "<span style='color:green'>" + message5 + "</span>" + "<span style='color:red'>" + sum + "</span><br>"; 
			}
	else if(sum < drnd) {
				var iddwin = document.getElementById("dwin");
				var message6 = "Dealer Wins! "; 
				iddwin.innerHTML = "<span style='color:green'>" + message6 + "</span>" + "<span style='color:red'>" + drnd + "</span><br>"; 
			}
	else
			{
				var iddraw = document.getElementById("draw");
				var message7 = "It's Draw! "; 
				iddraw.innerHTML = "<span style='color:red'>" + message7 + "</span><br>";
			}

	
     </script>