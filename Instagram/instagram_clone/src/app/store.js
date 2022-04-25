import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import defaultReducer from '../features/default'
import createPostReducer from '../features/createPost'
import HomeReducer from '../features/HomeReducer'
import SearchReducer from  '../features/SearchReducer'
import userProfileReducer from '../features/UserProfile'
export default configureStore({
  reducer: {
      default:defaultReducer,
      createPoster : createPostReducer,
      homeReducer:HomeReducer,
      searchReducer:SearchReducer,
      userProfileReducer:userProfileReducer
  }
})