import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>;

