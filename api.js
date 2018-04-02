var express = require('express');
var router = express.Router();

//Controllers
var usersController = require('./controllers/users-controller');
var itemsController = require('./controllers/items-controller');
var ordereditemsController = require('./controllers/ordereditems-controller');
var orderedlistsController = require('./controllers/orderedlists-controller');
var reviewsController = require('./controllers/reviews-controller');
var reviewlistsController = require('./controllers/reviewlists-controller');
var employeesController = require('./controllers/employees-controller');
var shiftsController = require('./controllers/shifts-controller');
var suppliersController = require('./controllers/suppliers-controller');
var filesController = require('./controllers/files-controller');


var suppliersController = require('./controllers/suppliers-controller');
router.get('/', function (req, res) {
  res.send('API :: Hello World!');
});

// --- Users API---//
router.get('/users', usersController.list);
router.get('/users/:id', usersController.get);
router.put('/users', usersController.update);
router.post('/users/signup', usersController.signup);
router.post('/users/login', usersController.login);
router.delete('/users/:id', usersController.delete);

// --- Items API---//
router.get('/items', itemsController.list);
router.get('/items/:id', itemsController.get);
router.put('/items',itemsController.update);
router.post('/items', itemsController.add);
router.delete('/items/:id', itemsController.delete);

// --- Ordereditems API---//
router.get('/ordereditems', ordereditemsController.list);
router.get('/ordereditems/:id', ordereditemsController.get);
router.put('/ordereditems',ordereditemsController.update);
router.post('/ordereditems', ordereditemsController.add);
router.delete('/ordereditems/:id', ordereditemsController.delete);

// --- OrderedLists API---//
router.get('/orderedlists', orderedlistsController.list);
router.get('/orderedlists/:id', orderedlistsController.get);
router.put('/orderedlists',orderedlistsController.update);
router.post('/orderedlists', orderedlistsController.add);
router.delete('/orderedlists/:id', orderedlistsController.delete);

// --- Reviews API---//
router.get('/reviews', reviewsController.list);
router.get('/reviews/:id', reviewsController.get);
router.put('/reviews',reviewsController.update);
router.post('/reviews', reviewsController.add);
router.delete('/reviews/:id', reviewsController.delete);

// --- Reviewlists API---//
router.get('/reviewlists', reviewlistsController.list);
router.get('/reviewlists/:id', reviewlistsController.get);
router.get('/reviewlists/:id', reviewlistsController.list);
router.put('/reviewlists',reviewlistsController.update);
router.post('/reviewlists', reviewlistsController.add);
router.delete('/reviewlists/:id', reviewlistsController.delete);

// --- Shifts API---//
router.get('/shifts', shiftsController.list);
router.get('/shifts/:id', shiftsController.get);
router.put('/shifts',shiftsController.update);
router.post('/shifts', shiftsController.add);
router.delete('/shifts/:id', shiftsController.delete);

// --- Employees API---//
router.get('/employees', employeesController.list);
router.get('/employees/:id', employeesController.get);
router.put('/employees',employeesController.update);
router.post('/employees', employeesController.add);
router.delete('/employees/:id', employeesController.delete);

// --- Supplier API---//
router.get('/suppliers', suppliersController.list);
router.get('/suppliers/:id', suppliersController.get);
router.put('/suppliers',suppliersController.update);
router.post('/suppliers', suppliersController.add);
router.delete('/suppliers/:id', suppliersController.delete);

//Files
//Notice 'url' in db = 'filename' e.g flower.jpg
router.post('/upload',filesController.upload);
router.get('/download/:filename',filesController.download);


module.exports = router;