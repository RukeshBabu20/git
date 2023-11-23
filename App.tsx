import React, {useState} from 'react';
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import { employeeType } from './types';
import axios from "axios";

function App() {

  const [data,setData]=useState<employeeType[]>([])

  const handleChange=(data:employeeType)=>{
    setData((prev)=>[...prev,data])
    try{
      const response = axios.post('http://localhost:5000/employee/create', data);
    }catch(err){
      console.log(err);
    }
  }

  const handleEmployeeDelete =  (_id: string) => {
    // setData(oldValues => {
    //   return oldValues.filter(value => !employeeName)
    // })
    try{
      const response = axios.delete(`http://localhost:5000/employee/delete/${_id}`);
      const updatedData = data.filter((item) => item._id !== _id);
      setData(updatedData);
    }catch(err){
      console.log(err);
    }
    
  };


  return (
   <>
   <Header />
   <div className='add'>  
        <AddEmployeeComponent onEmployeChange={handleChange} />
   </div>
   <div className='list'>
        <ListEmployeeComponent employee={data} onEmployeeDelete={handleEmployeeDelete}/>
   </div>
   
   </>
  );
}

export default App;
