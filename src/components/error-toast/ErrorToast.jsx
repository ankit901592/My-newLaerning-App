import React from 'react';
import style from './ErrorToast.module.css';

function ErrorToast({ error }) {
  return (
  <>
  <div className={style.box}>{error}</div>
<h1>OOPSSS!!!SOMETHING WENT WRONG</h1>
</>
  );

}

export default ErrorToast;
