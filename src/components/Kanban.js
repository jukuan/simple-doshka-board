import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';

/*
 * The Kanban React component
 */
export default class Kanban extends React.Component {
    render(){
        const style = {
            'padding': '30px',
            'paddingTop': '5px',
        };

        return(
            <div style={ style }>
                <h1>The Simple Doshka Board</h1>
                <KanbanBoard />
            </div>
        );
    }
}
