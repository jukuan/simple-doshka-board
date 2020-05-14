import React from 'react';
import KanbanCard from './KanbanCard';
import EditableLabel from 'react-inline-editing';

// import { createStore } from 'redux';
// let todos = (data) => {
//     console.log('todos', data);
// };
// const store = createStore(todos, ['Use Redux']);

/*
 * The Kanban Board Column React component
 */
export default class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        // this.dataChanged = this.dataChanged.bind(this);
        this.state = ({
            mouseIsHovering: false,
            title: this.props.name,
        });

        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
    }

    /**
     * Redux action
     * @param text
     * @returns {{type: string, text: *}}
     */
    setColumnTitle(text) {
        return {
            type: 'COLUMN',
            text: text
        }
    }

    _handleRedux(msg) {
        // store.dispatch(this.setColumnTitle(msg));
    }

    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        console.log('Left editor with text1: ' + text);
        console.log('Left editor with text2: ' + this.state.title);
        this._handleRedux(text);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ mouseIsHovering: false });
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
        const labelStyle = {
            'display': 'inline',
        };
        return  (
            <div
                style={columnStyle}
                onDragEnter={(e) => {this.setState({ mouseIsHovering: true }); this.props.onDragEnter(e, this.props.stage);}}
                onDragExit={(e) => {this.setState({ mouseIsHovering: false });}}
            >
                <h4>{this.props.stage}. {this.props.name} ({this.props.projects.length})</h4>

                <EditableLabel
                            text={this.state.title ? this.state.title : 'Default Name'}
                            labelClassName='myLabelClass'
                            inputClassName='myInputClass'
                            inputHeight='25px'
                            labelFontWeight='bold'
                            inputFontWeight='bold'
                            onFocus={this._handleFocus}
                            onFocusOut={this._handleFocusOut}
                            style={labelStyle}
                />

                {this.generateKanbanCards()}
                <br/>
            </div>);
    }
}
