import { configureStore } from '@reduxjs/toolkit'
import newSlicer from '../features/news/newSlicer'

const store = configureStore({
    reducer: {
        news: newSlicer
    }
})

export default store