import './Item.css';
import Button from '../Button/Button';
import { PureComponent } from 'react'

class Item extends PureComponent {

    render() {
        return (
            <div className="Item">
                <div className="Item-text">
                    <p>{this.props.text}</p>
                </div>
                <div className="Item-buttons">
                    { this.props.undo && <Button onClick={() => console.log('teste')} undo />}
                    { this.props.edit && <Button onClick={() => console.log('teste')} edit />}
                    { this.props.delete && <Button onClick={() => console.log('teste')} delete />}
                    { this.props.complete && <Button onClick={() => console.log('teste')} complete />}
                </div>
            </div>
        )
    }

}

export default Item;