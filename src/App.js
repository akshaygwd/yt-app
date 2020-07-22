import React,  { useState } from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
];

const options = [
    {
        label: 'Red',
        value: 'Red',
    },
    {
        label: 'Green',
        value: 'Green',
    },
    {
        label: 'Blue',
        value: 'Blue',
    },
]

// export default () => {
//     const [ selected, setSelected ] = useState(options[0]);
//     const [ dropdown, setDropdown] = useState(true);
//     return (<div>
//             <button onClick={() => setDropdown(!dropdown)}>toggle</button>
//             {dropdown
//             ?
//             <Dropdown
//             selected={selected}
//             onSelectedChange={setSelected}
//             options={options} />
//             :
//             ''}
//             <h1 style={{color: selected.value}}>I am heree</h1></div>)
// }

export default () => {
    return(
        <div>
            <Translate />
        </div>
    );
}