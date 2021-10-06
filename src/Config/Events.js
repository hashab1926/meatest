
function eventBindings(that, binds) {
    return binds.map((bind) => that[bind] = that[bind].bind(that));
}

module.exports = { eventBindings };