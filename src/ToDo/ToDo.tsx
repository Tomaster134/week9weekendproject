import { useState } from "react";
import "./ToDo.css";

interface Task{
    id: number,
    task: string,
    due: string
}

const ToDo = () => {
  const [toDo, setToDo] = useState({
    id: 0,
    task: '',
    due: ''
  });

const [list, setList] = useState([toDo])

const submitTask = (event:any) => {
    event.preventDefault()
    setToDo({...toDo, id: toDo.id+1})
    console.log(toDo)
    setList([...list, toDo])
}

  return (
    <>
      <form onSubmit={submitTask}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={toDo.task}
            onChange={(event) => {
              setToDo({...toDo, task: event.target.value});
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="due" className="form-label">
            Due
          </label>
          <input
            type="date"
            className="form-control"
            id="todo"
            value={toDo.due}
            onChange={(event) => {
              setToDo({...toDo, due: event.target.value});
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log Task
        </button>
      </form>
      {console.log(toDo)}
      {console.log(list)}
    </>
  );
};
export default ToDo;
