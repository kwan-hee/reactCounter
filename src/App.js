import { useState } from "react";
import "./App.css";
import Box from "./component/Box"


function App() {
  let counter = 0;;
  const [counter2,setCounter2] = useState(0)
  const increase =()=>{                               /* 변수는 값이 금방 바뀌지만 스테이트는 비동기적이기 때문에
                                                        늦게 값이 변한다.        */
    counter = counter+1;
    setCounter2(counter2 + 1) // state 바꾸는 함수가 바로 실행 되는게 아니라 함수가 끝날때 까지 기다렸다가 state
                              // 바꾸는 함수들을 모아서 한번에 실행한다. 
    console.log("counter는", counter,"counter2는",counter2);
  }

    //1. 유저가 버튼을 클릭한다.
    //2. counter +1 해서 1이됨
    //3. setState 함수 호출
    //4. console.log 실행됨
    //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
    //6. app이 다시 re rendering 하고 
    //7. let counter = 0을 거치면서 counter 값은 다시 0으로 초기화가 된다. 
    //8. update 된 state 값이 보인다. 

  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}
export default App;
