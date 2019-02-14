# fishbone-chart

> Get a fishbone chart as a react component.

[![NPM](https://img.shields.io/npm/v/fishbone-chart.svg)](https://www.npmjs.com/package/fishbone-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![fishbonechart](https://user-images.githubusercontent.com/43149895/52816613-6cc04d80-3080-11e9-9f65-1782bef39c51.png)

## Install

```bash
npm install --save fishbone-chart
```

## Usage

```jsx 
import React, { Component } from 'react'

import FishboneChart from 'fishbone-chart'

class Example extends Component {
  render () {
    const data = {
      'Bad coffee': {
        'Procedures': ['Too much water', 'Too many grounds', 'Lack of training'],
        'Equipment': ['Dirty cups', 'Coffee not hot enough', 'Dirty basket'],
        'Material': ['Bad sugar', 'Lids do not fit cup', 'Bad cream'],
        'People': ['Wrong fee', 'No training', 'Rude'],
        'Machine': ['Not working', 'Deregulated', 'Dirty']
      }
    }

    return (
      <FishboneChart data={data} />
    )
  }
}
```

## License

MIT © [thiagoferrax](https://github.com/thiagoferrax)
# fishbone-chart
