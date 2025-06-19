import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { LevelComponent } from "./LevelComponent"

test('Renders LevelComponent correctly', ()=>{
    const mockLevel = {
        level:1,
        treshold:10,
        points:0
    }
    const mockSetLevel = jest.fn()
    const mockClicks = 5;
    render(<LevelComponent level={mockLevel} setLevel={mockSetLevel} clicks={mockClicks}/>);

    expect(screen.getByText("Level")).toBeInTheDocument();
})