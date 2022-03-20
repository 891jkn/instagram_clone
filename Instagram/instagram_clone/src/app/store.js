import { configureStore } from '@reduxjs/toolkit'
import defaultReducer from '../features/default'
export default configureStore({
  reducer: {
      default:defaultReducer
  },
})