// @ts-nocheck
import React from 'react';
import Posts from './components/Posts/Posts';
// import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
// import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'

export const App = () => {
    return (
        <div>
            <h2>Memories</h2>
                <img src={memories} alt="memories" height="60" />

            <div>
                <Posts />
            </div>
            <div>
                <Form />
            </div>
        </div>
          
    );
}

// export default App; 