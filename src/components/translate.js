//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React , { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [ selected, setSelected ] = useState(options[0]);
  const [ text, setText ] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} type="text" onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown
      label="select language"
      selected={selected}
      onSelectedChange={setSelected}
      options={options}/>
      <hr />
      <h3 className="ui header"></h3>
      <Convert
      selected={selected}
      text={text}
      />
    </div>
  );
}

export default Translate;