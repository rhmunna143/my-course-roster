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
                <p className="mb-2 text-slate-600 font-normal">{course.description}</p>
            </dir>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <FiDollarSign />
                    <p className='text-slate-500 font-medium'>Price : {course.price}</p>
                </div>

                <div className='flex items-center gap-2'>
                    <TfiBook />
                    <p className='text-slate-500 font-medium'>Credit : {course.credit}hr</p>
                </div>
            </div>

            <div>
                <button onClick={() => handleSelect(course)} className='bg-[#2F80ED] text-white w-full p-2 mt-4 rounded-md font-medium'>Select</button>
            </div>
        </div>
    )
}

export default Card;