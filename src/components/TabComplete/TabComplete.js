import './TabComplete.css';
import { Component } from 'react';
import ItemList from '../ItemList/ItemList';

class TabComplete extends Component {

    render() {
        return (
            <div className="TabComplete">
                <h2>Completed Tasks</h2>
                <ItemList
                    items={this.props.items} 
                    undo={this.props.undo}
                    delete={this.props.delete}
                />
            </div>
        )
    }

}

export default TabComplete;