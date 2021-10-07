import Api from '../Helpers/Api';

const ControllerCourseDetail = {
    async getCourseDetail(courseId) {
        try {
            // get user id
            const userId = sessionStorage.getItem('user_id');

            // request api
            const response = await Api.get(`course`, { course_id: courseId, user_id: userId });

            // set state 
            this.setState({
                courseDetail: response.data,
            });

            // accomodate index set state
            this.mappingIndexCourse(response.data);

        } catch (error) {
            throw error;
        }
    },

    mappingIndexCourse(course) {
        const chapters = course.chapters;
        let accomodate = [];
        for (let x = 0; x < chapters.length; x++) {

            for (let y = 0; y < chapters[x].lessons.length; y++) {
                accomodate.push(`${x}-${y}`);
            }
        }
        this.setState({ accomodateIndex: accomodate });
    },

    prevLesson(course) {
    },

    getCurrentIndex() {
        const accomodateIndex = this.state.accomodateIndex;
        return accomodateIndex.findIndex(val => val === `${this.state.indexChapters}-${this.state.indexLessons}`);

    },

    nextIndex() {

        // get current index in state accomodateIndex
        const getCurrentIndex = this.getCurrentIndex() + 1;

        // if last lessons, then set to first lessons
        if (getCurrentIndex >= this.state.accomodateIndex.length) {
            this.setState({
                indexChapters: 0,
                indexLessons: 0
            });
            return false;
        }

        // split getCurrent index
        const splitCurrent = this.state.accomodateIndex[getCurrentIndex].split('-');
        return splitCurrent;
    },

    prevLesson() {
        // get current index in state accomodateIndex
        const getCurrentIndex = this.getCurrentIndex() - 1;
        if (getCurrentIndex < 0)
            return false;
        // split acoomodate index
        const splitCurrent = this.state.accomodateIndex[getCurrentIndex].split('-');

        this.setState({
            indexChapters: splitCurrent[0],
            indexLessons: splitCurrent[1]
        })
    },

    nextLesson() {
        const nextIndex = this.nextIndex();
        if (!nextIndex)
            return false;

        const indexChapters = nextIndex[0];
        const indexLessons = nextIndex[1];

        this.setState({
            indexChapters: indexChapters,
            indexLessons: indexLessons
        })
    }

}

export default ControllerCourseDetail;