import React from 'react';

class QuestionMarkCircleComponent extends React.Component {
  
  render() {
    return(
      <span title={this.props.title}>
        <svg className={['Icon white translucent', this.props.className].join(' ')} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
          <g>
            <path d="M22.4,6c-1.1-1.8-2.5-3.3-4.4-4.4C16.2,0.5,14.2,0,12,0C9.8,0,7.8,0.5,6,1.6C4.1,2.7,2.7,4.1,1.6,6C0.5,7.8,0,9.8,0,12
              c0,2.2,0.5,4.2,1.6,6c1.1,1.8,2.5,3.3,4.4,4.4c1.8,1.1,3.8,1.6,6,1.6s4.2-0.5,6-1.6c1.8-1.1,3.3-2.5,4.4-4.4c1.1-1.8,1.6-3.8,1.6-6
              C24,9.8,23.5,7.8,22.4,6z M14,19.5c0,0.1,0,0.3-0.1,0.4C13.8,20,13.6,20,13.5,20h-3c-0.1,0-0.3,0-0.4-0.1C10,19.8,10,19.6,10,19.5
              v-3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1h3c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.2,0.1,0.4V19.5z M17.8,10.3
              c-0.1,0.4-0.3,0.7-0.4,0.9c-0.2,0.2-0.4,0.5-0.7,0.7c-0.3,0.3-0.5,0.4-0.7,0.5c-0.2,0.1-0.4,0.3-0.8,0.4c-0.3,0.2-0.6,0.5-0.9,0.8
              C14.1,14,14,14.3,14,14.5c0,0.1,0,0.3-0.1,0.4C13.8,15,13.6,15,13.5,15h-3c-0.1,0-0.3,0-0.4-0.1C10,14.8,10,14.6,10,14.5v-0.6
              c0-0.7,0.3-1.4,0.8-2c0.5-0.6,1.1-1.1,1.8-1.4c0.5-0.2,0.9-0.5,1.1-0.7C13.9,9.7,14,9.4,14,9c0-0.3-0.2-0.7-0.6-0.9
              c-0.4-0.3-0.8-0.4-1.3-0.4c-0.5,0-1,0.1-1.3,0.4c-0.3,0.2-0.8,0.7-1.3,1.4C9.3,9.6,9.2,9.6,9,9.6c-0.1,0-0.2,0-0.3-0.1L6.6,8
              C6.4,7.8,6.4,7.6,6.5,7.3C7.8,5.1,9.8,4,12.3,4c0.9,0,1.8,0.2,2.7,0.6c0.9,0.4,1.6,1,2.2,1.8C17.7,7.2,18,8.1,18,9
              C18,9.5,17.9,9.9,17.8,10.3z"/>
          </g>
        </svg>
      </span>
    )
  }
}

export default QuestionMarkCircleComponent;
