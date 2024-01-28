import React from 'react';
import ResumeBubble from './components/ResumeBubble';
import Message from './components/Message';
 

const App = () => {
  return (
    <div>
      <Message>Hello, my name is xyz</Message>
      <Message>I go to x university, and I'm studying xyz</Message>
      <Message>I have a passion for xyz</Message>

      <Message isProject>
        <p>Project 1, Thumbnail, rectangular image</p>
        <p>Project 1, summary and link to github page</p>
      </Message>

      <Message isProject>
        <p>Project 2, Thumbnail, rectangular image</p>
        <p>Project 2, summary and link to github page</p>
      </Message>

      <Message isProject>
        <p>Project 3, Thumbnail, rectangular image</p>
        <p>Project 3, summary and link to github page</p>
      </Message>

      <Message isResume>Resume</Message>

      <Message isContact>
        <p>Contact info, github and linkedin</p>
      </Message>
    </div>
  );
};

export default App;