import "./component/common/common.css";
import Header from "./component/common/Header";
import AddFrm from "./component/todo/AddFrm";
import TodoList from "./component/todo/TodoList";
import { useState } from "react";
function App() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "javascript 복습하기",
      isDone: 1,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "react 복습하기",
      isDone: 0,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "이력서 쓰기",
      isDone: 0,
      isLike: 1,
    },
  ]);

  const changeLike = (todo) => {
    const changeStatus = todo.isLike === 1 ? 0 : 1;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };

  const todoDone = (todo) => {
    todo.isDone = 1;
    setTodoList([...todoList]);
  };

  const addTodo = (todoTitle) => {
    const todo = {
      todoNo: todoNo++,
      todoTitle: todoTitle,
      isDone: 0,
      isLike: 0,
    };
    const newArr = [...todoList];
    newArr.push(todo);
    setTodoList(newArr);
  };

  const deleteTodo = (todoNo, index) => {
    console.log("todoNo : " + todoNo);
    console.log("index : " + index);
    // const newArr = [...todoList];
    //newArr에서 index를 이용해서 해당하는 객체를 삭제 -> DB적용불가
    //newArr.splice(index, 1);
    //newArr에서 todoNo를 이용해서 해당하는 객체를 삭제 -> DB적용가능
    const newArr = todoList.filter((todo) => {
      return todo.todoNo !== todoNo; //todoNo가 일치하지 않으면 배열로 묶어서 리턴
    });
    setTodoList(newArr);
  };

  return (
    <div className="wrap">
      <Header />
      <AddFrm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        changeLike={changeLike}
        todoDone={todoDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
