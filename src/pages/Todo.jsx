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
                        <td class='text-break p-2 m-5' style={{backgroundColor: '#F6C6EA', width: '40%'}}>{todo.name}</td>
                        <td class='text-break p-2 m-5' style={{backgroundColor: '#F6DFEB', width: '40%'}}>{todo.thought}</td>
                        <td class='p-2 text-center' style={{backgroundColor: '#FDEFEF'}}>{todo.date}</td>
                    </tr>
                </table>
        </div>
    )
}

export default Todo
