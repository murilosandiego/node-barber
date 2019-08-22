"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);
var _ProviderController = require('./app/controllers/ProviderController'); var _ProviderController2 = _interopRequireDefault(_ProviderController);
var _AppointmentControoler = require('./app/controllers/AppointmentControoler'); var _AppointmentControoler2 = _interopRequireDefault(_AppointmentControoler);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);
var _ScheduleController = require('./app/controllers/ScheduleController'); var _ScheduleController2 = _interopRequireDefault(_ScheduleController);
var _NotificationController = require('./app/controllers/NotificationController'); var _NotificationController2 = _interopRequireDefault(_NotificationController);
var _AvailableController = require('./app/controllers/AvailableController'); var _AvailableController2 = _interopRequireDefault(_AvailableController);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _multer4.default);

routes.get('/teste', (req, res) => {
  return res.json({ ok: new Date() });
});

routes.post('/sessions', _SessionController2.default.store);
routes.post('/users', _UserController2.default.store);

routes.use(_auth2.default);

routes.put('/users', _UserController2.default.update);

routes.post('/files', upload.single('file'), _FileController2.default.store);

routes.get('/providers', _ProviderController2.default.index);
routes.get('/providers/:providerId/available', _AvailableController2.default.index);

routes.get('/appointments', _AppointmentControoler2.default.index);
routes.post('/appointments', _AppointmentControoler2.default.store);
routes.delete('/appointments/:id', _AppointmentControoler2.default.delete);

routes.get('/schedule', _ScheduleController2.default.index);

routes.get('/notifications', _NotificationController2.default.index);
routes.put('/notifications/:id', _NotificationController2.default.update);

exports. default = routes;
