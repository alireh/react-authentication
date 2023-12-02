import * as React from 'react';
export default class About extends React.Component {
    constructor(props:any) {
      super(props);      
    }
    state = {
      expand:true
    };
  
    render() {
      return (
        <div>{'about'}</div>
    );
    }
}