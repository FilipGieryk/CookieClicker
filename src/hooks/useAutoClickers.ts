import { useEffect, useRef } from "react";
import type {Upgrade} from '../App'

type onAutoClick = (upgrade:Upgrade) => void

const useAutoClickers= (upgrades:Upgrade[], onAutoClick:onAutoClick): void => {
  const intervalRefs = useRef<Record<string, number>>({});

  useEffect(() => {
    // set new intervals for each auto-upgrade
    upgrades.forEach((upgrade) => {
      if (upgrade.type === "automatic" && upgrade.level > 0) {
        const id = upgrade.id;

        // Start an interval for this upgrade
        intervalRefs.current[id] = window.setInterval(() => {
          onAutoClick(upgrade);
        }, upgrade.interval);
      }
    });

    // Clean up when upgrades change
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
      intervalRefs.current = {};
    };
  }, [upgrades, onAutoClick]);
}

export default useAutoClickers;
