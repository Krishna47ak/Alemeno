import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
    Chip,
} from "@material-tailwind/react";
import CourseAccordion from '../components/CourseAccordion';


const CourseDetail = () => {
    const { id } = useParams();
    const courses = useSelector(state => state?.courses?.courses)

    const [course, setCourse] = useState([])

    const selectedCourse = courses?.find((course) => course?.id === Number(id))

    useEffect(() => {
        if (selectedCourse) {
            setCourse(selectedCourse)
        }
    }, [courses])

    return (
        <div className='flex justify-center p-20 bg-black text-white min-h-screen' >
            <Card className="w-[90%] h-fit pb-7 max-w-full overflow-hidden">
                <img
                    src={course?.thumbnail}
                    alt="ui/ux review check"
                    className='object-cover object-top h-[50vh]'
                />
                <CardBody className='p-10' >
                    <Typography variant="h4" color="blue-gray">
                        {course?.name || ''}
                    </Typography>
                    <Typography variant="h5" color="current" className="mt-1">
                        {course?.instructor || ''}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {course?.description || ''}
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between p-10">
                    <div className="flex items-center space-x-3">
                        <Tooltip content={course?.duration} >
                            <Button>Duration</Button>
                        </Tooltip>
                        <Tooltip content={course?.location} >
                            <Button>Location</Button>
                        </Tooltip>
                        <Chip className='p-3 px-5' color={course?.enrollmentStatus === "Open" ? "green" : "red"} value={course?.enrollmentStatus || ''} />
                    </div>
                    <div className="font-semibold">Schedule: <p className='font-normal' >{course?.schedule}</p></div>
                    <div className="font-semibold">Prerequisites:
                        {course?.prerequisites?.map((e, i) => (
                            <p key={e} className='font-normal' >{i + 1}: {e}</p>
                        ))}
                    </div>
                </CardFooter>
                <div className='m-10 p-5 px-10 pb-8 border border-black rounded-xl' >
                    <CourseAccordion syllabus={course?.syllabus} />
                </div>
                <Button className='w-fit mx-auto' size='lg' >Enroll Now</Button>
            </Card>
        </div>
    )
}

export default CourseDetail
