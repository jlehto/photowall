
//"implicit return syntax requires the object literal to be wrapped in parenthesis."
//Action creator is just a function that returns an action
export const removePost = index => ({ 
        type : 'REMOVE_POST',
        index : index
});