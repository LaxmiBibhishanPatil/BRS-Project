import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyle";
import { useNavigate } from "react-router-dom";

const Rate = () => {
    const [rate, setRate] = useState(0);
    const [confirmed, setConfirmed] = useState(false); // State to track if the rating is confirmed
    const navigate = useNavigate();

    const handleRatingClick = (givenRating) => {
        setRate(givenRating);
        const confirmRating = window.confirm(
            `Are you sure you want to give ${givenRating} stars ?`
        );
        if (confirmRating) {
            setConfirmed(true); // Update confirmed state if the user confirms the rating
            navigate("/home");
        }
    };

    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => handleRatingClick(givenRating)}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    (givenRating <= rate || givenRating === rate) && confirmed
                                        ? "gold"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};

export default Rate;
