import alemenoApi from '../../api/alemenoApi'
import { FETCH_COURSES, FETCH_ERROR } from '../types'

export const fetchCourses = () => async dispatch => {
    try {
        const response = await alemenoApi.get('/')
        dispatch({ type: FETCH_COURSES, payload: response?.data })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}