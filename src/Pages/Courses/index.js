import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ControllerCourses from '../../Controllers/ControllerCourses';
import { eventBindings } from '../../Helpers/Events';
import Button from '../../Components/Button/Button';
import './styles.scss';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }

        eventBindings(this, ['getDataCourses', 'nextDetailCourse']);
    }

    componentDidMount() {
        this.getDataCourses();
    }

    render() {
        return <div className="wrapper-courses">
            {this.state.courses.map((course, i) =>
                <div className="card" key={i}>
                    <img src={course.image} className="card-image"></img>
                    <div className="card-body">
                        <h3>{course.title}</h3>
                        <div className="wrapper-person">
                            <img src={course.instructor.photo} className="instructor-photo" width="50" height="50" />
                            <div className="wrapper-detail-person">
                                <div className="text-person">{course?.instructor.name}</div>
                                <div className="subtext-person">{course?.instructor_role}</div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <div className="card-footer">
                        <Button className="btn-primary btn-block" text="Lanjut" onClick={e => this.props.history.push(`/detail-course?course_id=${course.course_id}`)} />
                        {/* <button onClick={`/detail_course?id_course=${course.id_course}`} className="btn btn-orange btn-block">Lanjut</button> */}

                    </div>
                </div>
            )}
        </div>;
    }
}

Object.assign(Courses.prototype, ControllerCourses);

export default withRouter(Courses);