import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Row className='border-4 border-bottom'>
          <Col xs={12}><h1>TASK MANAGER APP</h1></Col>
        </Row>
      </Container>
      <Container>
        <Row className='mt-3 border-4 border-bottom'>
          <Col xs={12}><Filters /></Col>
        </Row>
        <Row className='mt-3'>
          <TaskList />
        </Row>
      </Container>
    </>
  )
}

export default App
