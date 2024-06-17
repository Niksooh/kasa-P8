import PropTypes from 'prop-types'
import React, { useState } from 'react';

export default function Collapse({ label, content }) {
    const [open, setOpen] = useState(false)
    return <>
        <h2 className="layout-collapse-2" onClick={()=>{setOpen(!open)}}>{label}</h2>
        {open && (<div className="layout-content-collapse">
          <p className='layout-content-collapse'>{content}</p>
        </div>)}
    </>
}

Collapse.propTypes = {
    label: PropTypes.string,
    content: PropTypes.string,
}