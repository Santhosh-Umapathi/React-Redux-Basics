import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//Redux State
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

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
        onIncrement: () => dispatch({ type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type:actionTypes.DECREMENT}),
        onAdd: () => dispatch({type:actionTypes.ADD, payload: 10}),
        onSubract: () => dispatch({ type: actionTypes.SUBRACT, payload: 15 }),
        onStore: (globalState) => dispatch({type:actionTypes.STORE, payload:globalState}),
        onDelete: (id) => dispatch({type:actionTypes.DELETE, payload:id}),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);