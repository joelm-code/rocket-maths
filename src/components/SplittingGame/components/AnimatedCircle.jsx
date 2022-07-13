import React from 'react';
import Circle from './Circle';
import { motion } from 'framer-motion';

export default function AnimatedCircle() {
    return (
        <div className="section">
            <div className="container">
                {/* Outter Circle - Clickable */}
                <motion.div className="big-circle" />

                {/* Inner Circle */}
                <Circle
                    numberOfCircles="3" // can be defined in state or fixed value
                    circleSize="50px" // should be in px
                    distance="100" // should be a number -> no px needed
                />
            </div>
        </div>
    );
}
