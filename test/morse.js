var morse = require('../src/morse.js');
var expect = require('chai').expect;

describe("Testing morse code library",function(){
  it('To Morse',function(){
    var m = new morse();
    expect(m.toMorse("hello world")).to.be.equal("**** * *-** *-** --- _ *-- --- *-* *-** -**")
  });

  it("From Morse",function(){
    var m = new morse();
    expect(m.fromMorse(m.toMorse("hello world"))).to.be.equal("hello world");
  })
});
