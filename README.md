**React Hooks**
----------------------------------------------------------------------------
**1.useState**

What is State?

The state is a built-in React object that is used to contain data or information about the component.

  

useState use cases:

 1. State management
 2. Conditional rendering
 3. Get API data and store it in state

Syntax:

    const [state, setState] = useState(initalValue);

----------------------------------------------------------------------------

  

**2.useEffect**

  

What is useEffect() in React?

The useEffect Hook allows you to perform side effects in your components. Side effects are: fetching data, directly updating the DOM, and timers.

Syntax:

    useEffect(()=>{},[])

  

----------------------------------------------------------------------------

  

**3.Why useContext?**

React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than passing the props down manually to each level.

Steps:

 1. Create Context
 2. Context Provider
 3. Fetch Value

Syntax:

    export const UserContext = createContext()
    
    <UserContext.Provider value={"Kishore"}>
    
    <Child />
    
    </UserContext.Provider>
    
    (import { UserContext } from "./App";) => import this context in need File
    
    const text = useContext(Context);

----------------------------------------------------------------------------

  

**4.useReducer**

  

What is useReducer?

Reducers are the pure functions that contain the logic and calculation that needed to be performed on the state.

  

Why do need useReducer?

Used for complex state manipulations and state transitions.

Syntax:

  

    const INITIAL_STATE = {
    
    loading : false,
    
    data : {},
    
    error : false
    
    }
    
      
    
    const reducerFunction = (state, action) => {
    
    switch (action.type){
    
    case "FETCH_START":
    
    return {
    
    loading : true,
    
    data : {},
    
    error : false
    
    }
    
    case "FETCH_SUCCESS":
    
    return {
    
    ...state,
    
    loading : false,
    
    data : action.payload
    
    }
    
    case "FETCH_ERROR":
    
    return {
    
    loading : false,
    
    data : {},
    
    error : true
    
    }
    
    default:
    
    return state
    
    }
    
    }
    
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)
    
    dispatch({type : "FETCH_START"}) => use in particular changes

----------------------------------------------------------------------------

**5. useCallback**

What is useCallback?

useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

  

UseCase of useCallback:

 1. To prevent unnecessary renders

Syntax:

    useCallback(()=>{},[])

----------------------------------------------------------------------------

  

**6.useMemo**

  

 1. Lets you to cache the result of a calulation between re-render
 2. Returns a memoized values
 3. Function should Pure Function

Syntax:

    useMemo(()=>{},[])

  

----------------------------------------------------------------------------

  

**7.useRef**

The useRef Hook allows you to persist values between renders.

  

Usecase:

 1. It can be used to store a mutable value that does not cause a
    re-render when updated.
 2. It can be used to access a DOM element directly.

Syntax:

    const Ref = useRef()
    
    To Access => Ref.current

----------------------------------------------------------------------------

  

**8.useImperativeHandle**

useImperativeHandle allows you to pass values and functions from a Child component back up to a Parent using a ref.

=> useImperativeHandle should be used with forwardRef.

  

Usage

 1. Exposing a custom ref handle to the parent component
 2. Exposing your own imperative methods

Syntax:

    useImperativeHandle(ref,()=>{},[])

----------------------------------------------------------------------------

  

**9.useLayoutEffect => synchronously re-render**

useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

Syntax:

    useLayoutEffect(()=>{},[])

----------------------------------------------------------------------------

  

10.
