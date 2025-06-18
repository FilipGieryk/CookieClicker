import { render,screen } from "@testing-library/react";
import { CookieComponent } from "./CoockieComponent"

test('Renders Cookie Component Correctly', ()=>{
    render(<CookieComponent/>)

    expect(screen.getByText('cookie')).toBeInTheDocument();
})