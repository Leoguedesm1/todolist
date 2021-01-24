import './Item.css';
import Button from '../Button/Button';
import { PureComponent } from 'react'

class Item extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            text: ""
        }
    }

    setEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render() {
        return (
            <div className="Item">
                <div className="Item-text">
                    { this.props.edit && this.state.isEditing
                        ? <input 
                                className="Item-input"
                                type="text" id="input" 
                                onChange={e => this.props.edit(e.target.value, this.props.index)} 
                                value={this.props.text}
                                onKeyPress={e => {
                                    if(!e) e = window.event;
                                    let keyCode = e.code || e.key;
                                    if (keyCode == "Enter") this.setState({ isEditing: false })
                                }}
                            />
                        : <p>{this.props.text}</p> 
                    }
                </div>
                <div className="Item-buttons">
                    { this.props.undo && <Button onClick={this.props.undo} undo />}
                    { this.props.edit && <Button onClick={this.setEdit.bind(this)} edit />}
                    { this.props.delete && <Button onClick={this.props.delete} delete disabled={this.state.isEditing} />}
                    { this.props.complete && <Button onClick={this.props.complete} complete disabled={this.state.isEditing} />}
                </div>
            </div>
        )
    }

}

export default Item;