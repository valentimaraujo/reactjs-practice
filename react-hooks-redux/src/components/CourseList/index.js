import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function CourseList () {
  const [qty, setQty] = useState(2);
  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSE', title: 'Add Course!' })
  };

  const upQty = () => {
    const sum = qty + 1;
    setQty(sum);
  };

  return (
    <>
      <ul>
        {courses.map(course => <li key={Math.floor(Math.random() * 100000)}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>
        Add Course
      </button>

      <button type="button" onClick={upQty}>
        Up qty {qty}
      </button>
    </>
  )
}
