

function TodoItem({ todo, isEditing, editText, onToggle, onEditStart, onEditSave, onEditCancel, onDelete, setEditText }) {
  return (
    <div
      className={`flex items-center justify-between bg-green-50 rounded-xl px-4 py-2 shadow-sm transition-all duration-200 ${todo.completed ? 'opacity-60' : 'hover:shadow-md'} group`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="accent-green-500 h-5 w-5 cursor-pointer"
        />
        {isEditing ? (
          <input
            className="border rounded p-1 w-40 focus:outline-none focus:ring-2 focus:ring-green-300"
            value={editText}
            onChange={e => setEditText(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') onEditSave(); if (e.key === 'Escape') onEditCancel(); }}
            autoFocus
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} transition-all`}>{todo.text}</span>
        )}
      </div>
      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <>
            <button className="text-green-500 hover:text-green-700 font-semibold px-2" onClick={onEditSave}>Save</button>
            <button className="text-gray-400 hover:text-gray-600 font-semibold px-2" onClick={onEditCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="text-blue-500 hover:text-blue-700 font-semibold px-2" onClick={onEditStart}>Edit</button>
            <button className="text-red-500 hover:text-red-700 font-semibold px-2" onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem; 