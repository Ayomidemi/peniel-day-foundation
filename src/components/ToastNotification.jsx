import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ToastNotification = ({ type, text, onclick, icon, url, urlText }) => {
  
  return (
    <div className='toast-notification'>
      <div className='notification-container'>
        <span className='notification-content'>
            <FontAwesomeIcon 
                // icon={faWarning }
                icon={icon}
                className={type === "success" ? "icon success" : "icon error"}
            />
            <p>
              {text}
              {(url !== "" && url !== undefined) && <Link to={url}>{urlText}</Link> }
            </p>
        </span>
        <button className='close' onClick={onclick}>
            <FontAwesomeIcon 
                icon={faClose }
            />
        </button>
      </div>
    </div>
  )
}

export default ToastNotification