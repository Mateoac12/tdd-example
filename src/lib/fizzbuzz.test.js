import { describe, expect, it } from 'vitest'
import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should throw is not number provided as param', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw is NaN provided as param', () => {
    expect(() => fizzbuzz(NaN)).toThrow()
  })

  it('should return 1 if 1 is provided as param', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if 2 is provided as param', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if 3 is provided as param', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should retrun "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
