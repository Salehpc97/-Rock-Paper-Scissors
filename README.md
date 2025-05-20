# Rock Paper Scissors Game
                                       /*Have fun with this game*/
                                       
# I have created a simple Rock Paper Scissors game using HTML, CSS, Github copilot, and JavaScript. The game allows users to play against the computer in a web-based interface.

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Main Features](#main-features)
- [How to Play](#how-to-play)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Contributing](#contributing)
- [Functions in rock-paper-scissors.js](#functions-in-rock-paper-scissorsjs)

## Introduction
This project is a simple implementation of the classic Rock Paper Scissors game. It allows users to play against the computer in a web-based interface.
## Project Overview
This is a simple implementation of the classic Rock Paper Scissors game. The game allows users to play against the computer in a web-based interface.

## Main Features
- Interactive game interface
- Score tracking
- Reset functionality
- Responsive design

## How to Play
1. Choose either Rock, Paper, or Scissors
2. The computer will randomly select its choice
3. The winner is determined based on the classic rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock

## File Structure
- `Rock Paper Scissors.html`: Main game interface
- `game.html`: Game play interface
- `Rock Paper Scissors.css`: Styling for the game
- `game.css`: Styling for the game play interface
- `js/rock-paper-scissors.js`: Game logic and functionality

## Installation
1. Clone the repository
2. Open `Rock Paper Scissors.html` in your browser

## Contributing
Feel free to fork and contribute to this project. Please follow standard coding practices and include detailed commit messages.

## Functions in rock-paper-scissors.js

### playRound(playerSelection)
- Handles the game logic for each round
- Updates the game state and UI

### getComputerChoice()
- Generates a random choice for the computer

### getRoundResult(playerSelection, computerSelection)
- Determines the winner of each round

### updateScore(roundResult)
- Updates the score based on the round result

### resetGame()
- Resets the game state to start a new game

### endGame()
- Handles the end of the game and displays the final result