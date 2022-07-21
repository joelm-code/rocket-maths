import React from 'react';
import './styles.css';

export default function Keypad(props) {
    const keypadButtons = [
        { id: 9, buttonNumber: '9' },
        { id: 8, buttonNumber: '8' },
        { id: 7, buttonNumber: '7' },
        { id: 6, buttonNumber: '6' },
        { id: 5, buttonNumber: '5' },
        { id: 4, buttonNumber: '4' },
        { id: 3, buttonNumber: '3' },
        { id: 2, buttonNumber: '2' },
        { id: 1, buttonNumber: '1' },
        { id: 'del', buttonNumber: 'del' },
        { id: 0, buttonNumber: '0' },
        { id: '.', buttonNumber: '.' }
    ];

    const buildButton = keypadButtons.map((keypadButton) => {
        const styleClassName = `keypad--button button--${keypadButton.id}`;
        return (
            <button
                className={styleClassName}
                key={keypadButton.id}
                //keyValue={keypadButton.id}
                //on click call props to update
                //onClick={() => props.handleClick(keypadButton.id)}
                onClick={() => props.upadateQuiz(keypadButton.id)}
            >
                {keypadButton.buttonNumber}
            </button>
        );
    });

    return <div className="keypad">{buildButton}</div>;
}
