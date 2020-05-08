import React from 'react';
import ReactDOM from 'react-dom';

/*
 * The Kanban Board Card component
 */
export default class KanbanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    render() {
        const cardStyle = {
            'background': '#f3f3f3',
            'marginLeft': '0',
            'marginRight': '5px',
            'marginBottom': '5px',
            'paddingLeft': '0',
            'paddingTop': '5px',
            'paddingBottom': '5px',
        };

        return (
            <div
                style={cardStyle}
                draggable={true}
                onDragEnd={(e) => {this.props.onDragEnd(e, this.props.project);}}
            >
                <div><h4>{this.props.project.name}</h4></div>
                {(this.state.collapsed)
                    ? null
                    : (<div><strong>Description: </strong>{ this.props.project.description }<br/></div>)
                }
                <div
                    style={{'width': '100%'}}
                    onClick={(e) => {this.setState({collapsed: !this.state.collapsed});}}
                >
                    {(this.state.collapsed) ? String.fromCharCode('9660') : String.fromCharCode('9650')}
                </div>
            </div>
        );
    }
}
