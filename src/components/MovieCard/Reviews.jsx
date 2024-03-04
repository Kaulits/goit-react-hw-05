import React, { useEffect, useState } from 'react'
import s from './Reviews.module.css'
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReview] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReviews(id)
            .then(data => setReview(data))
            .catch(err => setError(err.message));
    }, [id]);

    if (!reviews) {
        return <h2>Loading...</h2>;
    }
    console.log(error);
    return (
        <div className={s.wrapper}>
            {reviews.map(review => (
                <div><ul className={s.actorslist}><li key={review.id}>
                    <h2 className={s.name}>Author: {review.author}</h2>
                    <p className={s.character}>{review.content}</p>
                </li></ul></div>
                
            ))}
        </div>
    );
}

export default Reviews
