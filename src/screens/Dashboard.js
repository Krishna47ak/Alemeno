import { Button, Progress } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { markCourseComplete } from '../store/actions/courses'

const Dashboard = () => {
    const enrolledCourses = useSelector(state => state?.courses?.enrolledCourses)
    console.log(enrolledCourses);
    const dispatch = useDispatch();

    return (
        <div className='relative bg-black text-white min-h-screen px-32 py-20 text-center' >
            <Link to="/" className='fixed left-7 top-7 bg-white hover:bg-gray-400 p-2 px-5 text-black rounded-l-full select-none cursor-pointer z-50' >Go Back</Link>
            <div className='text-5xl font-semibold mb-10' >Enrolled Courses:</div>
            {enrolledCourses?.map((course, i) => (
                <div key={course?.id} className='bg-gray-800 mb-5 mx-20 pb-5 rounded-xl overflow-hidden' >
                    <Progress value={30 + i * 20} color="blue" label="Completed" />
                    <img
                        src={course?.thumbnail}
                        alt="ui/ux review check"
                        className='object-cover object-top w-full h-[30vh] md:h-[50vh]'
                    />
                    <div className='p-5' >
                        <p className='font-semibold' >{course?.name}</p>
                        <p className='font-medium' >{course?.instructor}</p>
                        <div className='font-medium' >Due in: <span className='font-semibold' >{course?.duration}</span></div>
                    </div>
                    <Button onClick={() => (course?.completed ? alert("Course already completed") : dispatch(markCourseComplete(course?.id)))} color={course?.completed ? 'blue' : 'green'} >{course?.completed ? "Completed" : "Mark as completed"}</Button>
                </div>
            ))}
        </div>
    )
}

export default Dashboard