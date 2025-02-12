
import 'remixicon/fonts/remixicon.css'
import './App.css'

import { useState } from 'react'


export default function App() {
  // Initial data structure for a student (to reset when a new student is added or when editing)
  const ModelObjectData = {
    fullname: '',
    class: '',
    roll: '',
    subject: '',
    dob: ""
  }

  // useState hooks to manage various states
  const [editIndex, setEditIndex] = useState(null) // Track which student is being edited (null means no student is being edited)
  const [open, setOpen] = useState(-320) // Controls the drawer position (initially hidden off-screen)
  const [students, setStudents] = useState([]) // Stores all students' data
  const [form, setFrom] = useState(ModelObjectData) // Stores the current form data

  // Function to open the drawer by setting 'open' state to 0 (drawer becomes visible)
  const HandleDrower = () => {
    setOpen(0)
  }

  // Handles input field changes, updates the 'form' state with new values
  const handleInput = (e) => {
    const input = e.target // Get the input field element
    console.log(input.value) //  value of input field Log the input value to the console (for debugging)
  
    const value = input.value // Value entered in the input field
    const key = input.name 
        // console.log(input.name) // title name of input  
        // Merge the previous form state and only update the changed field
    // Name attribute of the input field (used to identify which field is being edited)
    
    // Update the 'form' state with the new value for the corresponding key
    setFrom(prevState => ({
      ...prevState, // Spread the previous state
      [key]: value // Update the specific field based on the input's name
    }));
  }

  // Function to handle form submission for adding a new student
  const studentData = (e) => {
    e.preventDefault() // Prevent default form submission behavior (page reload)
    setStudents([...students, form]) // Add the current form data to the students array
    setFrom(ModelObjectData) // Reset the form back to the initial state
    setOpen(-320) // Close the drawer by moving it off-screen
  }

  // Function to delete a student at a specified index
  const dltStudent = (index) => {
    const backUpOfStudentArray = [...students] // Create a backup of the students array
    backUpOfStudentArray.splice(index, 1) // Remove the student at the specified index
    setStudents(backUpOfStudentArray) // Update the students array after deletion
  }

  // Function to enable editing mode for a student at a specified index
  const editStudent = (index) => {
      //alert(index)      
    setOpen(0); // Open the drawer to allow editing
    setFrom(students[index]); // Set the form data to the student at the given index (so it can be edited)
    setEditIndex(index); // Set the edit index to track which student is being edited
  };

  // Function to save changes made to a student's data (during editing)
  const SaveEditingStudent = (e) => {
    e.preventDefault() // Prevent default form submission behavior
       // alert("0")     
    const backUpOfStudentData = [...students]; // Backup the current students array
    backUpOfStudentData[editIndex] = form; // Update the student data at the edit index with the new form data
    setStudents(backUpOfStudentData); // Update the students array with the edited data
    setFrom(ModelObjectData); // Reset the form to its initial state
    setEditIndex(null); // Reset the edit index since we're no longer editing
    setOpen(-320); // Close the drawer after saving
  }

  // Function to close the drawer without saving changes
  const closeDrower = () => {
    setFrom(ModelObjectData) // Reset the form state
    setEditIndex(null) // Reset the edit index
    setOpen(-320) // Close the drawer
  }

  // JSX structure to render the app
  return (
    <>
      {/* Main container for the app */}
      <div className='md:min-h-32'>
        {/* Main content area, centered with padding and background */}
        <div className='md:w-9/12 bg-gray-300 shadow-lg mx-auto p-4 '>
          {/* Header */}
          <h1 className="text-center md:text-xl font-bold">
            Crud App With Using Form !
          </h1>
          {/* Button to open the drawer for adding a new student */}
          <button onClick={HandleDrower} className=' bg-orange-500 m-4 p-1 rounded font-bold'>
            <i className="ri-shield-user-fill"></i> New Student
          </button>

          {/* Table to display all students */}
          <table className='w  w-full overflow-auto'>
            <thead>
              {/* Table headers */}
              <tr>
                <th>Student No.</th>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Roll No.</th>
                <th>D.O.B</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping through all students and rendering their data in table rows */}
              {
                students.map((items, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.fullname}</td>
                    <td>{items.subject}</td>
                    <td>{items.class}</td>
                    <td>{items.roll}</td>
                    <td>{items.dob}</td>
                    <td>

                      {/* Edit and Delete buttons */}
                      <div>
                        <button onClick={() => editStudent(index)} className='bg-slate-400 md:h-7 w-7 text-xl mr-3'>
                          <i className="ri-edit-box-line"></i>
                        </button>

                        <button onClick={() => dltStudent(index)} className='bg-pink-700 h-7 w-7 text-xl'>
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

        {/* The drawer for adding or editing student data */}

        <aside className='fixed text-bold top-0 w-[20rem] bg-orange-500 h-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] box-border p-4 transition-all duration-300 p-2 ' style={{ right: open }}>
          
          {/* Close button for the drawer */}

          <button onClick={closeDrower} className='absolute top-2 right-4'>
            <i className="h-10 ri-close-circle-fill"></i>
          </button>

          {/* Drawer header */}
          <h1 className='text-bold font-medium'>Student Data</h1>

          {/* Form for adding/editing student data */}
          <form onSubmit={editIndex === null ? studentData : SaveEditingStudent} className='flex flex-col mt-10 gap-6 '>
          
            {/* Input fields for student data */}
            <input value={form?.fullname} onChange={handleInput} required className='rounded p-2 text-center' name='fullname' type="text" placeholder='Enter Your Full Name' />
            <input value={form?.class} onChange={handleInput} required className='rounded p-2 text-center' name='class' type="number" placeholder='Enter Your Class' />
            <input value={form?.roll} onChange={handleInput} required className='rounded p-2 text-center' name='roll' type="number" placeholder='Enter Your Roll Number' />
            <input value={form?.subject} onChange={handleInput} required className='rounded p-2 text-center' name='subject' type="text" placeholder='Enter Your All Subjects' />
            <input     onChange={handleInput} required 
            className='rounded p-2 text-center' name='dob' type="date" />

            {/*Submit button(changes based on whether it's adding or editing) */}


            {  editIndex === null ?
                <button className='font-bold rounded p-2 text-cente bg-blue-500 w-full mt-3'>Submit</button>
                :
                <button className='font-bold rounded p-2 text-cente bg-green-500 w-full mb-5'>Save Editing</button>
            }
            
          </form>
        </aside>
      </div>
    </>
  )
}
