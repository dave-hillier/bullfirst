# Build instructions

Use `npm install` to fetch dependencies

`npm test` launches the karma test runner. I've only configured it for Chrome, as that happens to be what I use at home 
but ina professional environment, I'd want to run multiple browsers. 

`npm start` should compile and serve the page. 

# Change rational

## Separate services from controller
I've refactored the

## Add Unit Tests
I've added unit tests around the controller to ensure that the 

## Dont expose the global variable
The global I use is angular, rather than bullfirst's app.

## Use NPM
angular.js is included as a regular file. Given this is a complex libary, I prefer using npm to 
manage this package. It makes upgrade simpler. 
NPM is already in use so I have no problem in using it to manage dependencies. 

## folder structure
I prefer to group things by feature rather than by type, but given the simplicity of this app its fine - 
this scales ok to moderately complex, only becoming problematic when 

it also has the disadvantage of not being enough of a self contained unit of functionality, but then again, services 
dont always map one-to-one with views

## Use Webpack/requirejs

Managing the list of files in the HTML is a pain. Also you can't benefit from 

## CSS

### normalize.css first

Can be a good practice to apply something like normalize.css to make browsers render elements more consistently.

### Avoid child selector
In general more complex selectors should be avoided.

### shorter selectors
Do a refactoring pass to reduce the length of 

### Get rid of px and replace with REM, EM, etc 
Allows the design to scale better

### Responsive
Mobile devices are so widely used now, should consider designing for mobile by default. Use a media query.

### Avoid using IDs. They decrease portability.
All pages that want to appear like this have to have the same ids. It's better to use classes, for example, it allows 
you to more easily add two sections that look like the content div. 

### inline styles debate, separation of concerns
It is often suggested to avoid inline styles. I'm not particularly convinced by the arguments coupling between css and 
HTML is often too high to prove that the concerns were actually separated.

### combine elements
Do a refactoring pass to remove duplication from the css, use lists of selectors

### shorthand properties
Do a refactoring pass to replace paddings, margins, etc.

### Use a pre-processor
Consider using Sass or postcss
Validate, pre-process and minify


## Design enhancements
- [x] Fixed button styles
- [x] Found a matching font 
- [x] Added Images for buttons
- [x] Cut out the logo and added some horns to the title
- [x] Styled table
- [ ] Add grey border & footer
