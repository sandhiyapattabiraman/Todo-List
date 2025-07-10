import { Plus } from 'lucide-react';
import '../App.css'

function TodoInput({ value, onChange, onAdd, placeholder }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={e => { if (e.key === 'Enter') onAdd() }}
        placeholder={placeholder || 'Add a new task...'}
        className="flex-1 px-4 py-2 rounded-l-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-green-50 text-gray-700 shadow-sm"
      />
      <button
        className="h-10 w-10 bg-green-500 hover:bg-green-600 transition rounded-full flex items-center justify-center shadow-lg text-white text-xl focus:outline-none focus:ring-2 focus:ring-green-300 -ml-4 z-10"
        onClick={onAdd}
        aria-label="Add task"
      >
        <Plus/>
      </button>
    </div>
  )
}

export default TodoInput;