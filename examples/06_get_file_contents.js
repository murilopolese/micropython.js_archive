const Board = require('../micropython.js')

console.log('connect')
let board = new Board()
board.open(process.env.PORT || '/dev/tty.usbmodem141101')
  .then(async () => {
    try {
      let output = await board.fs_cat('test.py')
      console.log('file contents:')
      console.log(output)
      console.log('disconnect')
    } catch(e) {
      console.log('error', e)
    }
    board.close()
  })
