import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"
import Button from "./Button"
import Profile from "./Profile"
import MyComponent from "./MyComponent"
import Countere from "./Countere"
import EventHandler from "./EventHandler"
import ColorPicker from "./ColorPicker"


function App() {

const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "grapes", calories: 37 }
  ];

  const vegetables = [
    { id: 5, name: "kira", calories: 85 },
    { id: 6, name: "tomato", calories: 65 },
    { id: 7, name: "carrot", calories: 115 },
    { id: 8, name: "capsicum", calories: 47 }
  ];

  return(
    <>
    <Header />
    <Food /> 
    <Card />
    <Student name = "Toni" age ="25" isStudent = {true} />
    <Student name = "rupendra" age ="24" isStudent = {true} />
    <Button />
    <ColorPicker />
    <EventHandler />
    <Profile />
    <MyComponent />
    <Countere />


     {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

    <UserGreeting isLoggedIn={true} username="Toni" />
    <Footer />


    </>
  )
}

export default App
