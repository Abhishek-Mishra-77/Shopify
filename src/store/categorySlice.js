import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'



const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: [],
        status: STATUS.IDLE,
        catProductAll: [],
        carProductAllStatus: STATUS.IDLE,
        cartProductSingle: [],
        cartProductSingleStatus: STATUS.IDLE
    },
    reducers: {
        setCategories(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setCategoriesProductAll(state, action) {
            state.catProductAll.push(action.payload)
        },
        setCategoriesStatusAll(state, action) {
            state.carProductAllStatus = action.payload
        },
        setCategoriesProductSingle(state, action) {
            state.cartProductSingle = action.payload
        },
        setCategoriesStatusSingle(state, action) {
            state.cartProductSingleStatus = action.payload
        }
    }
})


export const { setCategories, setStatus, setCategoriesProductAll, setCategoriesStatusAll, setCategoriesProductSingle,
    setCategoriesStatusSingle } = categorySlice.actions


export default categorySlice.reducer;


// Thunk

export const fetchCategories = () => {
    return async function fetchCategoriesThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await fetch(`${BASE_URL}categories`)
            const data = await response.json();
            dispatch(setCategories(data.slice(0, 5)));
            dispatch(setStatus(STATUS.IDLE))

        }
        catch (error) {
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export const fetchProductByCategory = (categoryID, dataType) => {

    return async function fetchProductByCategoryThunk(dispatch) {

        if (dispatch === 'all') {
            dispatch(setCategoriesStatusAll(STATUS.LOADING));
        }
        if (dataType === 'single') {
            dispatch(setCategoriesStatusSingle(STATUS.LOADING))
        }

        try {
            const response = await fetch(`${BASE_URL}categories/${categoryID}/products`)
            const data = await response.json();
            if (dataType === 'all') {
                dispatch(setCategoriesProductAll(data.slice(0, 15)))
                dispatch(setCategoriesStatusAll(STATUS.IDLE))
            }

            if (dataType === 'single') {
                dispatch(setCategoriesProductSingle(data.slice(0, 20)))
                dispatch(setCategoriesStatusSingle(STATUS.IDLE))
            }
        }
        catch (error) {
            if (dataType === 'all') {
                dispatch(setCategoriesStatusAll(STATUS.ERROR))
            }

            if (dataType === 'single') {
                dispatch(setCategoriesStatusSingle)
            }

        }
    }

}