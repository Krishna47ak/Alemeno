import { useState } from "react"
import { useSelector } from 'react-redux'
import NavbarHeader from "../components/Navbar"
import CourseCard from "../components/CourseCard"


const Home = () => {
    const [searchText, setSearchtext] = useState("")
    const courses = useSelector(state => state?.courses?.courses)


    return (
        <div className='bg-black text-white min-h-screen' >
            <NavbarHeader value={searchText} onChange={setSearchtext} />
            <div className="grid lg:grid-cols-2 gap-y-7 lg:gap-7 p-10 md:p-16" >
                {courses?.map((course) => (
                    <CourseCard key={course?.id} id={course?.id} img={course?.thumbnail} name={course?.name} description={course?.description} />
                ))}
            </div>
        </div>
    )
}

export default Home