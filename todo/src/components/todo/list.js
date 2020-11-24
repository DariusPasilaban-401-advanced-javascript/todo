import React from 'react';

// class TodoList extends React.Component {

function TodoList({list, handleComplete}){

  // render() {
    return (
      <ul>
        {list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  // }
}

export default TodoList;