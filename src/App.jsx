import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
// import Button from './Button/Button.jsx';
import Student from './Props/Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import SecondList from './SecondList.jsx';
import Button from './Button.jsx';
import MyComponent from './MyComponent.jsx';





function App() {
  const hxh = [
    {id:1, name:'gon', power:'green',},
    {id:2, name:'killua', power:'blue',},
    {id:3, name:'hisoka', power:'hotpink',},
    {id:4, name:'illumi', power:'yellow',},
  ]
  const hxh1 = [
    {id:1, name:'gon_imgone', power:'green',},
    {id:2, name:'killua', power:'blue',},
    {id:3, name:'hisoka', power:'hotpink',},
    {id:4, name:'illumi', power:'yellow',},
  ]
    return (
      <>


        {/* <Header/>
        <Card/> */}
        {/* <Food/> */}
        {/* <Footer/> */}
        {/* <Button/>
        <Student name='Siham' age = {23} isStudent = {true} />
        <UserGreeting isLoggedIn = {true}  /> */}
        


        
        <List/>
        <SecondList items = {hxh} />
        <SecondList items = {hxh1} />
        <Button/>
        <MyComponent/>

        
      </>
      
    )
}

export default App
