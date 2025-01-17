import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';


import Navbar from '../components/Navbar';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <Navbar />
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                exercises={exercises}
                bodyPart={bodyPart}
            />
        </Box>
    );
};

export default Home;