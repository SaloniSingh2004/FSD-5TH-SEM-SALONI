import React from 'react'
import Book from './Components/Book'
import './app.css';
import Nav from './Components/Navbar'
function App(){
  return(
    <div>
    <Nav />
    <Routes>
      <Route path='/registration' element={<Registration/>}/>
    </Routes>
      <center>

    <div id="sal">
      <Book />
      <br />
      <Book />
      <br />
      <Book />
    </div>
    </center>
    </div>
  )
}
export default App