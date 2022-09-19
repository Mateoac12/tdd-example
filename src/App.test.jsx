import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import Calculator from './components/Calculator'

const signs = ['+', '-', '*', '/']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('Calculator', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculadora')
  })

  it('should render numbers from 0 to 9', () => {
    render(<Calculator />)

    numbers.forEach((num) => screen.getByText(num))
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render signs', () => {
    render(<Calculator />)

    signs.forEach((sign) => screen.getByText(sign))
  })

  it('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  it('should render a onlyRead input', () => {
    render(<Calculator />)

    const input = screen.getByRole('textbox')
    const hasReadOnly = input.hasAttribute('readonly')

    expect(hasReadOnly).toBe(true)
  })

  it('should user click a number and see it in the input', () => {
    render(<Calculator />)

    const one = screen.getByText(1)
    fireEvent.click(one)

    const two = screen.getByText(2)
    fireEvent.click(two)

    const three = screen.getByText(3)
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should user write and operation and see it in the input', () => {
    render(<Calculator />)

    const one = screen.getByText(1)
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText(2)
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should user write and operation and show the result in the input when click in the "=" sign', () => {
    render(<Calculator />)

    const one = screen.getByText(1)
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText(2)
    fireEvent.click(two)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})
