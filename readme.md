# add-days

Add or subtract days from a date (without modifying the original date)

## Install

```sh
npm install add-days
```

## Usage

```js
const addDays = require('add-days');

const today = new Date();
const tomorrow = addDays(today, 1);
// today.toISOString() => '1985-09-25T00:00:00.000Z'
// tomorrow.toISOString() => '1985-09-26T00:00:00.000Z' 
```

## API

### addDays(date, days)

#### date

Type: `Date` _(required)_

#### days

Type: `Number` _(required)_

## License

MIT
