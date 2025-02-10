import { configureStore } from '@reduxjs/toolkit'

import movieReducer from './reducers/movieSlice'
import tvReducer from './reducers/tvslice'
import personReducer from './reducers/personslice'
export const store = configureStore({
  reducer: 
  {
    movie:movieReducer,
    tv:tvReducer,
    person:personReducer,
  },
})