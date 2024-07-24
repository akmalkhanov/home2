import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/todoSlice/Index";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";





const App = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    let inputVal = e.target[0].value;
    let todoObj = {
      title: inputVal,
      id: Date.now(),
      checked: false,
    };
    dispatch(addTodo(todoObj));
  };


  return (
    <div>
      <form onSubmit={(e) => submitForm(e)} className="items-center mb-4 ">
        <input
          type="text"
          placeholder="Add new task"
          className="flex items-center placeholder-black py-2 w-[1000px] border-2 ml-6 text-lg font-semibold pl-10 gap-2 rounded-xl"
        />
        <button
          type="submit"
          className="absolute"
        >
          <IoMdAddCircleOutline className="w-4 h-4 -mt-8 ml-10" />

        </button>
      </form>

      <div>
        {state.list.length > 0 ? (
          state.list.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center placeholder-black mt-2 py-2 w-[1000px] border-2 ml-6 text-lg font-semibold pl-10 gap-2 rounded-xl${todo.checked ? "opacity-50" : ""}`}
            >
              {selectedId === todo.id ? (
                <input
                  onChange={(e) => setNewTitle(e.target.value)}
                  type="text"
                  defaultValue={todo.title}
                  className="py-1 px-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
                />
              ) : (
                <p className="flex-1">{todo.title}</p>
              )}
              <div>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  title="Delete"
                  className="text-red-500 hover:text-red-600  mr-8 focus:outline-none"
                >
                  <MdDelete className="w-6 h-6" />
                  
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-blue-500 mt-4"></p>
        )}
      </div>
    </div>
  );
};

export default App;
