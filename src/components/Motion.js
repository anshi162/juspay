import React from 'react'
import './form.css';

const Motion = () => {
  return (
    <div>
      <p>Motion</p>
      <form>
        move <input type='text'/> steps
      </form>
      <form>
        turn <input type='text'/> degrees
      </form>
      <form>
        change by <input type='text'/> 
      </form>
    </div>
  )
}

export default Motion
