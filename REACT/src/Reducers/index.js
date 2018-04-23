const ListItem = ['abc','xyz'];


const ItemReducers = (state = ListItem, action) => {
  switch (action.type) {
      case 'CHANGE_STATUS':
          // return state.map(item => (item.id === action.id ) ? {...item, status: !item.status}: item );
          return [1,2,3]
          console.log('CHANGE_STATUS');
          console.log(action.id);

          case 'ADD_ITEM':
          return [...state, { id: action.id, name: action.name, status: false}];

      case 'DELETE_ITEM':
          return state.filter(item => item.id !== action.id);

      default:
          return state
      }
}

export default ItemReducers