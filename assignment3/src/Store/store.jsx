import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReduser'

const store = configureStore({
      reducer:{dummyDetails: rootReducer, booking: rootReducer}
})

export default store
