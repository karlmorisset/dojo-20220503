const findTheBug = require("../findTheBug.js")
var expect = require('expect.js');

describe("Tests", () => {
  it("Finds the bug in the Matrix - Test #1", () => {
    var apple=[
      ["B","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"]
    ];

    expect(findTheBug(apple)).to.eql([0,0]);
  });

  it("Finds the bug in the Matrix - Test #2", () => {
    var apple=[
      ["A","B"]
    ];

    expect(findTheBug(apple)).to.eql([0,1]);
  });

  it("Finds the bug in the Matrix - Test #3", () => {
    var apple=[
      ["A","A","A","A","A"],
      ["A","B","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"]
    ];

    expect(findTheBug(apple)).to.eql([1,1]);
  });

  it("Finds the bug in the Matrix - Test #4", () => {
    var apple=[
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","A","A","A","A"],
      ["A","B","A","A","A"]
    ];

    expect(findTheBug(apple)).to.eql([4,1]);
  });

  it("Finds the bug in the Matrix - Test #5", () => {
    var apple=[
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","B","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"],
      ["A","A","A","A","A","A"]
    ];

    expect(findTheBug(apple)).to.eql([7,2]);
  });

  it("Finds the bug in the Matrix - Test #6", () => {
    var apple=[
      ["A","A","A","A","A","A","A","A","A","A","A","A"],
      ["A","A","A","A","A","A","A","A","A","A","A","A"],
      ["A","A","A","A","A","A","A","A","A","A","A","B"],
    ];

    expect(findTheBug(apple)).to.eql([2,11]);
  });
});

