import $ from 'jquery';

const ControllerItem = {
    itemClick(evt) {
        $('.navigation-login ul li').removeClass('active');
        evt.target.className = 'active';
    }
}

export default ControllerItem;