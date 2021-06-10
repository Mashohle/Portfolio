import './App.css';
import myPhoto from './img/myPhoto.jpg'

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="App-header">
        <div className="Container">
          <div className="Intro row">
            <div className="Profile-photo col"><img src={myPhoto} alt="Mashohle Profile Picture"/></div>
            <div className="Summary col">
              <div className="Name row"><h1>Mashohle Mangena</h1></div>
              <div className="Short-Desc row">
              <p><strong><i>BSc Computer Science</i></strong> graduate
                aspiring to become a <em><b>Software Engineer</b></em></p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="App-main">
        <div className="Container">
          <div className="Testing">

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
