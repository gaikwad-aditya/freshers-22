const initState = {webState: {id: "", fName: "User", isLogin: false, }} 


const rootReducer = (state = initState, action)=>{
  if(action.type === "ADD_DETAIL"){
    const webState = action.detail
    return {
      ...state,
      webState
    }
  }
  return state
}

export default rootReducer