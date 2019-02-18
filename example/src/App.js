import React, { Component } from 'react'

import FishboneChart from 'fishbone-chart'

export default class App extends Component {

  render() {
    const data = {
      'Bad Coffee': {
        'Procedures': ['Too much water', 'Too many grounds', 'Lack of training'],
        'Equipment': ['Dirty cups', 'Coffee not hot enough', 'Dirty basket'],
        'Material': ['Bad sugar', 'Lids do not fit cup', 'Bad cream'],
        'People': ['Wrong fee', 'No training', 'Rude'],
        'Machine': ['Not working', 'Deregulated', 'Dirty']
      },
      'Bad Scrum': {
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
      <div style={{ width: 1100, margin: "15px auto" }}>
        <h1>FishboneChart Example</h1>
        <hr/>
        <br/>
        <FishboneChart data={data} />
      </div>
    )
  }
}
