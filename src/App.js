
import React,{useState} from 'react'
import { isEmpty } from 'lodash'




function App() {
  const [datapet,setDatapet] = useState({namePet:"",type:"",race:"",date:"", nameOwner:"", phone:"",address:"",email:"" })
  

  const addData= (e) => {
    e.preventDefault()

    if(isEmpty(datapet)  ) {
    
    console.log("Not all data is full")
    return
  }

  console.log("Ok")
  setDatapet({namePet:"",type:"",race:"",date:"", nameOwner:"", phone:"",address:"",email:""})
  
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
         onChange={(text) => setDatapet(text.target.value)}
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
         onChange={(text) => setDatapet(text.target.value)}
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
