import debug from 'debug';

const BASE = 'dndTracker';
const COLOURS = {
  trace: '#41cdf4',
  info: '#4286f4',
  warn: '#f4a641',
  error: '#f44141'
}; // colours of the logging output

class Log {
  generateMessage(level, message, source) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);

    // Set the colour of the message based on the level
    createDebug.color = COLOURS[level];

    if(source) { createDebug(source, message); }
    else { createDebug(message); }
  }

  trace(message, source) {
    return this.generateMessage('trace', message, source);
  }

  info(message, source) {
    return this.generateMessage('info', message, source);
  }

  warn(message, source) {
    return this.generateMessage('warn', message, source);
  }

  error(message, source) {
    return this.generateMessage('error', message, source);
  }
}

export default new Log();
