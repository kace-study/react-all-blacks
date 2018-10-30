import React, { Component } from 'react';
import Panel from '../Panel/Panel';


class PanelList extends Component {

  constructor(props) {
    super(props);
    this.state = { panelColors: this.initializePanelColors() }
  }

  componentWillReceiveProps(props) {
    if (props.isPlaying) {
      this.setState({ panelColors: this.initializePanelColors() });
    }
  }

  initializePanelColors() {
    var panelColors = [];
    for (var i = 0; i < 9; i++) {
      panelColors.push(Math.random() >= 0.5);
    }
    return panelColors;
  }

  handleClick(i) {
    if (this.props.isPlaying) {
      const panelColors = this.state.panelColors.slice();
      panelColors[i] = !this.state.panelColors[i];
      this.setState({panelColors: panelColors});
      if (panelColors.every(isBlack => isBlack)) {
        this.props.endGame();
      }
    }
  }

  renderPanel(i) {
    return <Panel 
      isBlack={this.state.panelColors[i]}
      onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <div className="panel-list">
        <div>
          {this.renderPanel(0)}
          {this.renderPanel(1)}
          {this.renderPanel(2)}
        </div>
        <div>
          {this.renderPanel(3)}
          {this.renderPanel(4)}
          {this.renderPanel(5)}
        </div>
        <div>
          {this.renderPanel(6)}
          {this.renderPanel(7)}
          {this.renderPanel(8)}
        </div>
      </div>
    );
  }
}

export default PanelList;
