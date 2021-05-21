import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


const initialState = {
    loading: true,
    post: {},
    error: ' '

}

const reducer = (state, action) => {//action properties are defined in dispatch()
    console.log("action.type",action.type)
    switch (action.type) { 
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,//payload is in dispatch()
                error: ''
            }
        case 'FETCH_FAIL':
            return {
                loading: false,
                post: {},
                error: 'Error happened'
            }

            default:
              return  state
    }

}

export default function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("current state2",state)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log("res",res)
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: res.data
                }
                )

            })
            .catch(error => {
                console.log("error",error)
                dispatch({
                    loading: false,
                    type: 'FETCH_FAIL',


                }
                )

            })
    },[])
    return (
        <div>
            <div>
                {console.log("current state",state)}
                {state.loading ? 'Loading' : state.post.title}
                {state.error ? state.error : null}
            </div>

        </div>
    )
}

//=============NOTE ============
//study again anad again



//================ref==============================
//React Hooks Tutorial - 24 - Fetching data with useReducer Part 2
