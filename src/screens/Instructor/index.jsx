import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInstructorById } from '../../store/instructors/instructors.thunk'

const Instructor = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const { instructor } = useSelector(state => state.instructors)

  useEffect(() => {
    dispatch(fetchInstructorById(userId))
  }, [userId])

  return (
    <div>
      {instructor?.name}
    </div>
  )
}

export default Instructor
