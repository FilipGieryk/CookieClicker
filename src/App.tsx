import {useState } from "react";

import "./App.css";

import { CookieComponent } from "./components/CoockieComponent";
import { LevelComponent } from "./components/LevelComponent";
import { BuyMenuComponent } from "./components/BuyMenuComponent";

  export interface Level {
    level: number;
    treshold: number;
    points: number;
  }

  export  interface Upgrade {
    id: string;
    type: string;
    level: number;
    baseMultiplayer?:number;
    interval?:number
    cost: number;
  }

  export interface Perk{
    id: string;
    level: number;
    cost: number;
  }
function App() {


// all states
  const [count, setCount] = useState<number>(1000);
  const [clicks,setClicks] = useState<number>(0);

  const [level, setLevel] = useState<Level>({
    level: 0,
    treshold: 100,
    points: 0,
  });

  const [upgrades, setUpgrades] = useState<Upgrade[]>([
    {
      id: "manual-click",
      type: "manual",
      level: 1,
      baseMultiplayer: 2,
      cost: 50,
    },
    {
      id: "automatic-clicker",
      type: "automatic",
      level: 0,
      interval: 2000,
      cost: 200,
    },
    {
      id: "second-automatic-clicker",
      type: "automatic",
      level: 0,
      interval: 4000,
      cost: 400,
    },
  ]);

  const [perks, setPerks] = useState<Perk[]>([
    {
      id: "upgrade-clicks",
      level: 0,
      cost: 1,
    },
    {
      id: "upgrade-automatic-clicks",
      level: 0,
      cost: 1,
    },
  ]);

// perks
  // const perkEffects = {
  //   strongerClick: (state, level) => ({ ...state, power: (state.power + level) }),
  //   strongerAutomation: (state, level) => ({ ...state, power: (state.power + level) }),
  //   fasterAutomation: (state, level) => ({ ...state, speed: (state.speed + level) }),
  // };
  // const activePerks = useMemo(() => perks.filter(perk => perk.level >0),[perks]);

  // const applyPerks = (state,activePerks) =>{
  //   return activePerks.reduce((updated,perk) =>{
  //     const effectFn = perkEffects[perk.id]
  //     if (!effectFn) return updated
  //     return effectFn(updated, perk.level);
  //   },state);
  // }

  // const finalState = useMemo(() =>
  // applyPerks(upgrades,perks),[upgrades,perks])

  // perk value dodaje sie po kupieniu perka na nastepny lvl
  // perk cost tak samo
  // perk funkcja jest uzywana w zaleznosci ktory perk sie zmienil


  
  return (
    <>
    <CookieComponent upgrades={upgrades} setClicks={setClicks}/>
    <LevelComponent level={level} setLevel={setLevel} clicks={clicks}/>
    <BuyMenuComponent count={count} setCount={setCount} upgrades={upgrades} setUpgrades={setUpgrades} perks={perks} setPerks={setPerks} level={level} setLevel={setLevel}/>
    </>
  );
}

export default App;



