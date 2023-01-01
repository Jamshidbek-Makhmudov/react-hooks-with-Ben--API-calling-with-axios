// import Call from "./components/callApi 2/Call"
// import CallApi from "./components/callApi/CallApi"

import UseContextHook from "./components/hooks/useContextHook/UseContextHook"
import UseEffectHook from "./components/hooks/UseEffectHook"
import UseImperativeHandleHook from "./components/hooks/useImperativeHandleHook/UseImperativeHandleHook"
import UseLayoutEffectHook from "./components/hooks/UseLayoutEffectHook"
import UseReducerHook from "./components/hooks/UseReducerHook"
import UseRefHook from "./components/hooks/UseRefHook"

const Root = () => {
  return (
    <div>
      {/* <CallApi /> */}
      {/* <Call /> */}
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
      <UseLayoutEffectHook />
      <UseImperativeHandleHook />
      <UseContextHook />
    </div>
  )
}
export default Root
