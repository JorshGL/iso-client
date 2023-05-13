import React from 'react'


const Courses = ({courses}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full shadow-lg shadow-custom-yellow-soft rounded-lg px-2'>
      <div className='font-medium'>Materias ofrecidas</div>
      <div className='flex w-full justify-center gap-3 flex-wrap mb-3 text-sm'>
        {
          courses.map((course) => (
            <div
            className="flex items-center gap-1 bg-neutral-100 px-2 py-1 border border-neutral-300 rounded-3xl"
            key={course.id}
          >
            <figure
              className={`w-3 h-3 rounded-full bg-[${course.color}]`}
            ></figure>
            {course.name}
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Courses
