import React from 'react';
import './App.css';
import ComponentX from './Components/Context/ComponentX';

// import ComponentC from './Components/Context/ComponentC';

// import DataFetching from './Components/Effect Hook/DataFetching';
// import HookCounterOne from './Components/Effect Hook/HookCounterOne';
// import HookMouse from './Components/Effect Hook/HookMouse';
// import MouseContainer from './Components/Effect Hook/MouseContainer';
// import IntervalHookCounter from './Components/Effect Hook/IntervalHookCounter';
// import HookCounter3 from './Components/HookCounter3';
// import HookCounter4 from './Components/HookCounter4';
//import ClassCounter from './Components/ClassCounter';
// import HookCounter from './Components/HookCounter';
// import HookCounter2 from './Components/HookCounter2';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={'K3Yg1N'}>
        <ChannelContext.Provider value={'3v0luti0N'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      <UserContext.Provider value={'K3Yg1N'}>
        <ChannelContext.Provider value={'3v0luti0N'}>
          <ComponentX />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
