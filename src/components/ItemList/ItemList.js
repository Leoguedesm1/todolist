import './ItemList.css';
import Item from '../Item/Item'
import { Component } from 'react'

class ItemList extends Component {

    render() {
        return (
            <div className="ItemList">
                {this.props.items.map((item, index) => {
                    return(
                        <Item 
                            undo={this.props.complete} 
                            edit={this.props.todo}
                            complete={this.props.todo}
                            delete={this.props.complete || this.props.todo}
                            text={item.text}
                        />
                    )
                })}
            </div>
        )
    }

}

export default ItemList;