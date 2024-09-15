# rock-paper-scissors
This will be a rock paper scissors game created with JavaScript and played in the console.

Central Focus:
- Problem Solving: Understand, Plan, Pseudocode and Dissect.
- Debugging: Use the browser developer tool to navigate the code and find the problem.

Understand: 
The user is playing the rock paper scissors game against the computer. The user selects one of the three options and the computer will provide a randomly chosen one. The side choosing the winning option will gain a point. A full game consists of 5 rounds and afterwards a winner will be declared.

Plan:
There will be no interface since everything will be played in the console. 
The inputs will be either: rock, paper or scissors. The user can provide this input using the prompt box.
The desired output will be +1 point to the winning side after every round and after 5 rounds a winner will be declared based on who has the most points.

Pseudocode:
User inputs a string value of either "Rock", "Paper" or "Scissors".
The computer returns one of the three options at random through a function.
If "Paper" then wins from "Rock"
If "Rock" then wins from "Scissors"
If "Scissors" then wins from "Paper"
The score of the user or computer that provided the winning option gets incremented by +1 point
5 rounds will be counted until the game ends and the side with the highest number of points gets declared as winner