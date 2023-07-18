import React,{ useState} from 'react';
//import ReactDOM from "react-dom";
import './Codestyles.css';
import catimg from '../images/catimg.jpg';
import Motion from './Motion';
import Looks from './Looks';
import Events from './Events'
import Control from './Control'
import Tabitem from './Tabitem';
import TabContent from './TabContent';
//import './imagemove';


const Code = () => {
  const [activeTab, setActiveTab] = useState("motion");
  
  return (
    <div className='middle'>
      <div className='written_code'>Code</div>
      <div className='block'>
        <div className='effects'>
        <div className="tabs">
          <dl className="nav" >
          <Tabitem title="Motion" id="motion" activeTab={activeTab} setActiveTab={setActiveTab}></Tabitem>
          <Tabitem title="Looks" id="looks" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <Tabitem title="Events" id="events" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <Tabitem title="Control" id="control" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </dl>

          <div className='info'>
            <TabContent id="motion" activeTab={activeTab}><Motion/></TabContent>
            <TabContent id="looks" activeTab={activeTab}><Looks/></TabContent>
            <TabContent id="events" activeTab={activeTab}><Events/></TabContent>
            <TabContent id="control" activeTab={activeTab}><Control/></TabContent>
          </div>
          </div>
        </div>
        <div className='right'>
        <div className='cat'>
            <img className='catimg' src={catimg} alt='catimage'/>
        </div>
        <div className='sprint'>

          Sprite<input className="s" type='text' placeholder='Sprite 1'></input>
          x<input className="x" type='text' placeholder='x'></input>
          y<input className="y" type='text' placeholder='y'></input>
        </div>
        <script src="imagemove.js"></script>
        <button className='play'>Play</button>
        </div>
        
      </div>
    </div>
  )
}

export default Code
