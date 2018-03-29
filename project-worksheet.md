# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

I want to create pong but with a twist,  the name of the game is pong 2k18, its pong but with a few add on, like special abilites, in the beginning of the game you get a chance to choose 1 of 3 abilities. 
1.slightly bigger racket
2.ability to move slightly faster
3.ability to change the angle of your racket

i would also like to make a 1 player and 2 player mode.


## Wireframes

Include images of your wireframes. 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## Game Components

### Landing Page
players will see a sign that says “PONG 2K18” and  place where they can enter their names and a clickable button to choose their ability and controls on how to play the game.

### Game Initialization
players will see the playing field where they would see to equal sides and 2 rackets on each side, the ball will drop from the top of the screen and players would start to play.


### Playing The Game
the players job is to try and get the ball pass the player “danger zone”, the only way to do that is to make sure the ball do not go pass you. the ball will move back in forth at a steady pace( i also want to try and make the speed of the ball to increase every round or maybe every minute). game will be up to 3 or 5 points(not sure yet).


### Winning The Game
i want the screen to say game over “the name of the player” wins and maybe a confetti animation. you have to score 3 points to win.

### Game Reset
i want to create a button that will take people back to the game Initialization screen

## MVP 

1.ball physics
2.functional moving rackets 
3.playing field background

## POST MVP
1.sound effects.
2.playing field design.
3.displaying player name and score.
4. applying ablities.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
|racket| L | 30min| | |
|ball| L | 30min | | |
|scoreboard/player name| H | 3 hr| | 
|ball Physics| H | 2hr | | |
|field design| L | 3hr | | |
|"pong 2k18" design"| L | 1hr | | |
| Total |  | 10hrs|  |  |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
