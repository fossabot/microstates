import 'jest';

import transitionsFor from '../../src/utils/transitions-for';
import * as MS from '../../src';

describe('transitionsFor', () => {
  describe('Array', () => {
    let transitions = transitionsFor(MS.Array);
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        push: expect.any(Function),
      });
    });
  });
  describe('String', () => {
    let transitions = transitionsFor(MS.String);
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        concat: expect.any(Function),
      });
    });
  });
  describe('Number', () => {
    let transitions = transitionsFor(MS.Number);
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        increment: expect.any(Function),
      });
    });
  });
  describe('Boolean', () => {
    let transitions = transitionsFor(MS.Boolean);
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        toggle: expect.any(Function),
      });
    });
    it('does not have initialize', () => {
      expect(transitions.initialize).not.toBeDefined();
    });
  });
  describe('Object', () => {
    let transitions = transitionsFor(MS.Object);
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        assign: expect.any(Function),
      });
    });
  });
  describe('Custom Class', () => {
    let transitions = transitionsFor(
      class MyClass {
        string = MS.String;
        action() {}
      }
    );
    it('has transitions', () => {
      expect(transitions).toMatchObject({
        set: expect.any(Function),
        merge: expect.any(Function),
      });
    });
    it('has custom transition', () => {
      expect(transitions.action).toBeDefined();
    });
  });
});