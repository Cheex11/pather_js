var Grid = {
  create: function(size) {
    var grid = Object.create(Grid);
    grid.initialize(size);
    return grid
  },
  initialize: function (size) {
    this.size = (size * size);
    this.cells = []

  // Makes a grid of cell objects with coordinates of x and y.
    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) {
        var cell = Cell.create(y, x);
        this.cells.push(cell);
      }
    }
    return size
  }

};

var Cell = {
  create: function(y_coord, x_coord) {
    var cell = Object.create(Cell);
    cell.initialize(y_coord, x_coord);
    return cell
  },
	initialize: function(y_coord, x_coord){
		this.state = '.';
    this.x_coord = x_coord;
    this.y_coord = y_coord;
	}
};


$(document).ready(function(){

  var nGrid = Grid.create(4)

  nGrid.cells.forEach(function(cell,index){
    $('#board').append('<td class="'+index+'">' + cell.state + '</td>')

    // This will add at TR when necessary.
    // if ((index % Math.sqrt(nGrid.size) == 0) && (index > 0)) {
      // alert ('got here')
      // $('#board').append('</tr id=' + cell.y_coord + '>' + STRING + '</tr>')
    // }
    // This adds TDs with cell objects inside of them.

  });
});



