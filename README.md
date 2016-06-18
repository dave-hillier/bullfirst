# Build instructions

Use `npm install` to fetch dependencies

`npm test` launches the karma test runner. I've only configured it for Chrome, as that happens to be what I use at home 
but in a professional environment, I'd want to run multiple browsers. 

`npm start` should compile and serve the page. 

# Change rational

## Separate services from controller
I've refactored the data out of the controller and into a service. I imagine that this would ultimately come from the a
remote service rather than client calculated. 

## Add Unit Tests
I've added unit tests around the controller to ensure that the totals change when an account is added. I haven't 
exhaustively added tests like I might do because of limited time. 

## Dont expose the global variable
The global I use is angular, rather than Bullfirst's app.

## Use NPM
angular.js is included as a regular file. Given this is a complex library, I prefer using npm to 
manage this package. It makes upgrade simpler. 
NPM is already in use so I have no problem in using it to manage dependencies. 

## folder structure
I prefer to group things by feature rather than by type, but given the simplicity of this app its fine - 
this scales ok to moderately complex, only becoming problematic when 

It also has the disadvantage of not being enough of a self contained unit of functionality, but then again, services 
don't always map one-to-one with views. The best structure would likely emerge as the app develops. To start with a 
simple one will do. 

## Use Webpack/requirejs

Managing the list of files in the HTML is a pain. Also you can benefit from minification using these tools. 
Fewer fetches are prefered.  

## CSS

### normalize.css first

Can be a good practice to apply something like normalize.css to make browsers render elements more consistently.

### avoid the globals
For example, the use of table affects all tables, that probably isn't intended. 

### Avoid child selector
In general more complex selectors should be avoided.

### shorter selectors
Do a refactoring pass to reduce the length of 

### Get rid of px and replace with REM, EM, etc 
Allows the design to scale better

### Responsive
Mobile devices are so widely used now, should consider designing for mobile by default. Use a media query.

### Avoid using IDs
They decrease portability. All pages that want to appear like this have to have the same ids. It's better to use classes, for example, it allows 
you to more easily add two sections that look like the content div. 

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

## Design enhancements
- [x] Fixed button styles
- [x] Found a matching font 
- [x] Added Images for buttons
- [x] Cut out the logo and added some horns to the title
- [x] Styled table (lines, colouring, text, alignment)
- [x] labels around chart
- [x] grey border legend
- [ ] Add grey border & footer
