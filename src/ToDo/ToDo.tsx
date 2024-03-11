import { useEffect, useState } from "react";
import "./ToDo.css";
import Item from "../Item/Item";

interface ITask {
  id: number;
  task: string;
  due: string;
  completed: boolean;
}

// interface IList {
//   ITask: [];
// }

const ToDo = () => {
  const [toDo, setToDo] = useState<ITask>({
    id: 0,
    task: "",
    due: "",
    completed: false,
  });

  const [list, setList] = useState<ITask[]>([toDo]);

  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    setToDo({ ...toDo, id: toDo.id + 1 });
  };

  useEffect(() => {
    setList([...list, toDo]);
  }, [toDo.id]);

  useEffect(() => {
    setList(list.filter(task => (task.id !== 0)));
  }, []);

  return (
    <>
      <form onSubmit={submitTask} className="input-container">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            <strong>Task</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="What do you need to do?"
            required
            value={toDo.task}
            onChange={(event) => {
              setToDo({ ...toDo, task: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="due" className="form-label">
            <strong>Due</strong>
          </label>
          <input
            type="date"
            className="form-control"
            id="due"
            value={toDo.due}
            onChange={(event) => {
              setToDo({ ...toDo, due: event.target.value });
            }}
          />
        </div>
        <div className="button-container"><button type="submit" className="btn btn-primary" id='submit-btn'>
          Do It!
        </button></div>
      </form>
      {list.map((todo, idx) =>
        todo.completed ? (
          <div className=" accomplished"><form key={idx} className="todo-container">
            <div className="todo-contents">
              <Item task={todo} />
            </div>
            <div className="form-check todo-check">
              <input
                className="form-check-input todo-check-box"
                type="checkbox"
                id="check-complete"
                onChange={(event) =>
                  setList(
                    list.map((task) =>
                      task.id == idx+1
                        ? { ...task, completed: event.target.checked }
                        : task
                    )
                  )
                }
              />
              <label className="form-check-label todo-check-label">
                Completed!
              </label>
            </div>
          </form>
          </div>
        ) : (
          <div className="working">
            <form key={idx} className="todo-container">
        <div className="todo-contents">
          <Item task={todo} />
        </div>
        <div className="form-check todo-check">
          <input
            className="form-check-input todo-check-box"
            type="checkbox"
            id="check-complete"
            onChange={(event) =>
              setList(
                list.map((task) =>
                  task.id == idx+1
                    ? { ...task, completed: event.target.checked }
                    : task
                )
              )
            }
          />
          <label className="form-check-label todo-check-label">
            Completed!
          </label>
        </div>
      </form>
      </div>)
      )}
      {console.log(list)}
    </>
  );
};
export default ToDo;
