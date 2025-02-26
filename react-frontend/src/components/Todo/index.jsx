import React from 'react'
function Todo(){
    return(
    <>
        <div class="todo-list">
            <div class="container">
                <div class="search-bar">
                    <input type="search" class="search-input"></input>
                </div>
                <button class="addButton">add</button>
            </div>
            <h2>Todo Tasks</h2>
        </div>
        </>
    );
}
export default Todo