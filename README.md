# fishbone-chart

> Get a fishbone chart as a react component.

[![NPM](https://img.shields.io/npm/v/fishbone-chart.svg)](https://www.npmjs.com/package/fishbone-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![fishbonechart](https://user-images.githubusercontent.com/43149895/52946759-9ebd0280-3353-11e9-9dbd-d4188d5ec6a5.gif)

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
      },
      'Scrum not working': {
        'Principles': ['Functional software (SW) is not released'],
        'Product Owner (PO)': ['No authority to prioritize', 'Poor interaction with the team'],
        'Sprint': ['SW not released for validation', 'Sprint speed is not measured', 'Team is controlled from outside'],
        'Planning': ['PO does not explain the backlog'],
        'Development Team': ['Members dedicated to specific roles', 'Does not deliver what was promised'],
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
