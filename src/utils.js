function secondsToTime(seconds) {
  return new Date(1000 * seconds).toISOString().substring(14, 19)
}

export { secondsToTime }
