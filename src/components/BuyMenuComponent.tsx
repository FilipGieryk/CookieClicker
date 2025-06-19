import { useState } from "react";
import type {Upgrade, Perk, Level} from '../App'

interface Props{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  upgrades: Upgrade[];
  setUpgrades: React.Dispatch<React.SetStateAction<Upgrade[]>>;
  perks: Perk[];
  setPerks: React.Dispatch<React.SetStateAction<Perk[]>>;
  level: Level;
  setLevel: React.Dispatch<React.SetStateAction<Level>>;
}

export const BuyMenuComponent:React.FC<Props> = ({count, setCount, upgrades, setUpgrades,perks,setPerks,level,setLevel}) =>{

    const [shopInfo, setShopInfo] = useState("upgrades");



       const buy = (id: string) => {
    const itemToUpgrade = upgrades.find((u) => u.id === id);

    if (!itemToUpgrade) return;
    if (count < itemToUpgrade.cost) return;

    setCount((prevCount) => prevCount - itemToUpgrade.cost);
    setUpgrades((prevUpg) =>
      prevUpg.map((upg) =>
        upg.id === id
          ? {
              ...upg,
              level: upg.level + 1,
              cost: Math.floor(upg.cost * 1.5),
            }
          : upg
      )
    );
  };

  const buyPerk = (id: string) => {
    const perkToUpgrade = perks.find((p) => p.id === id);
    console.log(level);
    if (!perkToUpgrade) return;
    if (level.points < perkToUpgrade.cost) return;

    setLevel((prev) => ({ ...prev, points: prev.points - perkToUpgrade.cost }));
    setPerks((prev) =>
      prev.map((perk) =>
        perk.id === id
          ? { ...perk, level: perk.level + 1, cost: Math.floor(perk.cost * 2) }
          : perk
      )
    );
  };

  return(

      
      <aside className="h-full bg-amber-800 w-70 absolute top-0 right-0 flex flex-col">
        <div className="flex flex-row justify-around">
          <div className='bg-amber-100 w-full h-10' onClick={() => setShopInfo("upgrades")}>upgrades</div>
          <div className='bg-amber-300 w-full' onClick={() => setShopInfo("perks")}>perks</div>
        </div>
        {shopInfo === "upgrades" &&
          upgrades.map((val) => (
              <div
              key={val.id}
              className="flex justify-around bg-[#1d1b1b] h-15 text-center items-center hover:bg-[#2f2c2c]"
              onClick={() => buy(val.id)}>
              <div>{val.id}</div>
              <div>{val.level}</div>
              <div>{val.cost}</div>
            </div>
          ))}
        {shopInfo === "perks" &&
          perks.map((val) => (
              <div
              key={val.id}
              className="flex justify-around bg-[#1d1b1b] h-15 text-center items-center hover:bg-[#2f2c2c]"
              onClick={() => buyPerk(val.id)}>
              <div>{val.id}</div>
              <div>{val.level}</div>
              <div>{val.cost}</div>
            </div>
          ))}
      </aside>
        )
}