import React from 'react' 
import {useState,Fragment,useEffect}  from "react"
import "./data.css";
const Data = () => {

    const getData=()=>{
        let list=localStorage.getItem("lists")

        if(list){
            return JSON.parse(localStorage.getItem("lists"))
        }else{
            return []
        }
    };
    const [contacts, setContacts] = useState(getData());
    const [addFormData, setAddFormData] = useState({
      class:'',
      dept:'',
      coursename:'',
      MaxCourseStrength:'',
      Room:'',
      RoomCapacity:'',
      professor:'',
      start:[],
      end:[],
    });
    
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    

    const newContact = {
      class:addFormData.class,
      dept: addFormData.dept,
      coursename: addFormData.coursename,
      MaxCourseStrength:addFormData.MaxCourseStrength,
      Room:addFormData.Room,
      RoomCapacity: addFormData.RoomCapacity,
      professor: addFormData.professor,
      start: addFormData.start,
      end: addFormData.end,
    
    };
    

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };


  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(contacts))
},[contacts]);
  return (
    <div>

<h2>Create TimeTable</h2>
      <form onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="class"
          required="required"
          placeholder="Enter class #0 1..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="dept"
          required="required"
          placeholder="Enter a dept e.g Math..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="coursename"
          required="required"
          placeholder="Enter coursename..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="MaxCourseStrength"
          required="required"
          placeholder="Enter MaxCourseStrength e.g 336k..."
          onChange={handleAddFormChange}
        />
         
        <input
          type="text"
          name="Room"
          required="required"
          placeholder="Enter Room e.g R1..."
          onChange={handleAddFormChange}
        />
          <input
          type="text"
          name="RoomCapacity"
          required="required"
          placeholder="Enter RoomCapacity e.g 26..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="professor"
          required="required"
          placeholder="Enter professor"
          onChange={handleAddFormChange}
        />


        <input
          type="text"
          name="start"
          required="required"
          placeholder="Enter start Time"
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="end"
          required="required"
          placeholder="Enter End Time"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>





      <table>
          <thead>
            <tr>
            <th>class</th>
              <th>Dept</th>
              <th>Course Name</th>
              <th>MaxCourseStrength</th>
              <th>Room</th>
              <th>Room Capacity</th>
              <th>Professor</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                   <tr>
                        <td>{contact.class}</td>
                        <td>{contact.dept}</td>
                        <td>{contact.coursename}</td>
                        <td>{contact.MaxCourseStrength}</td>
                        <td>{contact.Room}</td>
                        <td>{contact.RoomCapacity}</td>
                        <td>{contact.professor}</td>
                        <td>{contact.start}</td>
                        <td>{contact.end}</td>

                    </tr>
              </Fragment>
            ))}
          </tbody>
        </table>


    </div>
  )
}

export default Data