import React, { Component } from 'react';
import { Link, Prompt  } from 'react-router-dom';

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id : '',
            pass : '',
            passRe: ''
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

    changePassRe = (e) => {
        this.setState({
            passRe : e.target.value
        })
    }

    render() {
        return (

            
        <div className="sign-in">
            <Prompt
                when={this.state.id.length + 
                    this.state.pass.length + 
                    this.state.passRe.length !== 0}
                message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                } 
            />
            <form>
                <p>ID</p>
                <input value={this.state.id} onChange={this.changeID}></input>
                <p>Pass</p>
                <input value={this.state.pass} onChange={this.changePass}></input>
                <p>Pass Re</p>
                <input value={this.state.passRe} onChange={this.changePassRe}></input>
                <button>Create</button>
            </form>
        </div>
        );
    }
}

export default SignIn;
