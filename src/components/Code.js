import React,{ useState} from 'react';
//import ReactDOM from "react-dom";
import './Codestyles.css';
import Motion from './Motion';
import Looks from './Looks';
import Events from './Events'
import Control from './Control'
import Tabitem from './Tabitem';
import TabContent from './TabContent';
import Picture from './Picture'
import { useDrop } from "react-dnd";

const PictureList=[
  {id:1,url:"https://en.scratch-wiki.info/w/images/ScratchCat-Small.png"},
  {id:2,url:"https://test.scratch-wiki.info/w/images/d/dc/ScratchCatJr.png?20151109205939"}
];
function Code () {
  const [activeTab, setActiveTab] = useState("motion");
  //const[add,setAdd]=useState(false);
  const[box,setBox]=useState(false);
  

  /*const addimg=()=>{
      setAdd(!add);
  }*/
  const togglebox=()=>{
    setBox(!box);
  }
  
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

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
         
          <div className='img2'>
          {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
          </div>
         
          </div>
             </div>
        <div className='right'>
        <div className='cat' ref={drop} >
          
        {board.map((picture) => {
          return (
           <div className={box ? 'catimg':''}>
            <Picture url={picture.url} id={picture.id} />
             </div>
          );
        })}
        
           </div>
        <div className='sprint'>

          Sprite<input className="s" type='text' placeholder='Sprite 1'></input>
          x<input className="x" type='text' placeholder='x'></input>
          y<input className="y" type='text' placeholder='y'></input>
        </div>
        
        <button className='play' onClick={togglebox}>Play</button>
        </div>
        
      </div>
    </div>
    
  )
}

export default Code;
