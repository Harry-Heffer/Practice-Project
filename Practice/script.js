// JavaScript source code
// Sidebar Event Targets
let test = document.getElementById('test');
let intro = document.getElementById('intro');

// Sidebar Event Destinations
let mainTitle = document.getElementById('main-title');
let mainText = document.getElementById('main-text');
let mainShowcase = document.getElementById('main-body-showcase');

// Function to slowly reveal the showcase when hovered over
function hoverReveal() {
    mainShowcase.style.color = 'white';
    mainShowcase.style.transition = 'color 2s linear';
}

function hoverHide() {
    mainShowcase.style.color = '#03355b';
    mainShowcase.style.transition = 'color 2s linear';
}

// Functions to replace elements in index when a sidebar element is clicked
function testInsert() {
    mainTitle.innerHTML = 'Animation Test';
    mainText.innerHTML = 'On the right there is a hidden test element that only becomes visable when you hover over it. This is acheived by adding a color transition for the text with a transition-duration of 2 seconds from the background color to white.';
    mainShowcase.innerHTML = '<h2>----------------------------------<br/>----------------------------------<br/>----------------------------------<br/>--------------Test!---------------<br/>----------------------------------<br/>----------------------------------<br/>----------------------------------</h2>'
    mainShowcase.style.color = '#03355b';
}

function introInsert() {
    mainTitle.innerHTML = 'Introduction';
    mainText.innerHTML = 'This webpage is a place for pacticing web development. I am developing a forum to practice front-end and back-end development, this can be accessed from the Navigation bar at the top left of this webpage by clicking on Forum. My aim is to also make this website have a responsive design so that it can be viewed on devices with different screen sizes.<br /><br />Here on the Homepage I will list projects I have developed in the sidebar, the idea at the moment is to manipulate the DOM (Document Oject Model) to change the content on this page without taking the user to a new webpage. I will also be using the space to the right as a place to showcase the projects I have developed and allow these to be interacted with by a user visiting the page.<br /><br />Please explore this website to see what I have been working on.';
}

test.addEventListener('click', testInsert);
mainShowcase.addEventListener('mouseover', hoverReveal);
mainShowcase.addEventListener('mouseout', hoverHide);

intro.addEventListener('click', introInsert);
