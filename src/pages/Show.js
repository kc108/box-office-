import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';



const Show = () => {

    // const params = useParams();
    // console.log('params', params);

    const { id } = useParams();

    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // Can also put an empty string instead of null, preference
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then(results => {

                if(isMounted) {
                    setShow(results);
                    setIsLoading(false);
                }
        })
        .catch(err => {

            if(isMounted) {
                setError(err.message);
                setIsLoading(false);
            }
        });

        return() => {
            isMounted = false;
        }

    }, [id]);

    console.log('show', show)

    if(isLoading) {
        return <div>Data is being loaded</div>
    }

    if(error) {
        return <div>Error occurred: {error}</div>
    }

    return (
        <div>
            This is the show page
        </div>
    );
};

export default Show
