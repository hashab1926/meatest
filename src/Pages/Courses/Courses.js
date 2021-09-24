// built-in
import { useState, useEffect } from 'react';

// internal
import './Courses.css';
import { endpoint } from '../../Config';
import Navbar from '../Navbar';

// external
import axios from 'axios';
import { useHistory } from 'react-router-dom';




const CardCourse = (courses) => {
    const coverImg = "https://hughculver.com/wp2/wp-content/uploads/11-main3-880x494.jpg";
    const imgTrainer = `${process.env.PUBLIC_URL}/img/profile_user.jpg`;

    // history
    const history = useHistory();
    return courses.map((course, i) => {

        return (
            <div className="card" key={i}>
                <img src={coverImg} className="card-image"></img>
                <div className="card-body">
                    <h2>{course.course_name}</h2>
                    <div className="wrapper-person">
                        <img src={imgTrainer} className="rounded-circle" width="50" />
                        <div className="wrapper-detail-person">
                            <div className="text-person">{course.trainer.trainer_name}</div>
                            <div className="subtext-person">{course.trainer.profession}</div>
                        </div>
                    </div>
                    <br /><br />
                </div>
                <div className="card-footer">
                    <button onClick={(e) => history.push(`/detail_course?id_course=${course.id_course}`)} className="btn btn-orange btn-block">Lanjut</button>
                </div>
            </div>
        );
    })


}


const Courses = () => {
    // tampung data course
    const [dataCourses, setDataCourses] = useState([]);

    useEffect(() => {
        getDataCourses();
    }, [])


    // get request 
    const getDataCourses = () => {
        return axios.get(`${endpoint}/course`).then(function ({ data }) {
            return setDataCourses(data)
        })
    }


    return (
        <div style={{
            background: '#9ca7a7', height: '100vh', paddingBottom: '50px'
        }}>
            <Navbar />
            <div className="wrapper-course">
                {dataCourses.length <= 0 ? '' : CardCourse(dataCourses)}
            </div>
        </div>
    );
}

export default Courses;