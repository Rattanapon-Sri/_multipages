import { useEffect, useState } from 'react';
import { fetchTodos } from "../../data/todos";

import "./Todo.css";

function Todo() {
  const [todosRaw, setTodosRaw] = useState([]);

  useEffect (() =>  {
    setTodosRaw(fetchTodos());
  }, []); //load เท่านั้น

  useEffect (() => {
    console.log(todosRaw);
  }, [todosRaw]); //load *** bypass fjlters ***

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
          />
          <label
            className='form-check-label'
            htmlFor='flexSwitchCheckChecked'
          >
            Show Only waiting
          </label>
        </div>

        <select
          className='form-select'
          aria-label='Default select example'
          style={{ width: "200px" }}
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
          <tr>
            <td>
              <span className='badge bg-secondary'>1</span>
            </td>
            <td style={{ textAlign: "left" }}>ตั้งใจเรียน</td>
            <td style={{ textAlign: "right" }}>
              <span className='badge bg-warning'>
                waiting&nbsp;<span className='bi bi-clock'></span>
              </span>
              &nbsp;
              <button className='btn btn-danger'>
                <span className='bi bi-trash'></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* page control */}
    </div>
  );
}

export default Todo;
