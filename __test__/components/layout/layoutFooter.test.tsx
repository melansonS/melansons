import {render, screen} from '@testing-library/react'
import LayoutFooter from '@components/layout/layoutFooter'
import {links} from '@utils/navConsts'
import '@testing-library/jest-dom'

describe('Layout Footer', () => {
    it('renders the Footer', async () => {
        render(<LayoutFooter bareBones={false}/>)

        const element = screen.getByRole('heading', {name: /melanson\[s\]/i})
        const link = screen.getByText(links[0].name).closest('a')
        expect(link).toHaveAttribute('href', links[0].href)
        expect(element).toBeInTheDocument()
        
    })
    it('to not render extra links when passed barebones prop', () => {
        const barebonesLinks = ['Github', 'LinkedIn']
        render(<LayoutFooter bareBones={true}/>)

        const link0 = screen.queryByText(links[0].name)
        const link1 = screen.queryByText(links[1].name)
        const link2 = screen.queryByText(links[2].name)

        expect(link0).not.toBeInTheDocument()
        expect(link1).not.toBeInTheDocument()
        expect(link2).not.toBeInTheDocument()

        const barebonesLink0 = screen.getByText(barebonesLinks[0])
        const barebonesLink1 = screen.getByText(barebonesLinks[1])
    
        expect(barebonesLink0).toBeInTheDocument()
        expect(barebonesLink1).toBeInTheDocument()
    })

})