var morse = require('../src/morse.js');
var expect = require('chai').expect;

describe("Testing morse code library",function(){
  it('To Braille',function(){
    var m = new morse();
    expect(m.toBraille("hello world")).to.be.equal("**** * *-** *-** --- _ *-- --- *-* *-** -**")
  });

  it("From Braille",function(){
    var m = new morse();
    expect(m.fromBraille(m.toBraille("hello world"))).to.be.equal("hello world");
  })
});
