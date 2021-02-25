
import React,{useState} from 'react'
import {isEmpty,size} from 'lodash'
import shortid from 'shortid'

function App() {
  const [datapet,setDatapet] = 
  useState({namePet:'',type:'',race:'',date:'', nameOwner:'', phone:'',address:'',email:'' })

  const voidDatas = () => { return {namePet:"",type:"",race:"",date:"", nameOwner:"", phone:"",address:"",email:"", }}

  const [registers, setResgisters] = useState([])


  const addData = (e) => 
  {
    e.preventDefault()

    if( isEmpty(datapet))
     {

    console.log("Not all data is full")
    return 
 
 }

    const newData ={
      id: shortid.generate(),
      Information:datapet
      
    }

    setResgisters([...registers, newData])

    setDatapet(voidDatas())
 
  }

const deleteData = (id) => {

  const filteredRegister = registers.filter(datapet => datapet.id !== id)
  setResgisters(filteredRegister)

}


  return (
   <div className="container mt-5">
     <h1 className="text-center">Pet Information</h1>
     <hr/>


     <div className="row">
       <div className="col-8">
         <h4 className="text-center" >Patients List</h4>

         {
           size(registers) == 0 ?(

            <h3 className="text-center">no records </h3>

            ) : (
              <ul className="list-group">
              {
                registers.map((datapet)=> (
   
                <li className="list-group-item"  key={datapet.id}>
                <span className="lead"> {datapet.Information}
                 </span>
     
     
                <button 
                className="btn btn-danger btn-sm float-right mx-2"
                onClick={()=> deleteData(datapet.id)}
                
                
                > Delete </button>
   
   
   
                <button className="btn btn-warning btn-sm float-right"> Edit </button>
                
              </li>
              ))
   
              }
   
            </ul>
            )
  
       } 
       </div>


       <div className="col-4">
       <h4 className="text-center"> Patients Data </h4>
       <hr/>

       <form onSubmit={addData}>

       <h6>Ingrese nombre de la mascota  </h6>
       <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.namePet}
         />
         <h6>Ingrese tipo de animal de la mascota  </h6>
         <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.type}
         />

        <h6>Ingrese raza de la mascota </h6>
         <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.race}
         />
         
         

        <h6>Ingrese fecha de nacimiento de la mascota </h6>
        <input 
         type="date"
         className="form-control mb-4"
         onChange={(date) => setDatapet(date.target.value)}
         value={datapet.date}
         />

         <h6>Ingrese nombre completo del propietario</h6>
         <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.nameOwner}
         />

        <h6>Ingrese telefono del propietario</h6>
         <input 
         type="number"
         className="form-control mb-4"
         onChange={(number) => setDatapet(number.target.value)}
         value={datapet.phone}
         />

         <h6>Ingrese direccion del propietario</h6>
        <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.address}
         />

        <h6>Ingrese Email del propietario  </h6>
        <input 
         type="text"
         className="form-control mb-4"
         onChange={(text) => setDatapet(text.target.value)}
         value={datapet.email}
         />
         
         <button
          className="btn btn-dark btn-block"
          type="submit"
          >
           Send Data
         </button>

       </form>

       </div>


       
     </div>
   </div>
  )
}


export default App
