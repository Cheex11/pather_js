describe('Grid', function() {
	describe('create', function() {
		it('creates a grid and initializes it', function() {
			var testgrid = Object.create(Grid);
			Grid.isPrototypeOf(testgrid).should.equal(true)
		});

		it('initializes the contact', function() {
			var testgrid = Grid.create(10);
			testgrid.initialize(10);
			testgrid.size.should.equal(100);
		});
	});

  describe('initialize', function() {
    it('makes a grid with a given size', function() {
    	var testgrid = Object.create(Grid);
      testgrid.initialize(10);
      testgrid.size.should.equal(100);
    });

    it('should make an array of cells', function() {
    	var testgrid = Grid.create(10);
    	testgrid.cells.length.should.equal(100);
    });

    it('should have an array of cells with coordinates', function() {
    	var testgrid = Grid.create(10);
    	testgrid.cells[0].x_coord.should.equal(0);
    })
  })
});


describe('Cell', function() {
	describe('initialize', function() {
		it('makes a cell with a state of "."', function() {
			var cell = Object.create(Cell);
			cell.initialize(2,4);
			cell.state.should.equal('.');
		});

		it('initializes with an x_coordinate', function() {
			var cell = Object.create(Cell);
			cell.initialize(2,4);
			cell.x_coord.should.equal(4);
		});

		it('initializes with a y_coordinate', function() {
			var cell = Cell.create(2, 4);
			cell.y_coord.should.equal(2);
		})
	});
});
