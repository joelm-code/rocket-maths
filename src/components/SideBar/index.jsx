import React from 'react';
import Card from './Card';

export default function SideBar({ quiz }) {
    return (
        <div className="sidebar">
            <Card quiz={quiz} />
        </div>
    );
}
