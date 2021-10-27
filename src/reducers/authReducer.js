
import { types } from '../types/types';

/**
 * 
 *  {
 *    uid: 'alsdkjl340398409234'
 *    name: 'Edmundo'
 * }
 * 
 */

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login :
            
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return { }
    
        default:
            return state
    }
}
