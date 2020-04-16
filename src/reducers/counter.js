import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  cartNum: 0,
  cartTotalPrice: 0,
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1,
        cartNum: state.cartNum + 1,
        cartTotalPrice: state.cartTotalPrice + action.data
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1,
         cartNum: state.cartNum - 1,
         cartTotalPrice: state.cartTotalPrice - action.data
       }
      //  case RET:
      //    return {
      //      state
      //    }
     default:
       return state
  }
}
