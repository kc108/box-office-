import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

import { apiGet } from '../misc/config';

const Home = () => {

    const [input, setInput] = useState('');
    // could also put '[]' --> seems clearer to put 'null' because then we know it is NOT defined
    const [results, setResults] = useState(null);


    const onSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
            setResults(result);
            console.log(result);
        });

       //  https://api.tvmaze.com/search/shows?q=men

    // *** MOVED TO 'misc/config' folder *** 
    //    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //     .then(res => res.json())
    //     .then(result => {
    //         setResults(result)
    //        console.log(result)
    //    });
    };

    const onInputChange = (ev) => {
        setInput(ev.target.value)
    };

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13) {
            onSearch()
        }
    }

    const renderResults = () => {

        if(results && results.length === 0) {
            return <div>No results</div>
        }

        if(results && results.length > 0) {
            return <div> {results.map( (item) => <div key={ item.show.id }>{item.show.name}</div> )} </div>
            
        }

        return null;
    }

    return (
        <MainPageLayout>
            {/* *** Need to have 'value={input}' to associate the 'input' State *** */}
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch} >
                Search
            </button>
            { renderResults() }
        </MainPageLayout>
    );
};

export default Home;