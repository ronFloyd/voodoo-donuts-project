function Voodoo(location, id, hours, traffic, entered, ordered) {
  this.location = location;
  this.id = id;
  this.hours = hours;
  this.traffic = traffic;
  this.entered = entered;
  this.ordered = ordered;

  this.reportLocation = function(location) {
    var loc = document.getElementById(this.id);
    var newEl = document.createElement('th');
    var newText = document.createTextNode(location);
    newEl.appendChild(newText);
    loc.appendChild(newEl);
  };

  this.reportHourly = function(hour, donuts) {
    var loc = document.getElementById(this.id);
    var newEl = document.createElement('td');
    var newText = document.createTextNode(donuts);
    newEl.appendChild(newText);
    loc.appendChild(newEl);
  };

  this.reportDaily = function(donuts) {
    var loc = document.getElementById(this.id);
    var newEl = document.createElement('td');
    var newText = document.createTextNode(donuts);
    newEl.appendChild(newText);
    loc.appendChild(newEl);
  };

  this.reportLocation(location);

  this.calculate = function() {
    var open = this.hours[0],
        close = this.hours[1],
        total = 0,
        donutsPerHour,
        randomTraffic;

    for(var i = open; i <= close; i++) {
      randomTraffic = Math.floor(Math.random() * (this.traffic[1] - this.traffic[0]) + this.traffic[0]);
      donutsPerHour = Math.floor(randomTraffic * this.entered * this.ordered);
      this.reportHourly(i, donutsPerHour);
      total += donutsPerHour;
    }

    this.reportDaily(total);
  };
}

var downtown = new Voodoo("Downtown", "downtown", [7,18], [80, 220], 0.10, 4),
    capitolHill = new Voodoo("Capitol Hill", "capitolHill", [7,18], [5,45], 0.45, 2),
    southLakeUnion = new Voodoo("South Lake Union", "southLakeUnion", [7,18], [180, 250], 0.05, 6),
    wedgewood = new Voodoo("Wedgewood", "wedgewood", [7,18], [20, 60], 0.20, 1.5),
    ballard = new Voodoo("Ballard", "ballard", [7,18], [25, 175], 0.33, 1);

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
  //document.getElementById("total" + i).textContent = shops[i].total;
}


