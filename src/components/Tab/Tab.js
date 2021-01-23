import './Tab.css';
import { Component } from 'react';

class Tab extends Component {

    render() {
        return (
            <div className="Tab">
                {this.props.children}
            </div>
        )
    }

}

export default Tab;