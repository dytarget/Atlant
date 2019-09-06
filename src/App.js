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
import Conservative from './VIew/Vlojit/Conservative';
import Umerenyi from './VIew/Vlojit/Umerenyi';
import Aggressive from './VIew/Vlojit/Aggressive';
import ExpensiveMetals from './VIew/Vlojit/ExpensiveMetals';
import DefendSale from './VIew/Vlojit/DefendSale';
import Obligation from './VIew/Vlojit/Obligation';
import Currency from './VIew/Vlojit/Valute';
import IPOSPO from './VIew/Vlojit/IPOSPO';
import BrokerUslugi from './VIew/Vlojit/BrokerUslugi';
import Report from './VIew/Vlojit/Report';
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
          <Route exact path="/corporative/defending/expensive-metals" component={ExpensiveMetals}/>
          <Route exact path="/corporative/defending/defensive-sales" component={DefendSale}/>
          <Route exact path="/corporative/defending/obligation" component={Obligation}/>
          <Route exact path="/corporative/defending/currency" component={Currency}/>
          <Route exact path="/corporative/defending/ipospodpo" component={IPOSPO}/>
          <Route exact path="/corporative/defending/broker-uslugi" component={BrokerUslugi}/>
          <Route exact path="/aboutus/:page" component={AboutUs}/>
          <Route exact path="/portfels" component={Report}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/investing/structural-products" component={StructureProd}/>
          <Route exact path="/investing/structural-products/conservative" component={Conservative}/>
          <Route exact path="/investing/structural-products/umerennyi" component={Umerenyi}/>
          <Route exact path="/investing/structural-products/aggressive" component={Aggressive}/>
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
