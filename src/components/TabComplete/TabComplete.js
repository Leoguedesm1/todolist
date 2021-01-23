import './TabComplete.css';
import { Component } from 'react';
import ItemList from '../ItemList/ItemList';

class TabComplete extends Component {

    render() {
        return (
            <div className="TabComplete">
                <h2>Completed Tasks</h2>
                <ItemList
                    items={[{text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, {text: 'Teste Item List'}, ]} 
                    complete
                />
            </div>
        )
    }

}

export default TabComplete;