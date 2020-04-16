import {
  ADD,
  MINUS,
  RET
} from '../constants/counter'

export const add = (data) => {
  return {
    type: ADD,
    data
  }
}
export const minus = (data) => {
  return {
    type: MINUS,
    data
  }
}
export const ret = (data) => {
  return {
    type: RET,
    data
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
