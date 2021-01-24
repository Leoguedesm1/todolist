import './Button.css';
import { Component } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaUndoAlt } from 'react-icons/fa';

class Button extends Component {

    render() {
        return (
            <button 
                className="Button" 
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                    { this.props.text }
                    { this.props.undo && <FaUndoAlt /> }
                    { this.props.edit && <FaRegEdit />}
                    { this.props.delete && <FaRegTrashAlt />}
                    { this.props.complete && <FaRegCheckCircle />}
            </button>
        )
    }

}

export default Button;