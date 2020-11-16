import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//Redux State
import { connect } from 'react-redux'
//Combined Actions 
import * as actions from '../../store/actions/actions'

class Counter extends Component {
   

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 10" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubract} />
                <hr />
                <button onClick = {() => this.props.onStore(this.props.ctr)}>Store</button>
                <ul>
                    {
                        this.props.results.map(item =>
                        {
                            return <li
                                key={item.id}
                                onClick={() => this.props.onDelete(item.id)}>
                                {item.value}
                            </li>

                        })
                    }
                </ul>
            </div>
        );
    }
} 

const mapStateToProps = state =>
{
    return {
        ctr: state.ctr.counter,
        results:state.res.results
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
        onAdd: () => dispatch(actions.add(10)),
        onSubract: () => dispatch(actions.subract(15)),
        onStore: (globalState) => dispatch(actions.storeResult(globalState)),
        onDelete: (id) => dispatch(actions.deleteResult(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);