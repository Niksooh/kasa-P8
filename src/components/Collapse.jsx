import PropTypes from 'prop-types'
import React, { useState } from 'react';

export default function Collapse({ label, content }) {
    const [open, setOpen] = useState(false)
    return <>
        <h2 className="" onClick={()=>{setOpen(!open)}}>{label}</h2>
        {open && (<div className="">
            {content}
        </div>)}
    </>
}

Collapse.propTypes = {
    label: PropTypes.string,
    content: PropTypes.string,
}