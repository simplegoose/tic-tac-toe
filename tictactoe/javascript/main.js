// Declaration of all variables

let player_1 = "",
    player_2 = "",
    playerStack = "",
    player_1_score = 0 , 
    player_2_score = 0,
    player_1_div = document.querySelector(".player__1"),
    player_2_div = document.querySelector(".player__2"),
    charSelect = document.querySelector('.charselect'),
    xChar = document.querySelector('.selected--char--x'),
    oChar = document.querySelector('.selected--char--o'),
    col_1_row_1 = document.querySelector('.col--1-row__1'),
    col_1_row_2 = document.querySelector('.col--1-row__2'),
    col_1_row_3 = document.querySelector('.col--1-row__3'),
    col_2_row_1 = document.querySelector('.col--2-row__1'),
    col_2_row_2 = document.querySelector('.col--2-row__2'),
    col_2_row_3 = document.querySelector('.col--2-row__3'),
    col_3_row_1 = document.querySelector('.col--3-row__1'),
    col_3_row_2 = document.querySelector('.col--3-row__2'),
    col_3_row_3 = document.querySelector('.col--3-row__3'),
    clickedDiv = document.querySelectorAll('.clicked'),
    player_1_result = document.querySelector('.player1--result'),
    player_2_result = document.querySelector('.player2--result'),
    resultSpan_1 = document.querySelector('#player1'),
    resultSpan_2 = document.querySelector('#player2'),
    resetScores = document.querySelector('.reset--scores'),
    resetGame = document.querySelector('.reset--game');

// Sets timeout for character selection div to appear after 500 miliseconds
setTimeout(() => {
    charSelect.style.visibility = "visible";
}, 500);

// Add event listener for both X and Y to set character for the players 1 and 2
xChar.addEventListener('click', () => {

    if(xChar.textContent === 'X') {

        // Sets character for player 1 to X and by default player 2 to O
        player_1 = xChar.textContent;
        player_2 = 'O';
    }

    /* Initiates playerStack to player one after selecting the character, 
       playerStack is then used to dictate the flow of the game */
    playerStack = player_1;

    // Sets the 'Player 1' pop up div
    player_1_div.style.top = 115;
    // hides the character select div
    charSelect.style.visibility = 'hidden';
})

// Every code on oChar below works in the same principle as xChar above
oChar.addEventListener('click', () => {

    if(oChar.textContent === 'O') {

        player_1 = oChar.textContent;
        player_2 = 'X';
    }

    playerStack = player_1;

    player_1_div.style.top = 115;
    charSelect.style.visibility = 'hidden';
})
   
/* Very long piece of code, resposible for checking who wins the game. When a div is 
   selected, I will explain later how, the divs containing the characters are added a 
   class. The code then checks if the selected div has the class necessary to win the 
   game in either the rows or columns */
function checkForWinner (){

    if( col_1_row_1.classList.contains('X') && col_1_row_2.classList.contains('X') && col_1_row_3.classList.contains('X') && player_1 === 'X'
    || col_1_row_1.classList.contains('O')&& col_1_row_2.classList.contains('O') && col_1_row_3.classList.contains('O') && player_1 === 'O'
    || col_2_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_2_row_3.classList.contains('X') && player_1 === 'X'
    || col_2_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_2_row_3.classList.contains('O') && player_1 === 'O'
    || col_3_row_1.classList.contains('X') && col_3_row_2.classList.contains('X') && col_3_row_3.classList.contains('X') && player_1 === 'X'
    || col_3_row_1.classList.contains('O') && col_3_row_2.classList.contains('O') && col_3_row_3.classList.contains('O') && player_1 === 'O'
    || col_1_row_1.classList.contains('X') && col_2_row_1.classList.contains('X') && col_3_row_1.classList.contains('X') && player_1 === 'X'
    || col_1_row_1.classList.contains('O') && col_2_row_1.classList.contains('O') && col_3_row_1.classList.contains('O') && player_1 === 'O'
    || col_1_row_2.classList.contains('X') && col_2_row_2.classList.contains('X') && col_3_row_2.classList.contains('X') && player_1 === 'X'
    || col_1_row_2.classList.contains('O') && col_2_row_2.classList.contains('O') && col_3_row_2.classList.contains('O') && player_1 === 'O'
    || col_1_row_3.classList.contains('X') && col_2_row_3.classList.contains('X') && col_3_row_3.classList.contains('X') && player_1 === 'X'
    || col_1_row_3.classList.contains('O') && col_2_row_3.classList.contains('O') && col_3_row_3.classList.contains('O') && player_1 === 'O'
    || col_1_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_3_row_3.classList.contains('X') && player_1 === 'X'
    || col_1_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_3_row_3.classList.contains('O') && player_1 === 'O'
    || col_3_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_1_row_3.classList.contains('X') && player_1 === 'X'
    || col_3_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_1_row_3.classList.contains('O') && player_1 === 'O') {

        // After the player has won, the are asked on wheather to contiue playing
        let result = confirm(`Player 1 using chatacter ${player_1} wins! \n \n do you wish to play again?`);

            // Condition to check if they want to continue
            if(result == true) {

                // This then resets all of the selected fields
                for(let i = 0; i < clickedDiv.length ; i++ ) {
                    clickedDiv[i].innerHTML = '';
                    clickedDiv[i].classList.remove(`${player_1}`, `${player_2}`);
                }
            } else {

                // If the don't want to continue the page is refreshed
                window.location.reload()
            }

            // Increments the players score
            player_1_score++;
    
            // Sets the players span to the current score
            resultSpan_1.textContent = player_1_score;

            // The code below works in the same principle as the above but checks the condition for a player 2 win
    } else if( col_1_row_1.classList.contains('X') && col_1_row_2.classList.contains('X') && col_1_row_3.classList.contains('X') && player_2 === 'X'
            || col_1_row_1.classList.contains('O')&& col_1_row_2.classList.contains('O') && col_1_row_3.classList.contains('O') && player_2 === 'O'
            || col_2_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_2_row_3.classList.contains('X') && player_2 === 'X'
            || col_2_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_2_row_3.classList.contains('O') && player_2 === 'O'
            || col_3_row_1.classList.contains('X') && col_3_row_2.classList.contains('X') && col_3_row_3.classList.contains('X') && player_2 === 'X'
            || col_3_row_1.classList.contains('O') && col_3_row_2.classList.contains('O') && col_3_row_3.classList.contains('O') && player_2 === 'O'
            || col_1_row_1.classList.contains('X') && col_2_row_1.classList.contains('X') && col_3_row_1.classList.contains('X') && player_2 === 'X'
            || col_1_row_1.classList.contains('O') && col_2_row_1.classList.contains('O') && col_3_row_1.classList.contains('O') && player_2 === 'O'
            || col_1_row_2.classList.contains('X') && col_2_row_2.classList.contains('X') && col_3_row_2.classList.contains('X') && player_2 === 'X'
            || col_1_row_2.classList.contains('O') && col_2_row_2.classList.contains('O') && col_3_row_2.classList.contains('O') && player_2 === 'O'
            || col_1_row_3.classList.contains('X') && col_2_row_3.classList.contains('X') && col_3_row_3.classList.contains('X') && player_2 === 'X'
            || col_1_row_3.classList.contains('O') && col_2_row_3.classList.contains('O') && col_3_row_3.classList.contains('O') && player_2 === 'O'
            || col_1_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_3_row_3.classList.contains('X') && player_2 === 'X'
            || col_1_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_3_row_3.classList.contains('O') && player_2 === 'O'
            || col_3_row_1.classList.contains('X') && col_2_row_2.classList.contains('X') && col_1_row_3.classList.contains('X') && player_2 === 'X'
            || col_3_row_1.classList.contains('O') && col_2_row_2.classList.contains('O') && col_1_row_3.classList.contains('O') && player_2 === 'O'){

                let result = confirm(`Player 2 using character ${player_2} wins! \n \n do you wish to play again?`);

                if(result == true) {

                    for(let i = 0; i < clickedDiv.length ; i++ ) {

                        clickedDiv[i].innerHTML = '';
                        clickedDiv[i].classList.remove(`${player_1}`, `${player_2}`)
                    }
                } else {

                    window.location.reload();
                }


                player_2_score++;
        
                resultSpan_2.textContent = player_2_score;
    }
}

// In the event of every clicked div, the div will be set to a character
clickedDiv.forEach((div) => {
    div.addEventListener('click', () => {
        
        // Sets the div to a character after checking the playerStack for the current player
        const logic = () => {
            if(playerStack === 'X') {

                // Checks if the div is empty and returns if it has a character
                if(div.textContent !== '') {

                    return

                } else {
                    
                    // Sets the div according to the current playerStack
                    div.textContent = playerStack;

                    // Adds the class necessary when checking for winner
                    div.className  += ' X'

                    /* After setting the class this method is executed 
                    to check if there is a winning pattern */
                    checkForWinner()

                    // Inverts the playerStack after setting the div to a certain character
                    if(playerStack === player_1) {

                        player_2_div.style.top = 115;
                        player_1_div.style.top = 165;

                        playerStack = player_2;

                    } else {

                        player_2_div.style.top = 165;
                        player_1_div.style.top = 115;

                        playerStack = player_1;

                    }
                }
                
              // Works in the same principle as the if condition above
            } else if (playerStack === 'O') {

                if(div.textContent !== '') {

                    return

                } else {

                    div.textContent = playerStack;

                    div.className += ' O';

                    checkForWinner()

                    if(playerStack == player_1) {

                        player_2_div.style.top = 115;
                        player_1_div.style.top = 165;

                        playerStack = player_2;

                    } else {

                        player_2_div.style.top = 165;
                        player_1_div.style.top = 115;

                        playerStack = player_1;

                    }
            }         
        }
    }
        // After the div has been clicked this method is called
        logic()

    })
})

// This clears the scores if the the users wish to after clicking reset scores button
resetScores.addEventListener('click', () => {
    resultSpan_2.textContent = '';
    resultSpan_1.textContent = '';
})

// This cleares the playing area if the users will have tied
resetGame.addEventListener('click', () => {
    for(let i = 0; i < clickedDiv.length ; i++ ) {
        clickedDiv[i].innerHTML = '';
        clickedDiv[i].classList.remove(`${player_1}`, `${player_2}`);
    }
})