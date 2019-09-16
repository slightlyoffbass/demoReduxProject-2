# Simple Redux with Thunk Middleware
## Blog post list

### API to render fake blog posts
- jsonplaceholder.typicode.com
    - /posts
    - /users

## Redux-Thunk Notes
- What is thunk? Middleware to help us make network requests in a redux application

### General Data Loading with Redux
- Component Gets rendered onto the screen
- Component's 'comonentDidMount' lifecycle method gets called
- We call action creator  from 'comonentDidMount'
    - Components [above] are generally responsible for fetching data they need by calling an action creator
- Action creator runs code to make API request
- API respons with data
- Action creator returns an 'action' with the fetch data on the 'payload' property
    - Action creators [above] are responsible for making API requests
    - This is where **Redux-Thunk** comes into play
- Some reducer sees the action, returns the data off the 'payload'
- Because we generated some new state object, redux/react-redux cuase our React app to be rendered
    - We get fetched data into a component by generating new state in our redux store, then getting that into our component through MapStateToProps
 <br>
 <br>
 
 
|     |     |     |
|:---:|:---:|:---:|
| redux | -> | The redux libary |
| react-redux | -> | Integration layer between react and redux |
| axios | -> |  Helps us make network requests |
| redux | -> | Middlware to help us make requests in |

### Middleware in Redux
- function that gets called with every action we dispatch
- has the abbility to **STOP,MODIFY**, or otherwise mess around with actions
- Tons of open sourse middlware exits
- Most popular use of middlware is dealing with async actions

### Rules with Redux Thunk
- Action Creators can return ation objects
    - or
- Action Creators can return functions!
<br>
<br>

    - if an action gets returned, it musth ave a type
    - if an action object gets returned, it can optionally have a 'payload'
