import {useMemo, useState } from "react";
import useAutoClickers from "../hooks/useAutoClickers";
import type {Upgrade} from '../App'

interface Props{
  upgrades:Upgrade[];
  setClicks: React.Dispatch<React.SetStateAction<number>>;
}


export const CookieComponent:React.FC<Props> = ({upgrades, setClicks}) => {
    const [count, setCount] = useState(1000);

      const clickPower = useMemo(() => {
        const manualClick = upgrades.find((u) => u.id === "manual-click");
        return manualClick ? manualClick.level * (manualClick?.baseMultiplayer ?? 1) : 0;
      }, [upgrades]);
    
      const incrementClick = (amount:number) => {
        setClicks((prev) => (prev + amount ));
        setCount((prev) => prev + amount);
      };

        useAutoClickers(upgrades, (upgrade:Upgrade) => {
          incrementClick(upgrade.level);
        });

    

      


return(

    <div className='translate-x-[-50%]' onClick={() => incrementClick(clickPower)}>
      <img width={'200px'} src="cookie.svg"/>
        <p>points : {count}</p>
    </div>
)
}