import './ItemList.css';
import Item from '../Item/Item'
import { Component } from 'react'

class ItemList extends Component {

    render() {
        return (
            <div className="ItemList">
                {this.props.items.length == 0 
                    ? <p> No task arround here... </p>
                    : null
                }
                {this.props.items.map((item, index) => {
                    return(
                        <Item 
                            undo={this.props.undo ? () => this.props.undo(index) : false} 
                            complete={this.props.complete ? () => this.props.complete(index) : false}
                            delete={this.props.delete ? () => this.props.delete(index) : false}
                            edit={this.props.edit ? this.props.edit : false }
                            index={index}
                            text={item}
                        />
                    )
                })}
            </div>
        )
    }

}

export default ItemList;