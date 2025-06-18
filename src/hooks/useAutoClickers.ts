import { useEffect, useRef } from "react";

const useAutoClickers = (upgrades, onAutoClick) => {
  const intervalRefs = useRef({});

  useEffect(() => {
    // set new intervals for each auto-upgrade
    upgrades.forEach((upgrade) => {
      if (upgrade.type === "automatic" && upgrade.level > 0) {
        const id = upgrade.id;

        // Start an interval for this upgrade
        intervalRefs.current[id] = setInterval(() => {
          onAutoClick(upgrade);
        }, upgrade.interval);
      }
    });

    // Clean up when upgrades change
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
      intervalRefs.current = {};
    };
  }, [upgrades]);
}

export default useAutoClickers;
