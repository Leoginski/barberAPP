import { combineReducers } from 'redux'
import {
  LOGIN,
  LISTAR_BARBEIROS,
  CADASTRAR_BARBEIRO
} from '../actions/actions'
​
function todos(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case LISTAR_BARBEIROS:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      case CADASTRAR_BARBEIRO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
    default:
      return state
  }
}
​
const todoApp = combineReducers({
  todos
})
​
export default todoApp
