import './App.css'
import useRequest from './hooks/useRequest'
import axios from 'axios'

function App() {
   const [todos, loading, error] = useRequest(fetchTodos)

   function fetchTodos() {
      return axios.get(`https://jsonplaceholder.typicode.com/todos`)
   }

   if (loading) {
      return <h1>Идет загрузка...</h1>
   }
   if (error) {
      return <h1> Произошла ошибка</h1>
   }

   return (
      <div className='App'>
         {todos &&
            todos.map((todo) => (
               <div style={{ padding: 30, border: '2px solid black' }} key={todo.id}>
                  {todo.id} . {todo.title}
               </div>
            ))}
      </div>
   )
}

export default App
