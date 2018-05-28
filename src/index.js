import moment from 'moment';
import _ from 'underscore';

export default function(time) {
    if(!(time instanceof Date)) throw new Error("time must be a date");

    let ago = moment.duration(moment().diff(time));
    
    let times = [ago.years(), ago.weeks(), ago.days(), ago.hours(), ago.minutes(), ago.seconds(), ago.milliseconds(), 1]
    let fmts = ['y', 'w', 'd', 'h', 'm', 's', 'ms', 'now']
    let i = _.findIndex(times, x => x != 0);

    return `${times[i]}${fmts[i]}`;
}