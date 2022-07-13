import React from 'react';
import { motion } from 'framer-motion';
import uuid from 'react-uuid';

export default function Circle({ numberOfCircles, circleSize, distance }) {
    //style the circle here
    const circleStyle = {
        width: circleSize ? circleSize : '50px',
        height: circleSize ? circleSize : '50px'
    };

    //if you know the exact location of the points,
    //you can overide this array with the location
    const arrayOfPoints = [
        { x: Number(distance), y: 0 },
        { x: Number(distance) * -1, y: 0 }
    ];

    return (
        <>
            {
                // map over all the points in the array
                arrayOfPoints.map((obj) => {
                    return (
                        // create a .circle div with all the animation properties
                        <motion.div
                            key={uuid()}
                            transition={{ duration: 1 }}
                            initial={{ x: 0, y: 0, scale: 0.5 }}
                            animate={{ x: obj.x, y: obj.y, scale: 1 }}
                            exit={{ x: 0, y: 0, scale: 0 }}
                            className="circle"
                            style={circleStyle}
                        />
                    );
                })
            }
        </>
    );
}
