class aChar {
    constructor(x, y, scale = 3) {
        this.val = 0
        this.pos = { x, y }
        this.scale = scale
        this.bl = new bl(x + (5 * this.scale) + (this.scale * 2.5), y + (20 * this.scale) - (this.scale * 2.5), scale)
        this.br = new br(x + (5 * this.scale) + (this.scale * 2.5), y + (20 * this.scale) - (this.scale * 2.5), scale)
        this.tl = new tl(x + (5 * this.scale) + (this.scale * 2.5), y + (this.scale * 2.5), scale)
        this.tr = new tr(x + (5 * this.scale) + (this.scale * 2.5), y + (this.scale * 2.5), scale)
    }
    setVal(val) {
        const arr = `${val}`.split('').map(v => v == '-' ? ' ' : v)
        while (arr.length < 4) {
            arr.push(' ')
        }
        arr.reverse()
        this.val = arr.join('')
    }
    getVal() {
        const arr = this.val.split('').filter(v => v != ' ')
        arr.reverse()
        return arr.join('')
    }
    renderCenter() {
        line(this.pos.x + (5 * this.scale) + (this.scale * 2.5), this.pos.y + (this.scale * 2.5), this.pos.x + (5 * this.scale) + (this.scale * 2.5), this.pos.y + (20 * this.scale) - (this.scale * 2.5))
    }
    renderBottomLeft() {
        if (this.val[3] != ' ') this.bl.render(this.val[3])
    }
    renderBottomRight() {
        if (this.val[2] != ' ') this.br.render(this.val[2])
    }
    renderTopLeft() {
        if (this.val[1] != ' ') this.tl.render(this.val[1])
    }
    renderTopRight() {
        if (this.val[0] != ' ') this.tr.render(this.val[0])
    }
    render() {
        strokeWeight((2 * this.scale / 2) + 0.5)
        this.renderCenter()
        this.renderBottomLeft()
        this.renderBottomRight()
        this.renderTopLeft()
        this.renderTopRight()
    }
}