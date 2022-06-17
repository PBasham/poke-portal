# Title: Pokemon-Tracker


## Premise: 
A Pokemon app for users to track pokemon stats, create teams and view other users teams.



## The User Story:
- I can signup or log in to the website.
- I can see pokemon populate the Pokedex page.
- I can select a pokemon and I go to a page with details on it.
- I can add up to 5 pokemon to a team and save it.
- I can name my teams.
- I can view my teams and teams other users have craeted.
- I can delete a team.
- I can update my teams name or image.

## The Wireframes:
### Pokedex view of pokemon
![Pokemon-Tracker-Pokedex](imgs/readme/Pokemon-Tracker-Pokedex.jpg)
### Pokedex Entry view of pokemon
![Pokemon-Tracker-Pokedex-Entry](imgs/readme/Pokemon-Tracker-Pokedex-Entry.jpg)
### User Profile View
![Pokemon-Tracker-profile](imgs/readme/Pokemon-Tracker-Profile.jpg)



## The ERD: 
![Pokemon-ERD](imgs/readme/20220610_164049.jpg)

## Route Table:
| HTTP Method (Verb) | Path/Endpoint/URI |                                         CRUD Operation or Purpose                                        |
|:------------------:|:-----------------:|:--------------------------------------------------------------------------------------------------------:|
| GET                | /signup           | Renders the Signup page                                                                                  |
| POST               | /signup           | POST the signup information as a new entry in the database                                               |
| GET                | /login            | Renders Login page                                                                                       |
| POST               | /login            | Checks the entered username and password to verify the user exist  and has entered the correct password  |
| GET                | /pokemon          | Renders all of the pokemon in the database (that's 1295 pokemon...)                                      |
| GET                | /pokemon/:id      | Renders the show page for the selected pokemon by id                                                     |
| GET                | /team             | Renders the users teams if they have and also displays other  users teams                                |
| GET                | /team/new         | Renders the create new team page                                                                         |
| DELETE             | /team/:id         | CRUD: Delete a selected team                                                                             |
| PUT                | /team             | CRUD: Updates the teams teamMembers when adding a pokemon                                                |
| PUT                | /team/:id         | CRUD: Updates the teams Team Name / Image                                                                |
| POST               | /team             | CRUD: Creates a new team and adds it into the database                                                   |
| GET                | /team/:id/edit    | Renders the edit page for the selected team.                                                             |

## Technologies Used:
- HTML
- CSS
- JavaScript
- NodeJS
- Liquid Template Engine
- MongoDB (Mongoose)

## How To Use:
1. Create an account by clicking the sign up button.
2. Scroll through the pokemon and click any of the pokeballs to view more details on it.
3. While on this page you can add this pokemon to a team using a dropdown of you have a team created, if not, you will have the option to create a team form here. You can add up to 5 pokemon to a team.
4. If you want to view your teams / create a new team, you can click the "view teams" button at the top of the page.
5. Once here you can select the "Create new team" button to go the create new team page.
6. You must enter a team name, the team img is optional, then click create team.
7. From the "view teams" page you can chose to edit your existing teams or delete them. (Edit will only allow you to edit the teams name or image)

## MVP Requirements:


## Stretch goals / ICE BOX:
- Allow the user to delete individual pokemon from a team instead of having to delete the while team.
- Add a search bar on the pokemon index page so you can search for specific pokemon.
- Add comments section on each team.
- Add buttons that are more like the ingame buttons.
- Allow each user to choose a favorite pokemon
- Add small minigame where you can encounter a random pokemon and take a change at capturing it!