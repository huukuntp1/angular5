const loginDefault = {
  login: false,
  acc: ''
}

const Login = (state = loginDefault, action) => {
  switch (action.type) {
    case 'login':
      return {login: true, acc: action.acc}
      
    default:
      return state
  }
}

export default Login