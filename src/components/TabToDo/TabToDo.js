import './TabToDo.css';
import { Component } from 'react';
import ItemList from '../ItemList/ItemList'

class TabToDo extends Component {

    render() {
        return (
            <div className="TabToDo">
                <h2>To do Tasks</h2>
                <ItemList
                    items={this.props.items}
                    edit={this.props.edit}
                    complete={this.props.complete}
                    delete={this.props.delete}
                />
            </div>
        )
    }

}

export default TabToDo;