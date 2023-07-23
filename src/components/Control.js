import React from 'react'

const Control = () => {
  return (
    <div>
      <p>Control</p>
      <form>
        wait <input type='text' placeholder='1'/>seconds 
      </form>
      <form>
        repeat <input type='text' placeholder='10'/> 
      </form>
      <form>
        forever
      </form>

    </div>
  )
}

export default Control
