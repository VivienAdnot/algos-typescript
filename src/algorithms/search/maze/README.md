# Escaping the maze

Read a rectangular map of a maze from an ASCII file. Each character may be one of the following:
* Space: you have to continue in the direction you are going
* 'v', '<', '^', or '>': you must go in the direction the character points toward
* '|' or '-': you may go in either of the two directions the character points toward
* '?': you may go in any direction (left, right, up or down)

An example maze (13x5):
v ? | < 
? ?
? ? |>
? -
> ^ ? <

You enter the map at the top row from the left, as indicated by the arrow.
You face right as you enter and may only change direction according to the rules
above for the map tile you are standing on.

(In this example you would turn to face down as soon as you enter.)

Output the total number of ways to exit the map.
For example, if it's possible to exit the map while:
* going up on column 3,
* while going left on row 5
* and while going either left or right on row 2,

the output should be 4.
As another example, in the map above, the total number of possible exits when starting from the top left is 8
(3 on the left, 1 at the bottom, 2 on the right, and 2 at the top).