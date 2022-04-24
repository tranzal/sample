import {tokenState} from "../states/tokenState";

enum actionEnum {
    changeToken = "changeToken"
}

const tokenReducer = (state = tokenState, action : { type : any, token : string}) => {

    switch (action.type){
        case actionEnum.changeToken :
            return {
                ...state,
                token : action.token
            }
        default :
            return state
    }
}

export default tokenReducer