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

  it("Numbers conversion",function(){
    var m = new morse();
    var encoded = m.toMorse("1945")
    var decoded = m.fromMorse(encoded)
    expect(encoded).to.be.equal("*---- ----* ****- *****");
    expect(decoded).to.be.equal("1945")
  });
});
