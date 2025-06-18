import { render,screen } from "@testing-library/react";
import { BuyMenuComponent } from "./BuyMenuComponent"

test('BuyMenuComponent is displayed correctly', ()=>{
    render(<BuyMenuComponent/>)

    expect(screen.getByText('Upgrades')).toBeInTheDocument();
})