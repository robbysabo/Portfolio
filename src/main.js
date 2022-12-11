/********************************************************************************************************

    #MODIFICATION LOG

    #Original Author: Robert Sabo
    #Date Created: 12/02/2022
    #Version: 0.5
    #Date Last Modified: 12/11/2022
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


********************************************************************************************************/

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquare, faStar } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone, faStar as faStarSolid, faStarHalfStroke, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faGithubSquare, faLinkedin, faEnvelope, faPhone, faStar, faStarSolid, faStarHalfStroke, faUpRightFromSquare, faSquare);

createApp(App).use(router).mount("#app");
