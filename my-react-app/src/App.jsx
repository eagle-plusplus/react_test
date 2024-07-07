import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx"
import Card from "./card.jsx"
import Button from "./Button/button.jsx"
import Greating from "./Greating.jsx"
import List from './List.jsx'
import Component from "./Component.jsx"

function App() {
  return(
    <>
      <Header></Header>
      <Greating isl={false} user="giannis"></Greating>
      <Food></Food>
      <Card name="Ektoras" age="aaaa" is={true}></Card>
      <Card></Card>
      <Button></Button>
      <Footer></Footer>
      <List></List>
      <Component></Component>
    </>
  )
}

export default App
