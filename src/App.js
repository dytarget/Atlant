import React from 'react';
import './App.css';
import Private from './VIew/Private/index';
import MainPage from './VIew/MainPage/index';
import AboutUs from './VIew/AboutUs/AboutUs';
import {Switch,Route} from 'react-router-dom';
import StructureProd from './VIew/Vlojit/StructureProd';
import Analitic from './VIew/Vlojit/Analitic';
import Vlojit from './VIew/Vlojit/Vlojit';
import Individual from './VIew/Vlojit/Individual';
import TrustedControl from './VIew/Vlojit/TrustedControl';
import DownloadPlatform from './VIew/Vlojit/DownloadPlatform';
import Learn from './VIew/Vlojit/Learn';
import IndLearn from './VIew/Vlojit/IndLearn';
import FindIdea from './VIew/Vlojit/FIndIdea';
import Corporative from './VIew/Corporative';
import School from './VIew/Vlojit/School';
import SchoolMain from './VIew/Vlojit/SchoolMain';
import Etica from './VIew/Vlojit/Etica';
import Trade from './VIew/Vlojit/Trade';
// import 'core-js/es/map';
// import 'core-js/es/set';
// import 'raf/polyfill';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/private" component={Private}/>
          <Route exact path="/corporative" component={Corporative}/>
          <Route exact path="/corporative/:page" component={Corporative}/>
          <Route exact path="/aboutus/:page" component={AboutUs}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/investing/structural-products" component={StructureProd}/>
          <Route exact path="/investing/individual" component={Individual}/>
          <Route exact path="/investing/trusted-control" component={TrustedControl}/>
          <Route exact path="/trading/download-platform" component={DownloadPlatform}/>
          <Route exact path="/investing" component={Vlojit}/>
          <Route exact path="/trading" component={Trade}/>
          <Route exact path="/trading/your-financial-analyst" component={Analitic}/>
          <Route exact path="/learn" component={Learn}/>
          <Route exact path="/learn/individual-learn" component={IndLearn}/>
          <Route exact path="/find-idea" component={FindIdea}/>
          <Route exact path="/school" component={SchoolMain}/>
          <Route exact path="/private/business-ethics-and-honesty" component={Etica}/>

        </Switch>
    </div>
  );
}

export default App;
