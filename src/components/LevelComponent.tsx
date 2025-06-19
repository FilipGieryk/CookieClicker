import { useEffect} from "react";
import type { Level } from '../App';

interface Props{
  level: Level;
  setLevel: React.Dispatch<React.SetStateAction<Level>>;
  clicks: number;
}

export const LevelComponent:React.FC<Props> = ({level,setLevel, clicks}) =>{

        useEffect(() => {
          setLevel((prev) => {
            if (clicks < prev.treshold) return prev; 

            let { level:currLevel, treshold, points } = prev;

            while (clicks >= treshold) {
              currLevel += 1;
              points += 1;
              treshold *= 2;
            }

            return { ...prev, level:currLevel, treshold, points };
          });
        }, [clicks]);

return(
<>
    <div className="absolute bottom-20 flex justify-center flex-col translate-[-50%]">
        <div>level {level.level}</div>
        <div className="w-100 border-2 h-10 overflow-hidden">
          {clicks > 0 && (
              <div
              style={{
                  width: `${Math.min(
                      (clicks / level.treshold) * 100,
                      100
                    )}%`,
                    height: `100%`,
                    backgroundColor: `limegreen`,
                    transition: `width 0.3s ease`,
                }}
                />
            )}
        </div>
        <div>
          {clicks}/{level.treshold}
        </div>
      </div>
</>
    )
}