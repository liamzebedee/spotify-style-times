import spotifyStyleTime from '.';
import moment from 'moment';

let times = [
    moment().subtract(1, 's'),
    moment().subtract(2, 'm'),
    moment().subtract(3, 'h'),
]

let log = (x) => console.log(x);

times
    .map(x => x.toDate())
    .map(spotifyStyleTime)
    .map(log)