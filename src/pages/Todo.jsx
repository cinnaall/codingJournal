import React from 'react'

function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
                <table class='table bg-light shadow-sm'>
                    <tr>
                        <td class='p-2'><input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/></td>
                        <td class='text-break p-2 m-5 w-75'>{todo.name}</td>
                        <td class='p-2 text-center'>{todo.date}</td>
                    </tr>
                </table>
        </div>
    )
}

export default Todo
