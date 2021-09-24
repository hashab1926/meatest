// built-in
import { useState, useEffect } from 'react';

// internal
import { endpoint } from '../../../Config';
import urlGet from '../../../ParamGet';

// external
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DetailCourse = () => {
    // tampung data course
    const [dataDetailCourses, setDataDetailCourses] = useState([]);

    useEffect(() => {
        getDetailDataCourses();
    }, [dataDetailCourses])


    // get request 
    const getDetailDataCourses = () => {
        axios.get(`${endpoint}/detail_course`).then(function ({ data }) {
            setDataDetailCourses(data)
        })
    }

    return (
        <div></div>
    );
}

export default DetailCourse;