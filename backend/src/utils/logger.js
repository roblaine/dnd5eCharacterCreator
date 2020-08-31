const winston = require('winston');
const { combine, timestamp, label, printf } = format;

let transports = [
  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

if (process.env.NODE_ENV !== 'production') {
  transports.push(
    new winston.transports.Console({
      format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
      transports: [new transports.Console()],
    }),
  );
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});

module.exports = logger;
