import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Container, ToDoList, Input, Button, ListItem, Ok, Trash, StatusOk, StatusPendente } from './styles'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueinoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    } else {
      alert('Digite uma tarefa!!!')
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }
  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (

    <Container>
      <h1>Lista de tarefas</h1>
      <Input onChange={inputMudou} placeholder="Qual tarefa deseja adicionar?" />
      <Button onClick={cliqueinoBotao}>Adicionar</Button>

      <ToDoList>
        <ul>
          {list.length > 0 ? ( 
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Ok onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
          <StatusPendente>Tarefa pendente</StatusPendente><StatusOk>Tarefa concluida</StatusOk>
        </ul>
      </ToDoList>
    </Container >

  )
}

export default App
