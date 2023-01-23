// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import user from 'src/store/apps/user'
import email from 'src/store/apps/email'
import invoice from 'src/store/apps/invoice'
import permissions from 'src/store/apps/permissions'
import posts from 'src/store/apps/posts'

export const store = configureStore({
  reducer: {
    user,
    email,
    invoice,
    permissions,
    posts
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
