const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;

let transports = [
  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `{"timestamp": "${timestamp}", "label": "${label}", "level": "${level}", "message": "${message}"`;
});

if (process.env.NODE_ENV !== 'production') {
  transports.push(
    new winston.transports.Console({
      format: combine(
        label({ label: 'Console Logger' }),
        timestamp(),
        customFormat,
      ),
      transports: [new winston.transports.Console()],
    }),
  );
}

const logger = winston.createLogger({
  level: 'info',
  format: combine(label({ label: 'JSON Logger' }), timestamp(), customFormat),
  transports,
});

module.exports = logger;
