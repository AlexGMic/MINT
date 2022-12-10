import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    data: [],
    error: '',
    filtered: []
}

export const fetchNews = createAsyncThunk('News/fetchNews', ()=>{
    return axios.get('/api/article-list/').then((response)=>response.data)
})

const newSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        allNews: (state) => {
            state.filtered = []
            state.data.map((item)=>state.filtered.push(item))
        },
        searchNews: (state, action) => {
            let input = action.payload
            state.filtered = state.data.filter((item)=>{
                return item.title.includes(input)
            })
        },
        internationalNews: (state, action) => {
            const category = action.payload
            state.filtered = []
            state.filtered = state.data.filter((item) => {
                return item.category===category
            })
        },
        latestNews: (state, action) => {
            const category = action.payload
            state.filtered = []
            state.filtered = state.data.filter((item) => {
                return item.category===category
            })
        },
        technologyNews: (state, action) => {
            const category = action.payload
            state.filtered = []
            state.filtered = state.data.filter((item) => {
                return item.category===category
            })
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchNews.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchNews.fulfilled, (state, action)=>{
            state.loading=false
            state.data=action.payload
            state.filtered=action.payload
            state.error=''
        })
        builder.addCase(fetchNews.rejected, (state, action)=>{
            state.loading=false
            state.data=[]
            state.filtered=[]
            state.error=action.error.message
        })
    }
})

export default newSlice.reducer

export const { allNews, searchNews, internationalNews, latestNews, technologyNews } = newSlice.actions