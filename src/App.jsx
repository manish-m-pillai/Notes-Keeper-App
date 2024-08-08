import "./App.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Note from "./components/note/Note"

function App(){
  return(
    <div className="mclaren-regular">
    <Header />
    <Note />
    <Note />
    <Note />
    <Note />
    <Footer />
    </div>
  )
}

export default App