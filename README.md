# fishbone-chart
> 

Get a fishbone chart as a react component.

[![NPM](https://img.shields.io/npm/v/fishbone-chart.svg)](https://www.npmjs.com/package/fishbone-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>

![fishbonechart](https://user-images.githubusercontent.com/43149895/54030834-a40bb100-418b-11e9-8c41-2706b4ea0307.gif)

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
      },
      'Security Incident': {
        'Technology': ['Weak encryption', 'No technology for remote data destruction'],
        'Process': ['No process for reporting incident'],
        'People': ['Worker lost laptop', 'Distraction was a factor'],
        'Controls': ['Week password policy', 'No audit trail of the laptop information'],
        'Procedure': ['No procedure for securing laptop at public locations'],
        'Environment': ['No place to secure laptop overnight at workplace']
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
