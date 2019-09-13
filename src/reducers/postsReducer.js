export default  () =>{
    return 123;
};


// RULES OF REDUCERS....
// RULE 1: a reducer must return any value, execpt undefined (javascript rule)
// without a return statement, undefined will be default
// RULE 2: Pruces 'state', or data to be used inside of your app using only preivious stae and the action
// RULE 3: Must not return reach 'out of itself' to decide what value to return (reducers are pure)
// RULE 4: Must not mutate its input  'state' argment