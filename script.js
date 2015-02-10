function Voodoo(location, hours, traffic, entered, ordered) {
  this.location = location;
  this.hours = hours;
  this.traffic = traffic;
  this.entered = entered;
  this.ordered = ordered;

  this.report = function(hour, donuts) {
    console.log("At " + hour + "00 hrs, " + this.location + " needed " + donuts + " donuts.");
  };

  this.calculate = function() {
    var open = this.hours[0],
        close = this.hours[1],
        total = 0,
        minMax = (this.traffic[1] - this.traffic[0]) + this.traffic[0],
        randomTraffic;

    for(var i = open; i <= close; i++) {
      randomTraffic = Math.random() * minMax;
      donutsPerHour = randomTraffic * this.entered * this.ordered;
      this.report(i, donutsPerHour.toFixed(0));
      total += donutsPerHour;
    }
    console.log("Total donuts for " + this.location + " today was: " + total.toFixed(0));
  };
}

var downtown = new Voodoo("Downtown", [7,18], [80, 220], 0.10, 4),
    capitolHill = new Voodoo("Capitol Hill", [7,18], [5,45], 0.45, 2),
    southLakeUnion = new Voodoo("South Lake Union", [7,18], [180, 250], 0.05, 6),
    wedgewood = new Voodoo("Wedgewood", [7,18], [20, 60], 0.20, 1.5),
    ballard = new Voodoo("Ballard", [7,18], [25, 175], 0.33, 1);

var shops = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

downtown.calculate();
capitolHill.calculate();
southLakeUnion.calculate();
wedgewood.calculate();
ballard.calculate();

for(var i = 0; i < shops.length; i++) {
  document.getElementById("location" + i).textContent = shops[i].location;
  document.getElementById("hours" + i).textContent = shops[i].hours;
  document.getElementById("traffic" + i).textContent = shops[i].traffic;
  document.getElementById("entered" + i).textContent = shops[i].entered;
  document.getElementById("ordered" + i).textContent = shops[i].ordered;
}












