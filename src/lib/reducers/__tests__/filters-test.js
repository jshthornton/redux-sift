import filters, { initialState } from '../filters';
import { expect } from 'chai';
import {
  addFilter,
  removeFilter,
  reset
} from '../../messages';
import Immutable from 'immutable';

describe('reducers/filters', function() {
  it('exports a default reducer', function() {
    expect(filters).to.be.a('function');
  });

  describe('M_ADD_FILTER', function() {
    it('sets the filter key and value', function() {
      const action = addFilter({
        key: 'foo',
        value: 'bar'
      });

      const state = filters(initialState, action);

      expect(state.toJS()).to.eql({
        foo: 'bar'
      });
    });
  });

  describe('M_RESET', function() {
    it('resets the state back to initial', function() {
      const action = reset();

      const state = filters(new Immutable.Map({
        foo: 'bar'
      }), action);

      expect(state).to.eql(initialState);
    });
  });

  describe('M_REMOVE_FILTER', function() {
    it('removes the specified filter', function() {
      const action = removeFilter('foo');

      const state = filters(new Immutable.Map({
        foo: 'bar'
      }), action);

      expect(state).to.eql(initialState);
    });
  });
});