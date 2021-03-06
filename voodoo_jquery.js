//*****************jQuery method to edit title.****************
$(function() {

  var $newItemButton = $('#newItemButton'),
      $newItemForm = $('#newItemForm'),
      $textInput = $('input:text');

  $newItemButton.show();
  $newItemForm.hide();

  $('#showForm').on('click', function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();
    $('#title').text(newText);
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });
})

function Voodoo(location, id, hours, traffic, entered, ordered) {
  this.location = location;
  this.id = id;
  this.hours = hours;
  this.traffic = traffic;
  this.entered = entered;
  this.ordered = ordered;

  this.report = function(content, element) {
    $(this).add(element)
           .add(content);

    console.log($newText);
  };

  this.report(location, 'th');

  this.calculate = function() {
    var open = this.hours[0],
        close = this.hours[1],
        total = 0,
        donutsPerHour,
        randomTraffic;

    for(var i = open; i <= close; i++) {
      randomTraffic = Math.floor(Math.random() * (this.traffic[1] - this.traffic[0]) + this.traffic[0]);
      donutsPerHour = Math.floor(randomTraffic * this.entered * this.ordered);
      this.report(donutsPerHour, 'td');
      total += donutsPerHour;
    }

    this.report(total, 'td');
  };
}

//Assign origin table data to variables for each location.*********************
var downtown = new Voodoo("Downtown", "downtown", [7,18], [80, 220], 0.10, 4),
    capitolHill = new Voodoo("Capitol Hill", "capitolHill", [7,18], [5,45], 0.45, 2),
    southLakeUnion = new Voodoo("South Lake Union", "southLakeUnion", [7,18], [180, 250], 0.05, 6),
    wedgewood = new Voodoo("Wedgewood", "wedgewood", [7,18], [20, 60], 0.20, 1.5),
    ballard = new Voodoo("Ballard", "ballard", [7,18], [25, 175], 0.33, 1);
//*****************************************************************************

var shops = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

for(var i = 0; i < shops.length; i++) {
  shops[i].calculate();

  document.getElementById("location" + i).textContent = shops[i].location;
  var editCell = document.getElementById('hours' + i);
  editCell.textContent = "0" + shops[i].hours[0] + "00" + " - " + shops[i].hours[1] + "00";
  editCell.addEventListener('click', editTableData , false);

  document.getElementById("traffic" + i).textContent = shops[i].traffic[0];
  var editCell = document.getElementById('traffic' + i);
  editCell.textContent = shops[i].traffic[0] + " - " + shops[i].traffic[1];
  editCell.addEventListener('click', editTableData , false);

  document.getElementById("entered" + i).textContent = (shops[i].entered * 100) + "%";
  var editCell = document.getElementById('entered' + i);
  editCell.textContent = (shops[i].entered * 100) + "%";
  editCell.addEventListener('click', editTableData , false);

  document.getElementById("ordered" + i).textContent = shops[i].ordered;
  var editCell = document.getElementById('ordered' + i);
  editCell.textContent = shops[i].ordered;
  editCell.addEventListener('click', editTableData , false);
}

//Function to edit td data on click.******************
function editTableData(event) {
  // event.preventDefault();
  // event.stopPropagation();
  this.textContent = prompt("Edit this cell:");
}
//****************************************************


