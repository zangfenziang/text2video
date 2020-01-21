import React from 'react';
import TextInput from './components/TextInput';
import TimeLine from './components/TimeLine';
import VideoCanvas from './components/VideoCanvas';
import TemplateType from './components/TemplateType';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App col-flex">
      <div className="row-flex one-grow">
        <div className="col-flex one-grow">
          <TextInput />
          <TemplateType />
        </div>
        <VideoCanvas />
      </div>
      <TimeLine />
    </div>
  );
}

export default App;
