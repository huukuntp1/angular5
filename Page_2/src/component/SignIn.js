import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id : '',
            pass : ''
        }
    }

    changeID = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    changePass = (e) => {
        this.setState({
            pass : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.id === 'admin' && this.state.pass==='123'){
            this.props.signInPage(this.state.id)
            // console.log(this.props);

        }
    }

    render() {
        return (
        <div className="sign-in">
            <form onSubmit={this.handleSubmit}>
                <p>ID</p>
                <input value={this.state.id} onChange={this.changeID}></input>
                <p>Pass</p>
                <input value={this.state.pass} onChange={this.changePass}></input>
                <button>login</button>
            </form>
            <Link to={`/signup`}>Create acc</Link>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login : state.Login.login,
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInPage : (acc)=> {
            dispatch({type: 'login', acc: acc})
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
