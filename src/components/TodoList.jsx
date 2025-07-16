import TodoItem from './TodoItem'

function TodoList({ todos, editId, editText, onToggle, onEditStart, onEditSave, onEditCancel, onDelete, setEditText }) {
  return (
    <div className="w-full flex flex-col gap-2 mt-2 overflow-y-auto" style={{ flex: 1, minHeight: 0 }}>
      {todos.length === 0 && <div className="text-gray-400 text-center py-8">No tasks yet</div>}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editId === todo.id}
          editText={editText}
          onToggle={() => onToggle(todo.id)}
          onEditStart={() => onEditStart(todo.id, todo.text)}
          onEditSave={() => onEditSave(todo.id)}
          onEditCancel={onEditCancel}
          onDelete={() => onDelete(todo.id)}
          setEditText={setEditText}
        />
      ))}
    </div>
  )
}

export default TodoList; 