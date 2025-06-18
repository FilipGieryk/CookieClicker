import { useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CookieComponent } from "./components/CoockieComponent";
import { LevelComponent } from "./components/LevelComponent";
import { BuyMenuComponent } from "./components/BuyMenuComponent";

// function useAutoClickers(upgrades, onAutoClick) {
//   const intervalRefs = useRef({});

//   useEffect(() => {
//     // set new intervals for each auto-upgrade
//     upgrades.forEach((upgrade) => {
//       if (upgrade.type === "automatic" && upgrade.level > 0) {
//         const id = upgrade.id;

//         // Start an interval for this upgrade
//         intervalRefs.current[id] = setInterval(() => {
//           onAutoClick(upgrade);
//         }, upgrade.interval);
//       }
//     });

//     // Clean up when upgrades change
//     return () => {
//       Object.values(intervalRefs.current).forEach(clearInterval);
//       intervalRefs.current = {};
//     };
//   }, [upgrades]);
// }

function App() {
  const [count, setCount] = useState(1000);
  // const [shopInfo, setShopInfo] = useState("upgrades");
  const [clicks,setClicks] = useState(0);
  const [level, setLevel] = useState({
    level: 0,
    treshold: 100,
    points: 0,
  });

  // useEffect(() => {
  //   setLevel((prev) => {
  //     let { level, clicks, treshold, points } = prev;
  //     while (clicks >= treshold) {
  //       level += 1;
  //       points += 1;
  //       treshold *= 2;
  //     }
  //     return { ...prev, level, treshold, points };
  //   });
  // }, [level.clicks]);
  // upgrades state
  const [upgrades, setUpgrades] = useState([
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

  const [perks, setPerks] = useState([
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
  const perkEffects = {
    strongerClick: (state, level) => ({ ...state, power: (state.power + level) }),
    strongerAutomation: (state, level) => ({ ...state, power: (state.power + level) }),
    fasterAutomation: (state, level) => ({ ...state, speed: (state.speed + level) }),
  };
  const activePerks = useMemo(() => perks.filter(perk => perk.level >0),[perks]);

  const applyPerks = (state,activePerks) =>{
    return activePerks.reduce((updated,perk) =>{
      const effectFn = perkEffects[perk.id]
      if (!effectFn) return updated
      return effectFn(updated, perk.level);
    },state);
  }

  const finalState = useMemo(() =>
  applyPerks(upgrades,perks),[upgrades,perks])
  // functino for buying upgrades
  // const buy = (id) => {
  //   const itemToUpgrade = upgrades.find((u) => u.id === id);

  //   if (!itemToUpgrade) return;
  //   if (count < itemToUpgrade.cost) return;

  //   setCount((prevCount) => prevCount - itemToUpgrade.cost);
  //   setUpgrades((prevUpg) =>
  //     prevUpg.map((upg) =>
  //       upg.id === id
  //         ? {
  //             ...upg,
  //             level: upg.level + 1,
  //             cost: Math.floor(upg.cost * 1.5),
  //           }
  //         : upg
  //     )
  //   );
  // };

  // const buyPerk = (id) => {
  //   const perkToUpgrade = perks.find((p) => p.id === id);
  //   console.log(level);
  //   if (!perkToUpgrade) return;
  //   if (level.points < perkToUpgrade.cost) return;

  //   setLevel((prev) => ({ ...prev, points: prev.points - perkToUpgrade.cost }));
  //   setPerks((prev) =>
  //     prev.map((perk) =>
  //       perk.id === id
  //         ? { ...perk, level: perk.level + 1, cost: Math.floor(perk.cost * 2) }
  //         : perk
  //     )
  //   );
  // };

  // const clickPower = useMemo(() => {
  //   const manualClick = upgrades.find((u) => u.id === "manual-click");
  //   return manualClick.level * manualClick?.baseMultiplayer;
  // }, [upgrades]);

  // useAutoClickers(upgrades, (upgrade) => {
  //   incrementClick(upgrade.level);
  // });

  // const incrementClick = (amount) => {
  //   setLevel((prev) => ({ ...prev, clicks: prev.clicks + amount }));
  //   setCount((prev) => prev + amount);
  // };

  return (
    // <>
    //   <aside className="h-full bg-amber-800 w-70 absolute top-0 right-0 flex flex-col gap-5">
    //     <div className="flex flex-row justify-start gap-10">
    //       <div onClick={() => setShopInfo("upgrades")}>upgrades</div>
    //       <div onClick={() => setShopInfo("perks")}>perks</div>
    //     </div>
    //     {shopInfo === "upgrades" &&
    //       upgrades.map((val) => (
    //         <div
    //           key={val.id}
    //           className="flex justify-around bg-[#1d1b1b] h-15 text-center items-center hover:bg-[#2f2c2c]"
    //           onClick={() => buy(val.id)}>
    //           <div>{val.id}</div>
    //           <div>{val.level}</div>
    //           <div>{val.cost}</div>
    //         </div>
    //       ))}
    //     {shopInfo === "perks" &&
    //       perks.map((val) => (
    //         <div
    //           key={val.id}
    //           className="flex justify-around bg-[#1d1b1b] h-15 text-center items-center hover:bg-[#2f2c2c]"
    //           onClick={() => buyPerk(val.id)}>
    //           <div>{val.id}</div>
    //           <div>{val.level}</div>
    //           <div>{val.cost}</div>
    //         </div>
    //       ))}
    //   </aside>
    //   <div onClick={() => incrementClick(clickPower)}>cokie</div>
    //   <div className="absolute bottom-20 flex justify-center flex-col translate-[-50%]">
    //     <div>level {level.level}</div>
    //     <div className="w-100 border-2 h-10 overflow-hidden">
    //       {level.clicks > 0 && (
    //         <div
    //           style={{
    //             width: `${Math.min(
    //               (level.clicks / level.treshold) * 100,
    //               100
    //             )}%`,
    //             height: `100%`,
    //             backgroundColor: `limegreen`,
    //             transition: `width 0.3s ease`,
    //           }}
    //         />
    //       )}
    //     </div>
    //     <div>
    //       {level.clicks}/{level.treshold}
    //     </div>
    //   </div>
    //   <p>points : {count}</p>
    // </>
    <>
    <CookieComponent upgrades={upgrades} setClicks={setClicks}/>
    <LevelComponent level={level} setLevel={setLevel} clicks={clicks}/>
    <BuyMenuComponent count={count} setCount={setCount} upgrades={upgrades} setUpgrades={setUpgrades} perks={perks} setPerks={setPerks} level={level} setLevel={setLevel}/>
    </>
  );
}

export default App;

// have level go to one if it hits treshold
// in object have fucntonp that calculate if count is above treshold have treshold multiply by 2 and change level to +1
