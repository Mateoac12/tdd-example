import { describe, expect, it } from 'vitest'
import { fromChallenge } from './from-challenge'

describe('from-chalenge', () => {
  it('should be a function', () => {
    expect(fromChallenge).toBeTypeOf('function')
  })

  it('should throw if first param is not stirng', () => {
    expect(() => fromChallenge()).toThrow()
    expect(() => fromChallenge(1)).toThrow()
  })

  it('should throw if second param is not stirng', () => {
    expect(() => fromChallenge('a')).toThrow()
    expect(() => fromChallenge('b', 3)).toThrow()
  })

  it('should return false if the lenght of the first param is different from the second', () => {
    expect(fromChallenge('abc', 'a')).toBe(false)
    expect(fromChallenge('a', 'abcd')).toBe(false)
  })

  it('should return false if first and second params have not the same length of unique charts', () => {
    expect(fromChallenge('aab', 'abc')).toBe(false)
    expect(fromChallenge('aaa', 'abc')).toBe(false)
  })

  it('should return false if string has different order of transformation', () => {
    expect(fromChallenge('xld', 'dda')).toBe(false)
    expect(fromChallenge('xbox', 'xxbo')).toBe(false)
  })
})
