import { ENROLL_COURSE, FETCH_COURSES, FETCH_ERROR } from "../types"

const initialState = {
    loading: true,
    courses: [],
    enrolledCourses: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_COURSES:
            return {
                ...state,
                loading: false,
                courses: payload
            }
        case ENROLL_COURSE:
            return {
                ...state,
                loading: false,
                enrolledCourses: [...state.enrolledCourses, { ...action.payload }]
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                courses: []
            }
        default:
            return state
    }
}