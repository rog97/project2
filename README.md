# Project2 - Startup wiki

## User Stories

- As a user, I want to be able to sign up by creating a username and password
- As a user, I would like the password to be encrypted and hidden from other peoples view
- As a user, I would like the application to remember my login information so that I don't have to sign up each time I use the wiki
- As a user, I want to be able to add a new post
- As a user, I want to be able to edit a post
- As a user, I want to be able to delete a post
- As a user, I want to be able to see who authored a post, as well as have the ability to edit/delete such a post if it sucks
- As a user, I want to be able to see all posts in one central place and click on them to view a more detailed page
- As a user, I want to be able to view a filtered list of posts depending on the category that I choose
- As a user, I want to be able to logout of the application

## Technologies Used

The core technologies used in this application are:
- HTML, CSS, and JavaScript for the front end
- Node.js to handle all the server side requests and responses
- Node modules (via the Node Package Manager) such as Express (to create routers/server) and EJS (to dynamically render pages)
- MongoDB and Mongoose to store information into a database
- Other Node modules such as: bcrypt, body-parser, ejs-layouts, express-session, method-override, and morgan

## Approach Taken

- I first created my wireframes and respective routes
- My second step was to create the necessary files I knew I would use as well as install all the modules that would be necessary for this project
- I then built out the core functionality of the application. First, I created an app.js file that required all the modules I had installed. Then I implemented the MVC approach. For the models, I created a User and Startup schema. I also created a users controller and startups controller to delineate all of my routes, and made sure the app.js file was importing those controllers.
- As I was creating my routes, I started making my dynamic ejs files for an index, new, edit, and delete routes. 
- Once this task was accomplished, I focused on building a basic sign up and login page. 
- With the core functionality addressed, I focused on styling my pages using CSS
- I then added some front-end javascript logic to help make a dynamic nav bar similar in style to the one we built for homework
- I kept honing and tweaking my ejs pages
- Finally, I added encryption and inputted information into my database

## Installation Instructions

- Please go to: https://ga-startup-wiki.herokuapp.com/startups

- Press the "Sign In" button and create a username and password. Once you click the red button, this will take you back to the "Welcome" page

- Now click on the "Login" button. Type in your username and password and click the red button. If typed correctly, this should take you to the "Index" page of the app where a bunch of startups should be displayed

- To add a startup, click the hamburger button on the top-left hand corner. This will cause a nav bar to pop up. In the nav bar, click the "New Startup" button. This will take you to a forms page where you can input the information for a new startup and click submit at the bottom of the page. A name is required to submit. I've been pulling information from startup sites such as Crunchbase and CBInsights.

- On the index page, you can access a startup by clicking on any name. This will take you to that company's show page. You can then click the edit button to edit the page, or the "delete" button to delete the page from the index.

- To log out, simply click the "logout" button on the top-right of any page.

## Unsolved Problems

- Create a filtered page according to vertical. In other words, if I wanted to view only companies in the "Fintech" space, then by clicking "Fintech" on my nav bar, I would get a new index page with only fintech companies.

- Create a route for logging out. Right now, I'm just redirecting the user to the "welcome" page

- Implement markdown on the description part of the forms page. 

- Refactor CSS and EJS files. I got very sloppy towards the end. 

- Would really like to add a feature that a) allows users to import the logo of the startup and b) uses an API that links up to the Crunchbase database and dynamically inputs all the information in the right place as you type the startup's name.

- The order in which companies appear in the "index" page is all screwy

- Ideally, when I navigate from one page to the next, the navigation bar stays in its place instead of closing automatically

- Format the time stamp
