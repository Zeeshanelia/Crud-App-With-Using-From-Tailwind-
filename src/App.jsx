import 'remixicon/fonts/remixicon.css'
import './App.css'
import { useState } from 'react'
export default function App() {
  const [open, setOpen] = useState(-320)
  const [form, setFrom] = useState({
    fullname: '',
    class: '',
    roll: '',
    subject: '',
    dob: " "
  })

  const HandleDrower = () => {
    setOpen(0)
  }
  const handleInput = (e) => {
    const input = e.target
    console.log(input.value) // value of input
    const value = input.value
    const key = input.name
    // console.log(input.name) // name of input  
    setFrom({
      [key] : value
    })
  }
  return (<>

    <div className='min-h-32  '>
      <div className='w-9/12 bg-gray-300 shadow-lg mx-auto p-4'>
        <h1 className="text-center  text-xl font-bold  ">
          Crud App With Using From !
        </h1>
        <button onClick={HandleDrower} className=' text-bold bg-orange-500 m-4 p-1 rounded font-bold'> <i className="ri-shield-user-fill"></i> New Student </button>

        <table className='w'>
          <thead>
            <tr>
              <th> Stduent No. </th>
              <th> Name Of Stduent  </th>
              <th> Subject </th>
              <th> Class </th>
              <th> Roll No. </th>
              <th> D.O.B </th>
              <th> Action </th>
            </tr>

           
          </thead>
        </table>
      </div>

      <aside className='fixed text-bold top-0  w-[20rem] bg-orange-500 h-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] box-border p-4 transition-all duration-300 p-2 ' style={{ right: open }} >
        <button onClick={() => setOpen(-320)} className='absolute top-2 right-4'> <i className="h-10 ri-close-circle-fill"></i>
        </button>
        <h1 className='text-bold font-medium' > Student Data  </h1>
        <form className='flex flex-col mt-10 gap-6 '>
          <input
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='fullname'
            type="text"
            placeholder='Enter Your Full Name'

          />
          <input
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='class'
            type="number"
            placeholder='Enter Your Class'
          />

          <input
            onChange={handleInput}
            required
            className='rounded p-2 text-center'
            name='roll'
            type="number"

            placeholder='Enter Your Roll Number'
          />

          <input
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
        </form>
        <button className='font-bold rounded p-2 text-cente bg-blue-500 w-full  mt-5' > Submit </button>
      </aside>
    </div>
  </>
  )
}