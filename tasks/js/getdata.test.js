import {TestMe} from './getdata.js';
// TestMe = require('./getdata.js')
// const Loader = require('./getdata');

describe('getdata functionality', () => {
  let testMe = new TestMe();
  test('should loader be defined', () => {
    // const loader = new Loader('http://localhost:3001/');
    // const result = loader.loadAndParseBlockData('carousel');
    // expect(result).not.toBeUndefined();
    
    expect(testMe.tryMe()).toEqual(1);
  });

  
})
