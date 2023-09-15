import { FiDollarSign } from 'react-icons/fi';
import { TfiBook } from 'react-icons/tfi';



const Card = ({ course, handleSelect }) => {
    return (
        <div className="p-4 rounded-md bg-white">
            <div>
                <img src={course.image} alt="" />
            </div>

            <dir className="text-left p-0">
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <p className="mb-2 text-slate-600">{course.description}</p>
            </dir>

            <div className='flex justify-between items-center'>
                <FiDollarSign />
                <p>Price : {course.price}</p>
                <TfiBook />
                <p>Credit : {course.credit}hr</p>
            </div>

            <div>
                <button onClick={() => handleSelect(course)} className='bg-[#2F80ED] text-white w-full p-2 mt-4 rounded-md font-medium'>Select</button>
            </div>
        </div>
    )
}

export default Card;