const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    let deedsf
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
    formatTime: formatTime
    formatTime: formatTime
    formatTime: formatTime
    formatTime: formatTime
    formatTime: formatTime

}
