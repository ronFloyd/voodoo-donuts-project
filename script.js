function Voodoo(location, hours, traffic, entered, ordered) {
  this.location = location;
  this.hours = hours;
  this.traffic = traffic;
  this.entered = entered;
  this.ordered = ordered;
}

var downtown = new Voodoo("Downtown", [7,18], [80, 220], 0.10, 4),
    captiolHill = new Voodoo("Capitol Hill", [7,18], [5,45], 0.45, 2),
    southLakeUnion = new Voodoo("South Lake Union", [7,18], [180, 250], 0.05, 6),
    wedgewood = new Voodoo("Wedgewood", [7,18], [20, 60], 0.20, 1.5),
    ballard = new Voodoo("Ballard", [7,18], [25, 175], 0.33, 1);

var location1 = downtown.location;
var elLocation1 = document.getElementById("location1");
elLocation1.textContent = location1;





