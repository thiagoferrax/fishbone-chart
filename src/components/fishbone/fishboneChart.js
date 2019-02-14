import React from 'react'
import Grid from '../layout/grid'
import './fishboneChart.css'

const getTopCauses = (causes) => {
    const categories = Object.keys(causes)

    const middle = parseInt(categories.length / 2)
    const topArray = categories.slice(0, middle + 1)

    const topCauses = topArray.map((category, index) => {
        return (
            <div key={`top_causes_${category}_${index}`} className="causeContent">
                <div className="cause top">
                    {category}
                </div>
                <div className="causeAndLine">
                    {getRootCauses(causes[category])}
                    <div className="lineCauseTop" />
                </div>
            </div>
        )
    })

    return (<div className="causesGroup">{topCauses}</div>)
}

const getRootCauses = (rootCauses) => {
    const causes = rootCauses.map((rootCause, index) => {
        return (<div key={`root_causes_${rootCause}_${index}`}>{rootCause}</div>)
    })
    return (<div className="rootCauses">{causes}</div>)
}

const getBottomCauses = (causes) => {
    const categories = Object.keys(causes)

    const middle = parseInt(categories.length / 2)
    const topArray = categories.slice(middle + 1)

    const bottomCauses = topArray.map((category, index) => {
        return (
            <div key={`bottom_causes_${category}_${index}`} 
            className="causeContent">
                <div className="causeAndLine">
                    {getRootCauses(causes[category])}
                    <div className="lineCauseBottom" />
                </div>
                <div className="cause bottom">
                    {category}
                </div>
            </div>
        )
    })

    return (<div className="causesGroup">{bottomCauses}</div>)
}

const getCauses = (props) => {
    const causes = Object.values(props.data)[0]

    return (
        <div className="causes">
            {getTopCauses(causes)}
            <div className="lineEffect" />
            {getBottomCauses(causes)}
        </div>
    )
}

const getEffect = (props) => {
    const effect = Object.keys(props.data)[0]
    return (
        <div className="effect">
            <div className="effectValue">
                {effect}
            </div>
        </div>
    )
}

export default props => {
    console.log('fishboneChart', props.data)
    if (!props.data) {
        return <React.Fragment></React.Fragment>
    }

    return (
        <Grid cols={props.cols}>
            <div className="fishboneChart">
                {getCauses(props)}
                {getEffect(props)}
            </div>
        </Grid >
    )
}