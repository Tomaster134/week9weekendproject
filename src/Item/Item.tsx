import './Item.css'

interface IProps {
    task: {
    id: number;
    task: string;
    due: string;
    completed: boolean
    }}

const Item = (props: IProps) => {
  return (
    <div className='task-container'>{props.task.completed ? <div className='completed'><div><span>{props.task.id}. </span><span className="task-todo">{props.task.task} </span></div><span>Finish By: <strong>{props.task.due}</strong></span></div> : <div className='in-progress'><div><span>{props.task.id}. </span><span>{props.task.task} </span></div><span>Finish By: <strong>{props.task.due}</strong></span></div>}
    </div>
  )
}
export default Item