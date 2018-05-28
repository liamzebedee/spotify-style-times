spotify-style-times
===================

Generate Spotify-style timestamps like '5m' and '3h'. Always selects the most minimalist approximation of the time (ie. largest unique unit of time). Supports timing down to the millsecond.

## Install
`yarn install spotify-style-times`

## Usage
See src/example.js for a full example.

```javascript
import spotifyStyleTime from 'spotify-style-times';
import moment from 'moment';

let exampleDate = moment().subtract(2, 'm');
spotifyStyleTime(exampleDate); // 2m
```