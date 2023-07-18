import React from 'react'


const Tabitem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {setActiveTab(id);};

  return (
    <dt onClick={handleClick} className={activeTab === id ? "active" : ""}>
     {id==="motion" ? <span class="dot1"></span> : ""}
     {id==="events" ? <span class="dot3"></span> : ""}
     {id==="looks" ? <span class="dot2"></span> : ""}
     {id==="control" ? <span class="dot4"></span> : ""}
     {title}
   </dt>
  );
};

export default Tabitem
