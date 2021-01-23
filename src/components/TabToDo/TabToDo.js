import './TabToDo.css';
import { Component } from 'react';
import ItemList from '../ItemList/ItemList'

class TabToDo extends Component {

    render() {
        return (
            <div className="TabToDo">
                <h2>To do Tasks</h2>
                <ItemList
                    items={[{text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, ]} 
                    todo
                />
            </div>
        )
    }

}

export default TabToDo;