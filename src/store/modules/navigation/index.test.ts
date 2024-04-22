import state from '@/store/mockState'

import reducer from './index'
import { hideAddButton, showAddButton, setFilter } from './index'

const initialState = state.navigation

describe('navigation', () => {
  it('should handle hideAddButton', () => {
    const expected = {
      ...initialState,
      canHaveAddButton: false,
    }
    expect(reducer(initialState, hideAddButton())).toEqual(expected)
  })

  it('should handle showAddButton', () => {
    const expected = {
      ...initialState,
      canHaveAddButton: true,
    }
    expect(reducer(initialState, showAddButton())).toEqual(expected)
  })

  it('should handle setFilter("all")', () => {
    const expected = {
      ...initialState,
      filter: 'all',
    }
    expect(reducer(initialState, setFilter('all'))).toEqual(expected)
  })

  it('should handle setFilter("active")', () => {
    const expected = {
      ...initialState,
      filter: 'active',
    }
    expect(reducer(initialState, setFilter('active'))).toEqual(expected)
  })

  it('should handle setFilter("complete")', () => {
    const expected = {
      ...initialState,
      filter: 'complete',
    }
    expect(reducer(initialState, setFilter('complete'))).toEqual(expected)
  })
})
