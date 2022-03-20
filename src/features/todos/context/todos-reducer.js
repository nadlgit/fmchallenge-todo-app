export const todosReducer = (state, action) => {
  if (!Array.isArray(state)) {
    throw new Error("todosReducer's state must be an array");
  }
  let id = action?.payload?.id;
  let text = action?.payload?.text?.trim() ?? '';
  let isCompleted = action?.payload?.isCompleted;
  switch (action?.type) {
    case 'ADD':
      if (text.length === 0) {
        return state;
      }
      id = state.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
      isCompleted = false;
      return [...state, { id, text, isCompleted }];
    case 'UPDATE':
      const shouldUpdateText = text.length > 0;
      const shouldUpdateIsCompleted = typeof isCompleted === 'boolean';
      if (!id || !(shouldUpdateText || shouldUpdateIsCompleted)) {
        return state;
      }
      return state.map((todo) =>
        todo.id === id
          ? {
              id,
              text: shouldUpdateText ? text : todo.text,
              isCompleted: shouldUpdateIsCompleted ? isCompleted : todo.isCompleted,
            }
          : todo
      );
    case 'DELETE':
      if (!id) {
        return state;
      }
      return state.filter((todo) => todo.id !== id);
    case 'DELETE_COMPLETED':
      return state.filter((todo) => todo.isCompleted !== true);
    default:
      throw new Error(`todosReducer's unknown action type: ${action?.type}`);
  }
};
