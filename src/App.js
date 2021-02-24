
import React,{useState} from 'react'
import { isEmpty } from 'lodash'




function App() {
  const [namePet, setNamePet] = useState(null)
  const [type, setType] = useState(null)
  const [race, setRace] = useState(null)
  const [date, setDate] = useState(null)
  const [nameOwner, setNameOwner] = useState(null)
  const [phone, setPhone] = useState(null)
  const [address, setAddress] = useState(null)
  const [email, setEmail] = useState(null)

  const addData= (e) => {
    e.preventDefault()

    if(isEmpty(namePet) && isEmpty(type) && isEmpty(type) && isEmpty(race) && isEmpty(date) && isEmpty(nameOwner) 
    && isEmpty(phone) && isEmpty(address) && isEmpty(email) ) {
    
    console.log("not all data is full")
    return
  }

  console.log("Ok")
  
  setNamePet(null)
  setType(null)
  setRace(null)
  setDate(null)
  setNameOwner(null)
  setPhone(null)
  setAddress(null)
  setEmail(null)
  
  }

  return (
   <div className="container mt-5">
     <h1 className="text-center">Pet Information</h1>
     <hr/>


     <div className="row">
       <div className="col-8">
         <h4 className="text-center" >Patients List</h4>
         <ul className="list-group">
         <li className="list-group-item" >
           <span className="lead"> Pets Data  </span>

           <button className="btn btn-warning btn-sm float-right"> Edit </button>
           <button className="btn btn-danger btn-sm float-right mx-2" > Delete </button>
         </li>

         </ul>



       </div>


       <div className="col-4">
       <h4 className="text-center"> Patients Data </h4>

       <form onSubmit={addData}>

       <input 
         type="text"
         className="form-control mb-2"
         placeholder="Nombre de la mascota"
         onChange={(text) => setNamePet(text.target.value)}
         value={namePet}
         />

         <input 
         type="text"
         className="form-control mb-2"
         placeholder="Tipo de la mascota"
         onChange={(text) => setType(text.target.value)}
         />

         <input 
         type="text"
         className="form-control mb-2"
         placeholder="Ingrese raza de la mascota"
         />
         
         

        <h6>Ingrese fecha de nacimiento de la mascota </h6>
        <input 
         type="date"
         className="form-control mb-2"
         />

         <input 
         type="text"
         className="form-control mb-2"
         placeholder="Ingrese Nombre completo del propietario"
         />

         <input 
         type="number"
         className="form-control mb-2"
         placeholder="Ingrese Telefono del propietario"
         />
         
        <input 
         type="text"
         className="form-control mb-2"
         placeholder="Ingrese direccion del propietario"
         />

        <input 
         type="text"
         className="form-control mb-2"
         placeholder="Ingrese Email del propietario"
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
