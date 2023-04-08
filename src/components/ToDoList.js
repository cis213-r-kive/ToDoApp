import React from 'react';

function ToDoList(todos) {
    // code goes here

    return (
        <div>
            {todos.map((item) => (
                <li key={item.id}>
                    <input type="checkbox">
                        {item.title}
                    </input>
                </li>
            ))}
        </div>
    );
}

export default ToDoList;