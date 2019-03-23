import React from 'react';
import './H3.scss'

export const H3 = (
    {
        id,
        className = '',
        children,
        center,
        text
    }) =>
    <div
        id={id}
        className={`H3 ${className}`}
        style={{
            textAlign: center && 'center'
        }}
    >
        {text}
    </div>;