import faker from '@faker-js/faker';
import { todosReducer } from './todos-reducer';

describe('todosReducer errors', () => {
  test('state is not an array', () => {
    const state = {};
    const action = { type: 'ADD', payload: { text: '' } };
    expect(() => {
      todosReducer(state, action);
    }).toThrow(/array/i);
  });

  test('unknown action type', () => {
    const state = [];
    const action = { type: 'ABCDEFGH' };
    expect(() => {
      todosReducer(state, action);
    }).toThrow(/type/i);
  });
});

describe('todosReducer action types', () => {
  const initialState = [
    { id: 1, text: faker.lorem.words(), isCompleted: true },
    { id: 2, text: faker.lorem.words(), isCompleted: false },
    { id: 3, text: faker.lorem.words(), isCompleted: false },
    { id: 4, text: faker.lorem.words(), isCompleted: false },
    { id: 5, text: faker.lorem.words(), isCompleted: true },
  ];

  describe('ADD', () => {
    test('normal', () => {
      let state = [...initialState];
      let action = { type: 'ADD', payload: { text: faker.lorem.words() } };
      state = todosReducer(state, action);
      expect(state.length).toEqual(initialState.length + 1);
      expect(state).toEqual(expect.arrayContaining(initialState));
      expect(state.find((item) => item.text === action.payload.text)).not.toBeUndefined();
    });

    test('with empty text', () => {
      let state = [...initialState];
      let action = { type: 'ADD', payload: { text: '' } };
      state = todosReducer(state, action);
      expect(state).toEqual(initialState);
    });
  });

  describe('UPDATE', () => {
    test('all fields', () => {
      let state = [...initialState];
      const itemId = 1;
      let action = {
        type: 'UPDATE',
        payload: {
          id: itemId,
          text: faker.lorem.words(),
          isCompleted: !initialState.find((item) => item.id === itemId).isCompleted,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(
        initialState.map((item) => (item.id === action.payload.id ? action.payload : item))
      );
    });

    test('text only', () => {
      let state = [...initialState];
      const itemId = 1;
      let action = {
        type: 'UPDATE',
        payload: {
          id: itemId,
          text: faker.lorem.words(),
          isCompleted: undefined,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(
        initialState.map((item) =>
          item.id === action.payload.id
            ? {
                id: item.id,
                text: action.payload.text,
                isCompleted: item.isCompleted,
              }
            : item
        )
      );
    });

    test('isCompleted only', () => {
      let state = [...initialState];
      const itemId = 1;
      let action = {
        type: 'UPDATE',
        payload: {
          id: itemId,
          text: '',
          isCompleted: !initialState.find((item) => item.id === itemId).isCompleted,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(
        initialState.map((item) =>
          item.id === action.payload.id
            ? {
                id: item.id,
                text: item.text,
                isCompleted: action.payload.isCompleted,
              }
            : item
        )
      );
    });

    test('with unknown todo id', () => {
      let state = [...initialState];
      let action = {
        type: 'UPDATE',
        payload: {
          id: 9999,
          text: faker.lorem.words(),
          isCompleted: true,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(initialState);
    });

    test('with empty text and undefined isCompleted', () => {
      let state = [...initialState];
      let action = {
        type: 'UPDATE',
        payload: {
          id: 1,
          text: '',
          isCompleted: undefined,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(initialState);
    });
  });

  describe('DELETE', () => {
    test('normal', () => {
      let state = [...initialState];
      let action = {
        type: 'DELETE',
        payload: { id: 1 },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(initialState.filter((item) => item.id !== action.payload.id));
    });

    test('with unknown todo id', () => {
      let state = [...initialState];
      let action = {
        type: 'DELETE',
        payload: {
          id: 9999,
        },
      };
      state = todosReducer(state, action);
      expect(state).toEqual(initialState);
    });
  });

  test('DELETE_COMPLETED', () => {
    let state = [...initialState];
    let action = { type: 'DELETE_COMPLETED' };
    state = todosReducer(state, action);
    expect(state).toEqual(initialState.filter((item) => item.isCompleted !== true));
  });
});
