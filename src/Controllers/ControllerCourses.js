import Api from '../Helpers/Api';
const ControllerCourses = {
    async getDataCourses() {
        try {
            const userId = sessionStorage.getItem('user_id');

            const response = await Api.get(`user/${userId}/courses/active`);

            this.setState({
                courses: response.data
            })
        } catch (error) {
            throw error;
        }
    },

    nextDetailCourse(event) {

    }
}

export default ControllerCourses;