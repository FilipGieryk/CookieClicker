import { render,screen } from "@testing-library/react";
import { BuyMenuComponent } from "./BuyMenuComponent"

test('BuyMenuComponent is displayed correctly', ()=>{

    const mockCount = 10;
    const mockSetCount = jest.fn();
    const mockUpgrades = [{        
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
    ]
    const mockSetUpgrades = jest.fn();
    const mockPerks = [
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
    ]
    const mockSetPerks = jest.fn()
    const mockLevel = {
         level: 0,
    treshold: 100,
    points: 0,
    }
    const mockSetLevel = jest.fn();

    render(<BuyMenuComponent count={mockCount} setCount={mockSetCount} upgrades={mockUpgrades} setUpgrades={mockSetUpgrades} perks={mockPerks} setPerks={mockSetPerks} level={mockLevel} setLevel={mockSetLevel}/>)

    expect(screen.getByText('Upgrades')).toBeInTheDocument();
})


