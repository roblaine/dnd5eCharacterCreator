{
  "events": {
    "crash": "sh -c 'lsof -i :${PORT:-9229} -t | xargs kill'"
  }
}