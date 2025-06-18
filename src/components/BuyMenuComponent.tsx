import { useState } from "react";

export const BuyMenuComponent = ({count, setCount, upgrades, setUpgrades,perks,setPerks,level,setLevel}) =>{

    const [shopInfo, setShopInfo] = useState("upgrades");



       const buy = (id) => {
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

  const buyPerk = (id) => {
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

      
      <aside className="h-full bg-amber-800 w-70 absolute top-0 right-0 flex flex-col gap-5">
        <div className="flex flex-row justify-start gap-10">
          <div onClick={() => setShopInfo("upgrades")}>upgrades</div>
          <div onClick={() => setShopInfo("perks")}>perks</div>
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