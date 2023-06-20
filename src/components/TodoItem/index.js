// Write your code here
import './index.css'

const TodoItem = props => {
  const {title, id, deleteBtn} = props

  const delBtn = () => {
    deleteBtn(id)
  }

  return (
    <div>
      <li className="lists">
        <p>{title}</p>
        <button type="button" onClick={delBtn}>
          Delete
        </button>
      </li>
    </div>
  )
}
export default TodoItem
