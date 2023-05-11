import React, {useEffect} from 'react';
import {CardSuits, CardValues, ICard} from "./types/card";

import './App.css'
import {Hand} from "./ui/Hand/Hand";
import {createStack} from "./lib/createStack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {init} from "./redux/slices/gameSlice";

const App = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState)=>state.game)


    useEffect(()=>{
        dispatch(init())
    }, [])

  return (
      <div className={'table'}>
        <div className={'row'}>
          <Hand cards={state.player}/>
        </div>
      </div>
  );
};

export default App
