import $ from 'jquery';

// event handler
const EventHandlerItem = {
    itemClick(evt) {
        $('.navigation-login ul li').removeClass('active');
        evt.target.className = 'active';
    }
}

export default EventHandlerItem;