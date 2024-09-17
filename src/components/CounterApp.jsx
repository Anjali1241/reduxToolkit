import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../Slices/CounterSlice"

function CounterApp() {
  const dispatch = useDispatch()
  const stateValue = useSelector((state) => state.counter.value)
  return (
    <>
      <h1>Counter App using redux-toolkit</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{stateValue}</p>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </>
  )
}

export default CounterApp