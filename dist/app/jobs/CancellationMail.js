"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _datefns = require('date-fns');
var _ptBR = require('date-fns/locale/pt-BR'); var _ptBR2 = _interopRequireDefault(_ptBR);
var _Mail = require('../../lib/Mail'); var _Mail2 = _interopRequireDefault(_Mail);

class CancellatoinMail {
  get key() {
    return 'CancellatoinMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('A fila executou');

    await _Mail2.default.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: _datefns.format.call(void 0, 
          _datefns.parseISO.call(void 0, appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: _ptBR2.default,
          }
        ),
      },
    });
  }
}

exports. default = new CancellatoinMail();
