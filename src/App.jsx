import 'remixicon/fonts/remixicon.css'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [editIndex, setEditIndex] = useState(null)
  const [open, setOpen] = useState(-320)
  const [form, setFrom] = useState({
    fullname: '',
    class: '',
    roll: '',
    subject: '',
    dob: " "
  })

  const [students, setStudents] = useState([])

  const HandleDrower = () => {
    setOpen(0)
  }
  const handleInput = (e) => {
    const input = e.target
    console.log(input.value) // value of input
    const value = input.value
    const key = input.name
    // console.log(input.name) // title name of input  
    setFrom({
      [key]: value
    })
  }

  const studentData = (e) => {
    e.preventDefault()
    setStudents([...students, form])
    setFrom({
      fullname: '',
      class: '',
      roll: '',
      subject: '',
      dob: " "
    })
    setOpen(-320)
  }

  const dltStudent = (index) => {
    const backUpOfStudentArray = [...students]
    backUpOfStudentArray.splice(index, 1)
    setStudents(backUpOfStudentArray)
  }

  const editStudent = (items) => {
    //alert(index)
    setEditIndex(items)
    setOpen(0)
  }

  return (<>

    <div className='md:min-h-32  '>
      <div className='md:w-9/12 bg-gray-300 shadow-lg mx-auto p-4 '>
        <h1 className="text-center  md:text-xl font-bold  ">
          Crud App With Using Form !
        </h1>
        <button onClick={HandleDrower} className=' md:text-bold bg-orange-500 m-4 p-1 rounded font-bold'> <i className="ri-shield-user-fill"></i> New Student </button>

        <table className='w w-full overflow-auto'>
          <thead>
            <tr>
              <th> Stduent No.</th>
              <th> Student Name </th>
              <th> Subject</th>
              <th> Class</th>
              <th> Roll No.</th>
              <th> D.O.B</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((items, index) => (
                <tr key={index} >
                  <td> {index + 1}</td>
                  <td> {items.fullname} </td>
                  <td> {items.subject} </td>
                  <td> {items.class} </td>
                  <td> {items.roll} </td>
                  <td> {items.dob} </td>
                  <td>
                    <div>
                      <button onClick={() => editStudent(items)}  className='bg-slate-400 h-7 w-7 text-xl mr-3'>
                        <i className="ri-edit-box-line"></i>
                      </button>

                      <button onClick={() => dltStudent(index)}  className='bg-pink-700 h-7 w-7 text-xl'>
                        <i className="ri-delete-bin-2-line"></i>
                      </button>
                    </div>

                  </td>
                </tr>

              ))
            }

          </tbody>


        </table>
      </div>

      <aside className='fixed text-bold top-0  w-[20rem] bg-orange-500 h-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] box-border p-4 transition-all duration-300 p-2 ' style={{ right: open }} >
        <button onClick={() => setOpen(-320)} className='absolute top-2 right-4'> <i className="h-10 ri-close-circle-fill"></i>
        </button>
        <h1 className='text-bold font-medium' > Student Data  </h1>
        <form onSubmit={studentData} className='flex flex-col mt-10 gap-6 '>
          <input
            value={form.fullname}
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='fullname'
            type="text"
            placeholder='Enter Your Full Name'

          />
          <input
            value={form.class}
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='class'
            type="number"
            placeholder='Enter Your Class'
          />

          <input
            value={form.roll}
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='roll'
            type="number"

            placeholder='Enter Your Roll Number'
          />

          <input
            value={form.subject}
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='subject'
            type="text"
            placeholder='Enter Your All Subjects'
          />

          <input
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='dob'
            type="date"

          />

          {
            editIndex === null ? 
            <button className='font-bold rounded p-2 text-cente bg-blue-500 w-full  mt-3' > Submit </button>
            :
            <button className='font-bold rounded p-2 text-cente bg-green-500 w-full mb-5 ' > Save Editing </button>
          }
          
        
        </form>
      </aside>
    </div>
  </>
  )
}