import React from 'react'
import { Link } from 'react-router-dom';


const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
  // .split -> split the array into words
  // .slice --> 1st 10 el of arr
  // .join --> convert it back to string by joining the el's
  // .replace --> converts from HTML to plain text using pattern
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
