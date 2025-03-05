import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className="mypokedex">
        <Link to={"/"}>
          MyPokeDex
        </Link>
      </h1>
      <CustomRoutes />
    </>
  )
}

export default App
