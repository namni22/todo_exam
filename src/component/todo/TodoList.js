import "./todoList.css";
function TodoList(props) {
  const todoList = props.todoList;
  const changeLike = props.changeLike;
  const todoDone = props.todoDone;
  const deleteTodo = props.deleteTodo;
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={"todo" + index}
            todo={todo}
            changeLike={changeLike}
            todoDone={todoDone}
            deleteTodo={deleteTodo}
            index={index}
          />
        );
      })}
    </ul>
  );
}

function Todo(props) {
  const todo = props.todo;
  const changeLike = props.changeLike;
  const todoDone = props.todoDone;
  const deleteTodo = props.deleteTodo;
  const index = props.index;
  return (
    <li>
      <Like todo={todo} changeLike={changeLike} />
      <div className="todo-title">
        {todo.isDone === 0 ? (
          <span>{todo.todoTitle}</span>
        ) : (
          <span className="done-text">{todo.todoTitle}</span>
        )}
      </div>
      <div className="is-done">
        <Done todo={todo} todoDone={todoDone} />
        <Delete todoNo={todo.todoNo} deleteTodo={deleteTodo} index={index} />
      </div>
    </li>
  );
}

function Like(props) {
  const todo = props.todo;
  const changeLike = props.changeLike;
  return (
    <div className="is-like">
      <span
        className="material-icons"
        onClick={() => {
          changeLike(todo);
        }}
      >
        {todo.isLike === 1 ? "favorite" : "favorite_border"}
      </span>
    </div>
  );
}

function Done(props) {
  const todo = props.todo;
  const todoDone = props.todoDone;
  return (
    <>
      {todo.isDone === 0 ? (
        <span
          className="material-icons"
          onClick={() => {
            todoDone(todo);
          }}
        >
          task_alt
        </span>
      ) : (
        ""
      )}
    </>
  );
}

function Delete(props) {
  const todoNo = props.todoNo;
  const deleteTodo = props.deleteTodo;
  const index = props.index;
  return (
    <span
      className="material-icons remove"
      onClick={() => {
        deleteTodo(todoNo, index);
      }}
    >
      highlight_off
    </span>
  );
}
export default TodoList;
