import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';

import { apiGet } from '../misc/config';

const Home = () => {

    const [input, setInput] = useState('');
    // could also put '[]' --> seems clearer to put 'null' because then we know it is NOT defined
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowsSearch = searchOption === 'shows';


    const onSearch = () => {

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    };

    console.log(searchOption)

    const renderResults = () => {

        if(results && results.length === 0) {
            return <div>No results</div>
        }

        if(results && results.length > 0) {
            return results[0].show 
            // Instead of mapping over items, use Components
            // ? results.map(item => <div key={item.show.id}>{item.show.name}</div>) 
            ? <ShowGrid data={results}/> 
            // Instead of mapping, use created Components
            // : results.map(item => (
            //     <div key={item.person.id}>{item.person.name}</div>
             : (
                 <ActorGrid data={results} />
             );     
        }

        return null;
    };

    return (
        <MainPageLayout>
            {/* *** Need to have 'value={input}' to associate the 'input' State *** */}
            <input 
                type="text" 
                placeholder="Search for Something"
                onChange={onInputChange} 
                onKeyDown={onKeyDown} 
                value={input} 
            />

            <div>

                <label htmlFor="shows-search">
                    Shows
                    <input 
                        id="shows-search" 
                        type="radio" 
                        value="shows" 
                        checked={isShowsSearch}
                        onChange={onRadioChange} 
                    />
                </label>

                <label htmlFor="actors-search">
                    Actors
                    <input 
                        id="actors-search" 
                        type="radio" 
                        value="people" 
                        checked={!isShowsSearch}
                        onChange={onRadioChange} 
                    />
                </label>

            </div>

            <button type="button" onClick={onSearch} >
                Search
            </button>
            { renderResults() }
        </MainPageLayout>
    );
};

export default Home;