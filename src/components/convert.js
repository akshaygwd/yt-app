import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({selected, text}) => {
    const [ translate, setTranslated ] = useState('');
    const [ debounce, setDebounce ] = useState(text);

    useEffect(() => {
        const time = setTimeout(() => {
            setDebounce(text);
        }, 500);

        return () => {
            clearTimeout(time);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{} , {
            params: {
                q: debounce,
                target: selected.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();
    }, [selected, debounce]);
    return <div>
        <h1 className="ui header">{translate}</h1>
        </div>
}

export default Convert;