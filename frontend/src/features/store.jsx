import cartReducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store