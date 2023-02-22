import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import * as P from './pages';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <Header/>
      <ReactFullpage
        anchors={["main", "introduce", "history", "teammate", "culture", "projects"]}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);

          return (
            <>
              <div className="section"><P.Main/></div>
              <div className="section"><P.Introduce/></div>
              <div className="section"><P.History/></div>
              <div className="section"><P.TeamMate/></div>
              <div className="section"><P.Culture/></div>
              <div className="section"><P.Projects/></div>
            </>
          );
        }}
      />
    </>
  );
}
