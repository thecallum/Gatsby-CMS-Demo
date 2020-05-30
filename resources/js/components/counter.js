import React, {useState} from 'react'
import { connect } from 'react-redux'

import { add } from '../redux/actions/main'

const Counter = ({ state, addOne }) => {
    const [amount, setAmount] = useState(1)

    return (
        <div>
            <h1>Counter</h1>

            <p style={{
                background: 'hsl(183, 100%, 19%)',
                borderRadius: 5,
                padding: 15,
                color: 'white'

            }}>{ state.count || '0' }</p>

            <input type="number" name="" id="" placeholder={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />

            <button onClick={() => addOne(amount)}>{amount >= 0 ? 'Add' : 'Subtract'} {Math.abs(amount)}</button>
        </div>
    )
}

const mapStateToProps = ({ main }) => ({
    state: {
        count: main.count
    }
})


const mapDispatchToProps = (dispatch) => ({
    addOne: (value = 1) => {
        dispatch(add(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);