import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <div className="Container">
            <div class="Container__text">
              <div>ICELANDIC LANDSCAPE</div>
              <div> VISUAL ELEMENT</div>
            </div>
          </div>
          <div className="InfoBox">
            <div className="InfoBox__text">
              <div className="InfoBox__textTitle">Litatónar</div>
              Meginmarkmið þessa verkefnis er að varpa ljósi á sjónræna þætti og
              myndmál landslagsins sem umlykur okkur dags daglega. Mikilvægi
              vitundar um heimabyggð og tilfinning fyrir nærumhverfi eru þættir
              sem koma fram bæði í sjálfbærnimarkmiðum Sameinuðu þjóðanna og
              nýrri aðal- námskrá leik-, grunn- og framhaldsskóla. Með því að
              styrkja tilfinningu fyrir lífræn- um ferlum, breytingum í lit og
              formi er verkefnið innlegg í kennslu námsmarkmiða í umhverfismennt
              og sjónlistum.
            </div>
            <div className="InfoBox__colors" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
