let nums = []
let w
let textBox
function setup() {
  w = windowWidth
  createCanvas(w, 100)
  background(255)
  textBox = createInput('', 'text')
}

let log = true
function renderNums(v) {
  if (!v.length) return
  const spaced = v.split(' ').filter(v => v.length > 0)
  const chunks = []
  let ci = -1
  for (let i = 0; i < spaced.length; i++) {
    ci++
    chunks.push('')
    for (let j = 0; j < spaced[i].length; j++) {
      if (chunks[ci].length == 4) {
        ci++
        chunks.push('')
      }
      chunks[ci] += spaced[i][j]
    }
  }
  populateNums(chunks.length)
  for (let i = 0; i < chunks.length; i++) {
    // if (log) {
    //   log = false
    //   console.log('chunks', chunks)
    //   console.log('nums length', nums.length)
    // }
    nums[i].setVal(chunks[i])
    nums[i].render()
  }
}

let lastReq
let scale = 4
function populateNums(req) {
  if (req != lastReq) {
    nums = new Array(req).fill(0).map((_, i) => new aChar(i * (scale * 15), 0, 4))
    lastReq = req
  }
}

const getV = () => {
  const az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const azArr = az.split('')
  let prevWasLetter = false
  const v = textBox.value().toUpperCase().split('').filter(v => `${az}1234567890 `.split('').includes(v)).map((char, i) => {
    if (azArr.includes(char)) {
      const shouldSpace = !prevWasLetter && i > 0
      prevWasLetter = true
      const code = char.charCodeAt(0) - 64
      return `${shouldSpace ? ' ' : ''}${code < 10 ? code + '-' : code}`
    }
    prevWasLetter = false
    return char
  }).join('').trim()
  return v
}

let lastv
function draw() {
  background(255)
  const v = getV()
  if (lastv != v) {
    lastv = v
    log = true
  }
  renderNums(v)
}