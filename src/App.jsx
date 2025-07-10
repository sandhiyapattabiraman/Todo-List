import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEditStart = (id, text) => {
    setEditId(id)
    setEditText(text)
  }

  const handleEditSave = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: editText } : todo))
    setEditId(null)
    setEditText('')
  }

  const handleEditCancel = () => {
    setEditId(null)
    setEditText('')
  }

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6" style={{ height: '540px', maxHeight: '90vh' }}>
        <h1 className="text-3xl font-bold text-center text-green-500 tracking-tight mb-2">Todo List</h1>
        <TodoInput
          value={input}
          onChange={e => setInput(e.target.value)}
          onAdd={handleAdd}
        />
        <TodoList
          todos={todos}
          editId={editId}
          editText={editText}
          onToggle={handleToggleCompleted}
          onEditStart={handleEditStart}
          onEditSave={handleEditSave}
          onEditCancel={handleEditCancel}
          onDelete={handleDelete}
          setEditText={setEditText}
        />
      </div>
    </div>
  )
}

export default App
