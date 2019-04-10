import React from 'react';
import PropTypes from 'prop-types';

export default function Auth(props) {
  const searchParams = new URLSearchParams(props.location.search);
  const code = searchParams.get('code');
  if(code) {
    props.authByCode(code);
    console.log(code);
  }
  else {
    props.goAuth();
  }
  return (
    <div>Loggin in...</div>
  );
}

Auth.propTypes = {
  authByCode: PropTypes.func.isRequired,
  goAuth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};
