import React from 'react';
import { useForm } from 'react-hook-form';
import './BookReview.css';


const BookReview = ({ bookId, onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleReviewSubmit = (data) => {
        console.log('Review submitted for book ID:', bookId, data);
        if (onSubmit && typeof onSubmit === 'function') {
            onSubmit(data.review);
        } else {
            console.error("onSubmit is not a function");
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleReviewSubmit)} className="review-form">
            <textarea
                {...register('review', { required: true })}
                placeholder="Write your review"
                rows="4"
                className="review-textarea"
            />
            {errors.review && <span className="error">Review is required.</span>}
            <button type="submit" className="submit-button">Submit Review</button>
        </form>
    );
};

export default BookReview;
