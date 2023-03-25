import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';


const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercisesData] = useState([]);
    const [equipmentExercises, setEuipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);

            setExerciseDetail(exerciseDetailData);

            console.log("detailData", exerciseDetailData);
            // setExerciseDetail(exerciseDetailData);
            console.log("detailVideo", exerciseVideos);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            console.log(exerciseVideosData);

            const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercisesData(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEuipmentExercises(equipmentExercisesData);

        }

        fetchExercisesData();

    }, [id]);


    if (!exerciseDetail)
        return <div>
            No Data
        </div>

    return (
        <Box sx={
            {
                mt: {
                    lg: '96px',
                    xs: '60px'
                }
            }
        }>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box >
    );
};
export default ExerciseDetail;