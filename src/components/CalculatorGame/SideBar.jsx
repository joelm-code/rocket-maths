import React from 'react';
import Card from './components/Card';

export default function SideBar({ quiz }) {
    return (
        <div className="sidebar">
            <Card quiz={quiz} />
        </div>
    );
}
