# Adopt A Pet
## Written by Blade Boles and Jaye Laguardia

### About
The user can enter their name to get in line to adopt a pet. The choice of pets shown is in order of when the shelter received them. The user can only adopt when it is their turn. The user may also adopt as many pets as they desire.  This is the server repo for this app.

### Live App
[Adopt A Pet](https://build-theta-ecru.now.sh)

### Tech Stacks
- Node
- Javascript
- Express
- Heroku

### API Endpoints

* /people 
  * get - Returns list of current people in line 
  * post - Adds a new customer to the back of the line
  * delete - Removes the customer in the front of the line
* /pets
   * /api/cat
      * get - Returns list of all cats in shelter
      * delete - Dequeues kitty at the front of the line
   * /api/dog
      * get - Returns list of all dogs in shelter
      * delete -  Dequeues puppy at the front of the line


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the server in development mode<br />
Locally server will be [http://localhost:8000](http://localhost:8000) when launched.




