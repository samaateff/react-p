import React , {Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index}/>
        <Route path="/contact" component={Contact}/>
        </BrowserRouter>
    )
  }
}


export default App;
/*
n2sm elmwq3 w n3ml el components
folder components gowah
folder nav bar
folder about
folder work
folder home
folder contact
folder footer
folder portfolio
folder profile
folder social media
kol folder gowah file index.js bta3oh
w gowah file style.css bta3oh
b3d keda n3mlhom kolhm import fe file app.js
b3d keda nndahom beltarteb fe el render 
nfas tarteb el mwq3 ely ba2ldoh
<Contact/> mndhtaha4 34an htkon saf7a tanya
b3d keda nro7 navbar w nstb reactriuterdom
npm i react-router-dom --save
b3d keda n3mlha import {Link}
b3d keda component gdeda folder index
w gowah file index.js w a7ot feh kol ely 
gowa file app.js
w nms7 mnha import navbar , contact
w nms7hom mn render return
w keda keda mkont4 7ata fe return conntact
w ha5ly kol component .. 34an h5rog bara 5atwa
b3d keda n7ot fe app.js
navbar
index
contact
nstb axios
npm i axios --save
b3dha nstb 
npm i axios styled-components --save
---------------
fe public nkryt folder js 
gowa folder js nkryt file data.json
*/
//mwq3 jsonplaceholder ,, request fe resources
// w a5tar elly 3ayzah
/*
  <div>
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
      </div>
*/
/*
b3d ma 7tena elmwq3 el gded 
bn7ot fe index . css
mwasfat el container
w lw fe ay input fe elmwq3 lazem / fe a5er el2fla
fe nav bar a3ml file style.css
w n3ml import lel style fe index.js
b3d keda import le styled-comp fe index.js ` `
hn7wl file style.css bta3 nav le style.js
baro7 fontawsome cdn w geb link css w a7toh fe 
index.html ely fe el public 34an el icons
34an ast5dem hooks lazem ageb useState mn fo2
w el hooks betmkns ast5dm state gowa function m4 
class 3ady
*/