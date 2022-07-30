const empleados = [
  {
    id: 1,
    nombre: "Johana Moreno",
    telefono: "15168321",
  },

  {
    id: 2,
    nombre: "Alexander Rincon",
    telefono: "13513",
  },

  {
    id: 3,
    nombre: "Maximiliano",
    telefono: "145462",
  }
];


const salarios = [
  {
    id: 1,
    salario: "3000000"
  },
  {
    id: 2,
    salario: "5000000"
  },
  {
    id: 3,
    salario: "4500000"
  }
];

const getEmpleado =(id)=>{

  return new Promise((resolved, rejected)=>{

  const empleado = empleados.find(emp => emp.id === id);

  if(empleado){
    setTimeout(()=>{
    resolved(empleado);
    }, 5000);
  }else{
    rejected(`El empleado con Id: ${id} no se encuentra registrado`);
  }
      
  });
  
}
 
getEmpleado(3)
.then(empleado=> console.log(empleado))
.catch(error=> console.log(error));

const getSalario =(id)=>{

  return new Promise((resolved, rejected)=>{

  const salario = salarios.find(sal => sal.id === id);

  if(salario){
    setTimeout(()=>{
    resolved(salario);
    }, 5000);
  }else{
    rejected(`El salario con Id: ${id} no se encuentra registrado`);
  }
      
  });
  
}
 
getSalario(3)
.then(salario=> console.log(salario))
.catch(error=> console.log(error));