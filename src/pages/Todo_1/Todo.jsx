import { useEffect, useState } from "react";
import { fetchTodos } from "../../data/todos";

import "./Todo.css";



function Todo() {
  //todoRaw -> filters -> todos -> display
  //todosRaw
  const [todosRaw, setTodosRaw] = useState([]);
  //filters
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  //todos
  const [todos, setTodos] = useState([]);
  //display
  const [numPages, setNumPages] = useState(1);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    console.log(`curPage: ${curPage}`);
  }, [curPage]);

  useEffect(() => {
    console.log(`itemsPerPage: ${itemsPerPage}`);
    setNumPages(Math.ceil(todosRaw.length / itemsPerPage));
    setCurPage(1);
  }, [itemsPerPage, todosRaw]);

  useEffect(() => {
    console.log(`onlyWaiting: ${onlyWaiting}`);
  }, [onlyWaiting]);

  useEffect(() => {
    setTodosRaw(fetchTodos());
    setCurPage(1);
  }, []); //load เท่านั้น

  useEffect(() => {
    if (onlyWaiting) {
      setTodos(todosRaw.filter((todo) => !todo.completed));
    } else {
      //show all
      setTodos(todosRaw);
    }
  }, [todosRaw, onlyWaiting, itemsPerPage]); //

  return (
    <div className='todo-container'>
      {/* filters */}
      <div className='to-filters-container'>
        <div className='form-check form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            role='switch'
            id='flexSwitchCheckChecked'
            // checked
            onClick={(e) => {
              setOnlyWaiting(e.target.checked);
            }}
          />
          <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
            Show Only waiting
          </label>
        </div>

        <select
          className='form-select'
          aria-label='Default select example'
          style={{ width: "200px" }}
          onChange={(e) => {
            setItemsPerPage(e.target.value);
          }}
        >
          <option value={5}>5 items per pages</option>
          <option value={10}>10 items per pages</option>
          <option value={50}>50 items per pages</option>
          <option value={100}>100 items per pages</option>
        </select>
      </div>

      {/* table */}
      <table className='table table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th style={{ textAlign: "right" }}>Completed</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>
                  <span className='badge bg-secondary'>{todo.id}</span>
                </td>
                <td style={{ textAlign: "left" }}>{todo.title}</td>
                <td style={{ textAlign: "right" }}>
                  <span
                    className={
                      "badge " + (todo.completed ? "bg-success" : "bg-warning")
                    }
                  >
                    {todo.completed ? "done" : "waiting"}&nbsp;
                    <span
                      className={
                        "bi " + (todo.completed ? "bi-check" : "bi-clock")
                      }
                    ></span>
                  </span>
                  &nbsp;
                  <button className='btn btn-danger'>
                    <span className='bi bi-trash'></span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* page control */}
      <div>
        <button
          className='btn btn-outline-primary todo-space'
          onClick={() => {
            setCurPage(1);
          }}
          disabled={curPage === 1}
        >
          First
        </button>
        <button
          className='btn btn-outline-primary todo-space'
          onClick={() => {
            curPage > 1 && setCurPage(curPage - 1);
          }}
          disabled={curPage <= 1}
        >
          Previous
        </button>
        <span className='todo-space'>
          {curPage}&nbsp;/&nbsp;{numPages}
        </span>
        <button
          className='btn btn-outline-primary todo-space'
          onClick={() => {
            curPage < numPages && setCurPage(curPage + 1);
          }}
          disabled={curPage >= numPages}
        >
          Next
        </button>
        <button
          className='btn btn-outline-primary todo-space'
          onClick={() => {
            setCurPage(numPages);
          }}
          disabled={curPage === numPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
