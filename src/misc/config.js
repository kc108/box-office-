const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
    // fetch(`${API_BASE_URL}/search/shows?q=${input}`)
    const response = await fetch(`${API_BASE_URL}${queryString}`).then(res => res.json())
    return response;

    // converted promise to async/await 
    //     .then(result => {
    //         setResults(result)
    //        console.log(result)
    //    });
}