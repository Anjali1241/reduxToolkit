import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../apiFunction/fetch'

function DataList() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.fetchApi)
    console.log(items)
    const status = useSelector((state) => state.status)
    console.log("dfdv",status)
    const error = useSelector((state) => state.error)

    // useEffect(() => {
    //     if (status == 'idle') {
    //         dispatch(fetchData())
    //     }
    // }, [dispatch, status])

    return (
        <div>
            <h1>DataList</h1>
            {status=="pending"&&<p>loading</p>}
            {status=="rejected"&&<p>Error:{error}</p>}
            {status=="succeeded"&&<p>items</p>}
            <button onClick={()=>dispatch(fetchData())}>click me</button>
            </div>
    )
}

export default DataList