export const actionAddTitle = ( title, status ) => {
  return {
    type: 'ADD_TITLE',
    title:  title,
    status: status
  }
}

export const actionListTitleNew = ( id, title, status ) => {
  return {
    type: 'NEW_LIST_TITLE',
    id: id,
    title: title,
    status: status
  }
}

export const currentData = ( currentData ) => {
  return {
    type: 'CURRENT_DATA',
    currentData: currentData
  }
}

export const actionChangeStatus = (id, currentStatus) => {
  return {
    type: 'CHANGE_STATUS',
    id: id,
    currentStatus: currentStatus
  }
}

export const actionChangeStatusNew = (id, currentStatus) => {
  return {
    type: 'CHANGE_STATUS_NEW',
    id: id,
    currentStatus: currentStatus
  }
}

export const actionDeleteTitle = (id) => {
  return {
    type: 'DELETE_TITLE',
    id: id
  }
}

export const actionDeleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id: id
  }
}