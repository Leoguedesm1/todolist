import './Header.css';
import Button from '../Button/Button';
import { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <h1>ToDo List</h1>
                <Button onClick={this.props.onClick} text="Add Task" />
            </div>
        )
    }

}

export default Header;