# Pig Dice

##### Epicodus Section: JavaScript OO - Movie Tickets

#### By Grady L Shelton and Dana Weiss

## Description

This application is a practice of constructors and prototypes using JavaScript to create a game of Pig Dice between two players.

## Specifications

* Program will take user input to select "roll" and return a die value between 1 and 6.
  * **Example Input:** "Player clicks 'Roll'"
  * **Example Output:** "A die number between 1 and 6 is shown."

* If a player rolls a 1, they lose their points for the turn.
  * **Example Input:** "Player rolls a one"
  * **Example Output:** "Turn Total: 0. Their turn is over"

* If a player rolls any number besides a 1, the value of the dice is    added to their turn total.
  * **Example Input:** "Player rolls a 4 and then rolls a 5"
  * **Example Output:** "Turn Total: 4 and then Turn Total: 9"

* Player can decide to hold their Turn Total points which adds to the Grand Total and it is the next player's turn"
  * **Example Input:** "Player clicks hold with a Turn Total of 10 and a Grand Total of 20"
  * **Example Output:** "Turn over and Grand Total: 30"

* First player to a Grand Total of 100 wins"
  * **Example Input:** "Player one's Grand Total: 100"
  * **Example Output:** "WINNER!!""

## Setup

Install address-book by cloning this repository.

## Technologies Used

JavaScript and jQuery

### Legal

Copyright (c) 2017 **Grady L Shelton**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
