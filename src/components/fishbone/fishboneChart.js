import React, { Component } from 'react'
import Grid from '../layout/grid'
import './fishboneChart.css'

const INITIAL_STATE = {causes: undefined, effect: undefined, index: 0}

export default class FishboneChart extends Component {
    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
    }

    componentWillMount() { 
        const data = this.props.data
        if(data) {
            const effect = Object.keys(data)[this.state.index]            
            this.setState({causes: data[effect], effect})
        }        
    }

    render() {
        if (!this.state.causes) {
            return <React.Fragment></React.Fragment>
        }

        return (
            <Grid cols={this.props.cols}>
                <div className="fishboneChart">
                    {this.getCauses()}
                    {this.getEffect()}
                    {this.getLegend()}
                </div>
            </Grid >
        )
    }

    getTopCauses(causes) {
        const categories = Object.keys(causes)

        const middle = parseInt(categories.length / 2)
        const topArray = categories.slice(0, middle)

        const color = this.getColor(this.state.index)
        const topCauses = topArray.map((category, index) => {
            return (
                <div key={`top_causes_${category}_${index}`} className="causeContent">
                    <div className={`cause top ${color}_ ${color}Border`}>
                        {category}
                    </div>
                    <div className="causeAndLine">
                        {this.getRootCauses(causes[category])}
                        <div className={`diagonalLine ${color}TopBottom`}/>
                    </div>
                </div>
            )
        })

        return (<div className="causesGroup">{topCauses}</div>)
    }

    getRootCauses(rootCauses) {
        const causes = rootCauses.map((rootCause, index) => {
            return (<div key={`root_causes_${rootCause}_${index}`}>{rootCause}</div>)
        })
        return (<div className="rootCauses">{causes}</div>)
    }

    getBottomCauses(causes) {
        const categories = Object.keys(causes)

        const middle = parseInt(categories.length / 2)
        const bottomArray = categories.slice(middle)

        const color = this.getColor(this.state.index)

        const bottomCauses = bottomArray.map((category, index) => {
            return (
                <div key={`bottom_causes_${category}_${index}`}
                    className="causeContent">
                    <div className="causeAndLine">
                        {this.getRootCauses(causes[category])}
                        <div className={`diagonalLine ${color}BottomTop`}/>
                    </div>
                    <div className={`cause bottom ${color}_ ${color}Border`}>
                        {category}
                    </div>
                </div>
            )
        })

        return (<div className="causesGroup">{bottomCauses}</div>)
    }

    getCauses() {
        const causes = this.state.causes
        const color = this.getColor(this.state.index)
        return (
            <div className="causes">
                {this.getTopCauses(causes)}
                <div className={`lineEffect ${color}Border`} />
                {this.getBottomCauses(causes)}
            </div>
        )
    }

    getEffect() {        
        const color = this.getColor(this.state.index)
        return (
            <div className="effect">
                <div className={`effectValue left ${color}_ ${color}Border`}>
                    {this.state.effect}
                </div>
            </div>
        )
    }

    selectDataset(index) {
        const data = this.props.data
        if(data) {
            const effect = Object.keys(data)[index]            
            this.setState({causes: data[effect], effect, index})
        }
    }

    getLegend() {        
        const labels = Object.keys(this.props.data)

        if(labels.length <= 1) {
            return
        }

        const labelsDivs = labels.map((label, index) => {
            const labelClass = index === this.state.index ? 'label_' : 'labelLineThrough'
            const color = this.getColor(index)
            return (
                <div key={`labels_${label}_${index}`} className="legendLabel" onClick={() => this.selectDataset(index)}>
                    <div className={`labelSquare legend all ${color}_dark ${color}Border`} />
                    <div className={labelClass}>{label}</div>
                </div>
            )
        })

        return (
            <div className="legend">
                {labelsDivs}
            </div>
        )
    }

    getColor(index) {
        const colors = [
            'blue',
            'pink',
            'gray',
            'green',            
            'blue_two',            
            'orange',
            'black',            
            'purple'
        ]
    
        if (index >= colors.length) {
            index -= colors.length
        }

        return colors[index]
    }
}