import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';



const Show = () => {

    // const params = useParams();
    // console.log('params', params);

    const { id } = useParams();

    const [show, setShow] = useState(null);

    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then(results => {
            setShow(results)
        })

    }, [id]);

    console.log('show', show)

    return (
        <div>
            This is the show page
        </div>
    );
};

export default Show
