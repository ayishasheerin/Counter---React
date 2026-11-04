
import React from "react"
import { useState } from "react"
import "./Counter.css"

function Counter() {

    var [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter_container">
            <h1>Counter Application</h1>
            <h2>{count}</h2>
              <div className="button_container">
                 <button className="increment_btn" onClick={increment}>Increment</button>
                  <button className="decrementbtn" onClick={decrement}>Decrement</button>
                   <button className="resetbtn" onClick={reset}>Reset</button>
                    </div>

            {count === 0 && (
                <p className="message">Minimum limit reached</p>
            )}

        </div>
    )
}

export default Counter
