import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';

export default function Popup(props) {
  let bar = 0;
  const ok = (e) => {
    console.log(e.preventDefault());
    e.returnValue = false;
  }
  useEffect(() => {
    window.addEventListener('scroll', ok);
    return () => window.removeEventListener('scroll', ok);
  }, []);
  return (
    <div className="PopupWrapper">
      <div className="Popup">
        <div className="Popup__Close" onClick={props.onHidePopup}>x</div>
        <div className="Popup__Title">
          Error! {props.title}
        </div>
        <div className="Popup__Body" >
          {props.children}
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  onHidePopup: PropTypes.func.isRequired,
  title: PropTypes.string
};
