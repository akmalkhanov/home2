import { IoAddCircleOutline } from "react-icons/io5";
import Todo from "../todo/Todo";

export default function Home() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-medium mt-12">Upcoming</h2>
        <div className="w-[1080px] h-[290px] border-2 mt-6 rounded-3xl">
          <h3 className="text-3xl p-6">Today</h3>
          {/* <button className="flex items-center py-2 w-[1000px] border-2 ml-6 text-lg font-semibold pl-2 gap-2 rounded-xl">
            <IoAddCircleOutline />  
            Add new task
          </button>
          <div>
            <ul>
              <li className="flex items-center ml-6 border-b-2 w-[1000px] gap-4 py-2">
                <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                <p>Database create for company</p>
              </li>
              <li className="flex items-center ml-6 border-b-2 w-[1000px] gap-4 py-2">
                <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                <p>Website templates</p>
              </li>
              <li className="flex items-center ml-6 border-b-2 w-[1000px] gap-4 py-2">
                <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                <p>Meet work team</p>
              </li>
            </ul>
          </div> */}
          <Todo />
        </div>

          <div className="flex">
            <div className="w-[500px] h-[250px] border-2 mt-6 rounded-3xl">
            <h3 className="text-3xl p-6">Tomorrow</h3>
            <button className="flex items-center py-2 w-[440px] border-2 ml-6 text-lg font-semibold pl-2 gap-2 rounded-xl">
              <IoAddCircleOutline />  
              Add new task
            </button>
            <div>
            <ul>
              <li className="flex items-center border-b-2 w-[440px] ml-6 gap-4 py-2">
                <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                <p>Work team</p>
              </li>
              <li className="flex items-center border-b-2 w-[440px] ml-6 gap-4 py-2">
                <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                <p>Job Interview</p>
              </li>
            </ul>
          </div>
        </div>

            <div className="w-[500px] h-[250px] border-2 ml-20 mt-6 rounded-3xl">
              <h3 className="text-3xl p-6">This Week</h3>
              <button className="flex items-center py-2 w-[440px] border-2 ml-6 text-lg font-semibold pl-2 gap-2 rounded-xl">
                <IoAddCircleOutline />  
                Add new task
              </button>
              <div>
                <ul>
                  <li className="flex items-center border-b-2 w-[440px] ml-6 gap-4 py-2">
                    <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                    <p>Work team</p>
                  </li>
                  <li className="flex items-center border-b-2 w-[440px] ml-6 gap-4 py-2">
                    <input type="checkbox" className="w-4 h-4 border-2 ml-[10px]" />
                    <p>Job Interview</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
