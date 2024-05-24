import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AppDispatch, StateType } from './redux/store'
import { decrease, increase, increaseByAmount, reset } from './redux/reuducer'

function App() {
  const value = useSelector((state: StateType) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()


  return (
    <>
      <div>
        <div>
          <h3>It's working!</h3>
        </div>
        <div>
          <h2>{value}</h2>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <button onClick={() => dispatch(increase())}>increase</button>
          <button onClick={() => dispatch(decrease())}>decrease</button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <button onClick={() => dispatch(increaseByAmount(10))}>increase by 10</button>
        </div>
      </div>
    </>
  )
}

export default App
