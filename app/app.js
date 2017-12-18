import React, {Component} from 'react';
import SplitPane from 'react-split-pane';


export class Application extends Component {
  render() {
    return (
      <SplitPane>
        <div>
          Foo
        </div>
        <div>
          Bar
        </div>
      </SplitPane>
    )
  }
}
