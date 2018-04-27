const linkData = 'https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo';


export const actFetchAddItem = (id, content, status) => {
    return (dispatch) => {
        fetch(linkData ,{
            method: 'POST', body : JSON.stringify(
                {   
                    id: id,
                    name: content,
                    status: false
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(()=> {
            dispatch(actAddItem(id, content, status))}           
        ).catch((e)=> console.log(e));
    }
}

const actAddItem = (id, content, status) => {
    return {
        type: 'ADD_ITEM',
        id: id, 
        name: content, 
        status: status
    }
}

export const actFetchChangeStatus = (id, content, status) => {
    return (dispatch) => {
        fetch(linkData + '/' + id,{
            method: 'PUT', body : JSON.stringify(
                {   
                    id: id,
                    name: content,
                    status: !status
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(()=> {
            dispatch(actChangeStatus(id))
        }).catch((e)=> console.log(e));
    }
}

const actChangeStatus = (id) => {
    return {
        type: 'CHANGE_STATUS',
        id: id
    }
}

export const actFetchDeleteItem = (id) => {
    return (dispatch) => {
        fetch(linkData + '/' + id ,{method: 'DELETE'})
            .then(()=>dispatch(actDeleteItem(id))).catch((e)=> console.log(e));;
    }
}

const actDeleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}

export const actFetchEdit = (id, content, status) => {
    return (dispatch) => {
        fetch(linkData + '/' + id,{
            method: 'PUT', body : JSON.stringify(
                {   
                    id: id,
                    name: content,
                    status: status
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(()=>{dispatch(actEdit(id, content))}).catch((e)=> console.log(e));;
    }
}

const actEdit = (id, name) => {
    return {
        type: 'EDIT_ITEM',
        id: id,
        name: name
    }
}

export const actSearch = (key) => {
    return {
        type: 'SEARCH',
        keySearch: key
    }
}

export const actResetSearch = () => {
    return {
        type: 'RESET_SEARCH'
    }
}

export const actFilterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

export const actFilterComplete = () => {
    return {
        type: 'FILTER_COMPLETE'
    }
}

export const actFilterActive = () => {
    return {
        type: 'FILTER_ACTIVE'
    }
}