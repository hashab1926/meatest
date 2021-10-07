import { Component } from "react";
import { withRouter } from 'react-router-dom';
import querystring from 'query-string';

import { eventBindings } from '../../Helpers/Events';
import ControllerCourseDetail from "../../Controllers/ControllerCourseDetail";
import Loading from '../../Template/Loading';
import Button from '../../Components/Button/Button';
import './styles.css';

class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseDetail: [],
            indexChapters: 0,
            indexLessons: 0,
            accomodateIndex: []
        };
        this.querystring = querystring.parse(this.props.location.search);

        eventBindings(this, ['prevLesson', 'nextLesson']);
    }
    getChapters(index) {
        // short hand course
        const course = this.state.courseDetail;
        if (typeof course?.chapters !== 'undefined')
            return course.chapters[index];

        return [];
    }
    getLessons(index) {
        // get chapters
        const chapters = this.getChapters(this.state.indexChapters);
        // check if hapters undefined
        if (typeof chapters?.lessons !== 'undefined')
            return chapters.lessons[index];

        return [];
    }

    render() {
        const chapters = this.getChapters(this.state.indexChapters);
        const lessons = this.getLessons(this.state.indexLessons);
        return this.state.courseDetail.length <= 0 ? <Loading /> :
            (
                <div className="wrapper-detail-course">
                    <h3>{chapters.title} - {lessons.title}</h3>
                    <embed className="embed-video" src={lessons.link} key={lessons.lesson_id} />

                    <div className="next-prev">

                        <Button className="btn-primary prev" text="Sebelumnya" onClick={this.prevLesson} />
                        <Button className="btn-primary next" text="Selanjutnya" onClick={this.nextLesson} />

                    </div>
                </div>

            );
    }

    componentDidMount() {
        setTimeout(() => {

            const courseId = this.querystring.course_id;

            // get data course detail
            this.getCourseDetail(courseId);

        }, 1000);
    }

    componentDidUpdate() {
        // console.log(this.state);

    }
}

Object.assign(CourseDetail.prototype, ControllerCourseDetail);

export default withRouter(CourseDetail);
