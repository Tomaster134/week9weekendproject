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
    <div className='task-container'>{props.task.completed ? <div className='completed'><span>{props.task.id}. </span><span>{props.task.task} </span><span>{props.task.due}</span></div> : <div><span>{props.task.id}. </span><span>{props.task.task} </span><span>{props.task.due}</span></div>}
    </div>
  )
}
export default Item