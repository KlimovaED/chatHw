import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to
    // fix any
    switch (action.type) {
        case 'sort': { // by name
           let newCopy= [...state];
            newCopy.sort((a,b)=>(action.payload==='up')? (a.name>b.name? 1:
             -1): (a.name<b.name? 1: -1));
              return newCopy

        }
        case 'check': {
           let filteredState= state.filter(st=>st.age >= action.payload)
            return filteredState // need to fix
        }
        default:
            return state
    }
}


