
# README for Fitness Tracker
          
## Description 
              
This application allows the user to create workouts and add exercises to each workout. The user can keep adding exercises to the workout until they are ready to finish and once they press complete, all of the aspects of the workout are totalled. The application also includes a dashboard where users can track their previous exercises and workouts.
        
## Table of Contents
* Title
* Description
* Installation
* Useage
* License
* Contributing
* Tests
* Questions

    
## Installation
The user must run server.js in the terminal using "node server", which establishes the connection (for the local environment, this is on port 3000). When deployed to Heroku, the app will work automatically. Once the service is established, the user interface is self-explanatory with users able to either complete a new workout (and add new exercises), continue the existing workout, or view the dashboard.

## Usage 
The application uses node JS modules, models and routes to push/pull data from a Mongo Database, and a HTML interface that allows the user to navigate through workouts, exercises and the dashboard (stats). The api routes include "get" routes to display the information retrieved from the DB, "post" routes to add new information to the DB, and "put" routes to update the information that is stored in the DB. 


## Credits
This was a solo project, however the project relied heavily on Node JS and the packages mentioned above. Additionally, I sought advice from the Ask BCS instructors a number of times and would like to thank Renato for his assistance during our Sunday night tutoring sessions.

## License
MIT

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
Should others wish to contribute to this application, I thank them for their interest and request that they use the standards from at the Contributor Covenant.
Note: the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard

## Tests
There were no tests developed for this project.

## Questions
Please direct questions to andrewmiddleton1, https://github.com/andrewmiddleton1
