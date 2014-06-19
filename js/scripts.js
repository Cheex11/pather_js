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


// $(document).ready
