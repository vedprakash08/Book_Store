import { BrowserRouter, HashRouter,Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Books from "./component/Books"
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"
import AddStudent from "./component/AddStudent"
import Logout from "./component/Logout"
import { useEffect,useState } from "react"
import axios from "axios"
import AddBook from "./component/AddBook"
import EditBook from "./component/EditBook"
import DeleteBook from "./component/DeleteBook"
function App() {
  const [role,setRole]=useState('')

  axios.defaults.withCredentials=true;
  useEffect(()=>{
    // axios.get('http://localhost:3001/auth/verify')
    axios.get('https://book-store-38cl.onrender.com/auth/verify')
    .then(res=>{
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole('')
      }
      console.log(res)
    }).catch(err=>console.log(err))
  },[])

  return (
    <HashRouter>
      <Navbar role={role}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books role={role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole}/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole}/>}></Route>
        <Route path="/addbook" element={<AddBook />}></Route>
        <Route path="/book/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<DeleteBook />}></Route>
      </Routes>

    </HashRouter>
  )
}

export default App
