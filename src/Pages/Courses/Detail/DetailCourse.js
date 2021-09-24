// built-in
import { useState, useEffect } from 'react';

// internal
import { endpoint } from '../../../Config';
import Navbar from '../../Navbar';
import './DetailCourse.css';

// external
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const DetailCourse = () => {
    const params = new URLSearchParams(useLocation().search);
    const history = useHistory();

    const idCourse = params.get("id_course");

    // tampung data course
    const [dataDetailCourses, setDataDetailCourses] = useState([]);
    // tampung index course
    const [indexBab, setIndexBab] = useState(0);
    const [indexMateri, setIndexMateri] = useState(0);
    useEffect(() => {
        getDetailDataCourses();
    }, [])


    // get request 
    const getDetailDataCourses = () => {
        axios.get(`${endpoint}/detail_course/${idCourse}`).then(function ({ data }) {
            setDataDetailCourses(data)
        })
    }

    const UIDetailCourse = (courseDetail) => {

        if (indexBab >= courseDetail.bab.length || indexBab < 0) {
            setIndexBab(0);
            setIndexMateri(0);
            return false;
        }

        // alert(indexBab + ' - ' + indexMateri);
        const bab = courseDetail.bab[indexBab];
        const materi = bab.materi[indexMateri];
        return (
            <div>
                <h2>{`${bab.nama_bab} -${bab.bagian}`}</h2>
                <h3 className="margin-bottom-3">{materi.nama_materi}</h3>
                <div>
                    <embed width="100%" height="700px" className="embed-video" src={materi.embed} key={materi.id_materi} />
                </div>

                <div className="next-prev">
                    <button className="btn btn-orange prev" onClick={(e) => eventIndexMateriPrev(dataDetailCourses)}>Sebelumnya</button>
                    <button className="btn btn-orange next" onClick={(e) => eventIndexMateriNext(dataDetailCourses)}>Selanjutnya</button>

                </div>
            </div>

        );

    }

    const eventIndexMateriNext = (courseDetail) => {
        var bab = courseDetail.bab[indexBab];

        // // alert()
        if (typeof bab.materi[indexMateri + 1] == 'undefined') {
            setIndexBab(indexBab + 1);
            setIndexMateri(0);
        } else {
            setIndexMateri(indexMateri + 1);

        }

        // cek bab 
        if (typeof courseDetail.bab[indexBab] == 'undefined') {
            alert("Bab atau materi tidak ditemukan")
            return false;
        }

    }

    const eventIndexMateriPrev = (courseDetail) => {
        var bab = courseDetail.bab[indexBab];

        // // alert()
        if (typeof bab.materi[indexMateri - 1] == 'undefined') {
            setIndexBab(indexBab - 1);
            setIndexMateri(0);
        } else {
            setIndexMateri(indexMateri - 1);

        }

        // cek bab 
        if (typeof courseDetail.bab[indexBab] == 'undefined') {
            alert("Bab atau materi tidak ditemukan")
            return false;
        }



    }

    const emptyDetail = () => {
        return (
            <div className="text-center">
                <h1>Coming Soon</h1>
            </div>
        );
    }
    return (
        <div style={{
            background: '#9ca7a7', height: '100vh', paddingBottom: '50px'
        }}>
            <Navbar />
            <h2 className="back" onClick={() => history.push('/courses')}>Kembali</h2>
            <div className="wrapper-detail-course">
                {dataDetailCourses.length <= 0 ? emptyDetail() : UIDetailCourse(dataDetailCourses)}


            </div>
        </div>
    );
}

export default DetailCourse;