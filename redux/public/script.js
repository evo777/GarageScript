const submitButton = document.getElementById('submitButton');

const addTodo = (todoTask) => {
  return {
    type: 'ADD_TODO',
    task: todoTask
  };
};

const reducers = Redux.combineReducers({
  todos: (state={todos: []}, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        let newState = state.todos.push(action.task);
        return Object.assign({}, state, {todo: newState});
      default:
        return state;
    }
  }
});

const store = Redux.createStore(reducers);
submitButton.onclick = () => {
  console.log(store.getState().todos);
  const todos = document.getElementById('todos');
  const todoTask = document.getElementById('todo-task').value;
  let string = "";
  store.dispatch({
    type: 'ADD_TODO',
    task: todoTask
  });
  store.getState().todos.todos.forEach((todo) => {
    string += todo;
  });
  todos.innerHTML = string;
};
