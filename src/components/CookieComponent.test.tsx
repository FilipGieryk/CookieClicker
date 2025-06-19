import { render,screen } from "@testing-library/react";
import { CookieComponent } from "./CoockieComponent"

test('Renders Cookie Component Correctly', ()=>{

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
    const mockSetClicks = jest.fn()


    render(<CookieComponent upgrades={mockUpgrades} setClicks={mockSetClicks}/>)

    expect(screen.getByText('cookie')).toBeInTheDocument();
})