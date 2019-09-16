export default  (state = [], action) =>{
    
    switch (action.type){
        case 'FETCH_POSTS':
            action.payload;
        default :
            return state;
    }
};


// RULES OF REDUCERS....
// RULE 1: a reducer must return any value, execpt undefined (javascript rule)
// without a return statement, undefined will be default
// RULE 2: Pruces 'state', or data to be used inside of your app using only preivious stae and the action
// RULE 3: Must not return reach 'out of itself' to decide what value to return (reducers are pure)
// RULE 4: MISLEADING >> Must not mutate its input 'state' argment
//  ----> corner case: object === object works, but object === [1,2,3]      
// never write state and = together!

// Removing an element from an array 
//         bad... state.pop()
//            good... state.filter(element => element !== 'hi')

// Adding an element to an array
//          bad... state.push('hi')
//              good... [...state,'hi']

// Replacing an element to an array
//          bad... state[0]='hi'
//              good... state.map(el => el === 'hi' ? 'bye' : el)

// Updateing a property in an object
//          bad... state.name='Sam'
//              good... {...state, name:'Sam'}

// Adding a property to an object
//          bad... state.age=30
//              good... {...state, age:30}

// Removing a property from an object
//          bad... delete state.name
//              good... {...state, age:undefined}
//                          _.omit(state,'age')

