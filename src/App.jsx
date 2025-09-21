import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Button from "./Button"
import Card from "./Card"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {
  return(
    <>
    <Header />
    <Food /> 
    <Card />
    <Student name = "Toni" age ="25" isStudent = {true} />
    <Student name = "rupendra" age ="24" isStudent = {true} />
    <Button />
    <UserGreeting isLoggedIn={true} username="Toni" />
    <Footer />


    </>
  )
}

export default App
