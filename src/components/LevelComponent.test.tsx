import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { LevelComponent } from "./LevelComponent"

test('Renders LevelComponent correctly', ()=>{
    render(<LevelComponent/>);

    expect(screen.getByText("Level")).toBeInTheDocument();
})