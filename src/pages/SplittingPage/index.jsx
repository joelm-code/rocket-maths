import React from 'react';
import Circle from './Circle';
//import { motion } from 'framer-motion';
import './styles.css';

export default function SplittingPage() {
    return (
        <div>
            <div className="container">
                {/* Outter Circle - Clickable */}
                <div className="big-circle" />

                {/* Inner Circle */}
                <Circle
                    numberOfCircles="4" // can be defined in state or fixed value
                    circleSize="50px" // should be in px
                    distance="100" // should be a number -> no px needed
                />
            </div>
        </div>
    );
}
