import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducer/rootReducer'

const store = configureStore({
  reducer:{webState: rootReducer}
})

export default store