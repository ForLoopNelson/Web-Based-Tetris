class Piece {
  x
  y
  color
  shape
  border
  ctx
  typeId

  constructor(ctx) {
    this.ctx = ctx
    this.spawn()
  }

  spawn() {
    this.typeId = this.randomizeTetrominoType(COLORS.length - 1)
    this.shape = SHAPES[this.typeId]
    this.color = COLORS[this.typeId]
    this.border = BORDER[this.typeId]
    this.x = 0
    this.y = 0
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.styleRect = this.border

    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1) &&
            this.ctx.strokeStyle(this.x + x, this.y + y, 1, 1)
        }
      })
    })
  }

  move(p) {
    this.x = p.x
    this.y = p.y
    this.shape = p.shape
  }

  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes + 1)
  }

  setStartingPosition() {
    this.x = this.typeId === 4 ? 4 : 3
  }
}
