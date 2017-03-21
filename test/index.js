import { expect } from 'chai';

import task from '../src';

describe('start-standard', () => {
  it('should return curried functions', () => {
    expect(task).to.be.a('function');
    expect(task()).to.be.a('function');
    expect(task()()).to.be.a('function');
  });
});
