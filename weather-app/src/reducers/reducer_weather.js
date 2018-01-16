import { FETCH_WEATHER } from '../actions/index'

export default  (state = [], action) => {
    console.log('Action recived', action);
    
    switch (action.type) {
        case FETCH_WEATHER:
        console.log(action);
            // Make a new array put action data inside of it then take this other variable
            // take all the enteries outside inside of it and 
                //insert it into this new outside arrays
            return [ action.payload.data, ...state ]; //data has city and list of the forecast // [city, city city] NOT [city, [city,city]]
            
    }

    return state;
}