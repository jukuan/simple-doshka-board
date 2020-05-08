import React from 'react';
import ReactDOM from 'react-dom';
import KanbanCard from './KanbanCard';

/*
 * The Kanban Board Column React component
 */
export default class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ mouseIsHovering: false });
    }

    componentWillReceiveProps(nextProps) {
        this.state = ({ mouseIsHovering: false });
    }

    generateKanbanCards() {
        return this.props.projects.slice(0).map((project) => {
            return (
                <KanbanCard
                    project={project}
                    key={project.name}
                    onDragEnd={this.props.onDragEnd}
                />
            );
        });
    }

    render() {
        const columnStyle = {
            'display': 'inline-block',
            'width': '230px',
            'textAlign': 'center',
            'verticalAlign': 'top',
            'marginRight': '5px',
            'marginBottom': '5px',
            'paddingLeft': '5px',
            'paddingTop': '0',
            'background': (this.state.mouseIsHovering) ? '#d3d3d3' : '#f0eeee',
        };
        return  (
            <div
                style={columnStyle}
                onDragEnter={(e) => {this.setState({ mouseIsHovering: true }); this.props.onDragEnter(e, this.props.stage);}}
                onDragExit={(e) => {this.setState({ mouseIsHovering: false });}}
            >
                <h4>{this.props.stage}. {this.props.name} ({this.props.projects.length})</h4>
                {this.generateKanbanCards()}
                <br/>
            </div>);
    }
}
