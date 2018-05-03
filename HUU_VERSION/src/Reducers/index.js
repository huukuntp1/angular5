const ListTitle = [];


const ItemReducers = (state = ListTitle, action) => {
  switch (action.type) {
      case 'NEW_LIST_TITLE':
        return [...state, { id: action.id, title: action.title, status: false}];

      case 'CURRENT_DATA':
        return action.currentData

      case 'CHANGE_STATUS_NEW':
        return state.map( item => {
          return (item.id === action.id) ?  {...item, status: !item.status} : item
        })

      case 'DELETE_ITEM':
        return state.filter(item => item.id !== action.id);

      default:
        return state
      }
}

export default ItemReducers