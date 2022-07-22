import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function Ecommerce() {
    const [status, setStatus] = useState('');

    function ToggleMenu() {
        if (status === "") {
             setStatus('active');
             return;
        }
        setStatus('');
     }

  return (
    <>
        <div className='ecommerce'>
            <Header ToggleMenu={ToggleMenu} status={status}/>
        </div>
    </>
  )
}
