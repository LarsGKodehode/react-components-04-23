import { Header } from "./components/Header"
import { EmployeeCard } from "./components/EmployeeCard"
import { Card } from "./components/Card"

function App() {
  return (
    <>
      <h1>Header</h1>
      <Header />
      <hr />

      <h1>Employee Card</h1>
      <EmployeeCard name="Emil" age="30" />
      <EmployeeCard name="Astrid" age="28" />
      <EmployeeCard name="Sindre" age="29" />
      <hr />

      <h1>Section</h1>
      <Card>
        <h1>Hello First Card</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card>
        <h1>Hello Second Card</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <hr />
    </>
  )
}

export default App