/********************************************************************************************************

    #MODIFICATION LOG

    #Original Author: Robert Sabo
    #Date Created: 12/02/2022
    #Version: 1.0
    #Date Last Modified: 10/23/2024
    #Modified by: Robert Sabo
    #Modification log:

        Version 0.0 - 12/02/2022 - Created Vue project. Config the file with Vue Routing. 
                                   Created Navbar and Footer. Imported Bootstrap and Fontawesome.

        Version 0.1 - 12/04/2022 - Created home page to website. Imported Animate.css and TypewriterJs.

        Verison 0.2 - 12/06/2022 - Finished creating home page. Created and finished about page. 
                                   Created Experience page. Imported Chart.js, and vue-chart.

        Verison 0.3 - 12/09/2022 - Finished creating the experience page. Created contact page.

        Verison 0.4 - 12/10/2022 - Finished up contact. Implemented FormSubmit to contact page
                                   to email me the contact information.

        Verison 0.5 - 12/11/2022 - Did a CSS redesign. Refactored and optimized for web. Test and deploy.

        Verison 1.0 - 10/23/2024 - Reworte it in pure HTML, CSS, JS. Mobile Ready.


********************************************************************************************************/

// Get the span with .typed class
const typed = document.querySelector(".typed");

// create a new Typewriter with typed class as selected
const typewriter = new Typewriter(typed, {
    loop: true,
});

// Creates the animation sequence for typing
typewriter
    .pauseFor(2500)
    .typeString("person.")
    .pauseFor(1000)
    .deleteChars(1)
    .typeString(" who writes code.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(300)
    .typeString("👨🏻‍💻")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(300)
    .typeString("software engineer.")
    .pauseFor(2000)
    .deleteChars(9)
    .typeString("developer.")
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(300)
    .typeString("game developer.")
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(300)
    .typeString("web developer.")
    .pauseFor(10000)
    .start();
