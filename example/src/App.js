import React, { Component } from 'react'

import FishboneChart from 'fishbone-chart'

export default class App extends Component {

  render() {
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
      <div style={{ width: 800, margin: "15px auto" }}>
        <h1>FishboneChart Example</h1>
          <FishboneChart data={data} />
      </div>
    )
  }
}
