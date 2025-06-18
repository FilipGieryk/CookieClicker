import { useEffect, useMemo, useState } from "react";
import useAutoClickers from "../hooks/useAutoClickers";


export const CookieComponent = ({upgrades, setClicks}) => {
    const [count, setCount] = useState(1000);

      const clickPower = useMemo(() => {
        const manualClick = upgrades.find((u) => u.id === "manual-click");
        return manualClick.level * manualClick?.baseMultiplayer;
      }, [upgrades]);
    
      const incrementClick = (amount) => {
        setClicks((prev) => (prev + amount ));
        setCount((prev) => prev + amount);
      };
          useAutoClickers(upgrades, (upgrade) => {
        incrementClick(upgrade.level);
      });

    

      


return(

    <div onClick={() => incrementClick(clickPower)}>cookie
        <p>points : {count}</p>
    </div>
)
}