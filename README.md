# Build instructions

Use `npm install` to fetch dependencies

`npm test` launches the karma test runner. I've only configured it for Chrome, as that happens to be what I use at home 
but in a professional environment, I'd want to run multiple browsers. 

`npm start` should compile and serve the page. 

# Design Changes
- [x] Found a matching font 
- [x] Cut out the logo and added some horns to the title
- [x] Cut out the icons, added to buttons
- [x] Changed button colours and borders
- [x] Padded around table and chart
- [x] Styled table (lines, colouring, text, alignment, Grey border legend)
- [x] Added missing chart title
- [x] New Account Legend random colour
- [x] Add grey border to document & footer
- [x] Update totals when new account added

# Other Changes
## Separate services from controller
I've refactored the data out of the controller and into a service. I imagine that this would ultimately come from the a
remote service rather than client calculated. 

## Add Unit Tests
I've added unit tests around the controller to ensure that the totals change when an account is added. 
I haven't exhaustively added tests like I might do because of limited time. 
The tests helped with fixing the bug.

## Avoid global variables
I'm not introducing new globals. Instead of using `appRoot` I'm using `angular.module('bullsfirst')`. I'd hope that this 
would make the design more modular, as I would consider using requirejs or similar. 

## Use NPM
angular.js is included as a regular file. Given this is a complex library, I prefer using npm to manage this package. 
NPM is already in use for the project, I have no problem in using it to manage dependencies. 

## Folder structure
I prefer to group things by feature rather than by type, but given the simplicity of this app I have grouped this way. 
This approach scales to moderately complex. Grouping by feature is difficult to show with only one feature. 

## CSS
### Responsive
Improved the layout on narrower displays. Now moves the chart below and the table fills the width when the display is
too narrow to fit both on the same row. 

### Avoid the globals
For example, you can only have one style of table. 

### Get rid of px and replace with REM, EM, etc 
Allows the design to scale better

### Avoid using IDs
They decrease re-usability of the systems. For example; you can't use the logo except in that specific div.

### Inline styles debate, separation of concerns
It is often suggested to avoid inline styles. I'm not particularly convinced by the arguments coupling between css and 
HTML is often too high to prove that the concerns were actually separated.
There are places like the logo where I'm not sure it makes sense to separate it out between HTML and CSS.

### combine elements
Do a refactoring pass to remove duplication from the css, use lists of selectors

### shorthand properties
Do a refactoring pass to replace paddings, margins, etc.

### Use a pre-processor
Consider using Sass or postcss
Validate, pre-process and minify

