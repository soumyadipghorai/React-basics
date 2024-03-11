import Youtube from './Youtube';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
import Click from './Click';
import ProfilePic from './ProfilePic';
import MyComponent from './MyComponent';
import Counter from './Counter'; 
import BootstrapComponent from './BootstrapComponent'
import MyNewComponent from './MyNewComponent';
import ColorPicker from './ColorPicker';
import ToDoList from './ToDoList';
import DigitalClock from './DigitalClock';
import FetchAPI from './FetchAPI';
import Axios from './Axios';

function App() {
  const fruits = [
    {id: 1, name: "apple", cal: 95}, 
    {id: 2, name: "orange", cal : 45}, 
    {id: 3, name: "banana", cal:105}, 
    {id: 4, name: "pineapple", cal: 37}
  ]
  const veggies = [
    {id: 6, name: "apple", cal: 195}, 
    {id: 7, name: "orange", cal : 145}, 
    {id: 8, name: "banana", cal: 5}, 
    {id: 9, name: "pineapple", cal: 137}
  ]
  return (
    <>
      <h1>Hello</h1>
      <Youtube/>
      <Card></Card>
      <Card></Card>
      <BootstrapComponent></BootstrapComponent>
      <Student name="ghorai" age={20} isStudent={true}></Student> 
      <Student name="myself" age={21} isStudent={false}></Student> 
      <Student age={21} isStudent={false}></Student> 
      <UserGreeting isLoggedIn={true} username="Brocode"></UserGreeting>
      <UserGreeting isLoggedIn={false
      } username="Brocode"></UserGreeting>
      {/* props are sent from here to the child element and can be accessed by the child element */}

      {veggies.length > 0 && <List items = {veggies} category="veggies"></List>} 
      {/* // by pass the ternery operator */}
      {fruits.length > 0 ? <List items = {fruits} category="fruits"></List> : null}
      <Click></Click>
      <ProfilePic></ProfilePic>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <MyNewComponent></MyNewComponent>
      <ColorPicker></ColorPicker>
      <ToDoList></ToDoList>
      <DigitalClock></DigitalClock>
      <FetchAPI></FetchAPI>
      <Axios></Axios>
    </>
  );
}

export default App;