import React from 'react';

export default function ProgressBar({ totalSteps, stepNumber }) {
    const percentageChange = (stepNumber / totalSteps) * 100;

    const styles = {
        backgroundColor: percentageChange === 100 ? '#228c22' : '',
        width: percentageChange < 100 ? `${percentageChange}%` : `100%`
        //need to change it to green when its 100%
    };

    return (
        <div>
            <div className="progressbar--backgound">
                <div className="progressbar--front" style={styles}></div>
            </div>
        </div>
    );
}
