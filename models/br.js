class br {
    constructor(x, y, scale) {
        this.pos = { x, y }
        this.scale = scale
        this.renderMap = {
            0: () => {
                point(this.pos.x + (this.scale * 2.5), this.pos.y - (this.scale * 2.5))
            },
            1: () => {
                line(this.pos.x, this.pos.y, this.pos.x + (this.scale * 5), this.pos.y)
            },
            2: () => {
                line(this.pos.x, this.pos.y - (this.scale * 5), this.pos.x + (this.scale * 5), this.pos.y - (this.scale * 5))
            },
            3: () => {
                line(this.pos.x, this.pos.y, this.pos.x + (this.scale * 5), this.pos.y - (this.scale * 5))

            },
            4: () => {
                line(this.pos.x, this.pos.y - (this.scale * 5), this.pos.x + (this.scale * 5), this.pos.y)
            },
            5: () => {
                this.renderMap[4]()
                this.renderMap[1]()
            },
            6: () => {
                line(this.pos.x + (this.scale * 5), this.pos.y - (this.scale * 5), this.pos.x + (this.scale * 5), this.pos.y)
            },
            7: () => {
                this.renderMap[6]()
                this.renderMap[1]()
            },
            8: () => {
                this.renderMap[2]()
                this.renderMap[6]()
            },
            9: () => {
                this.renderMap[1]()
                this.renderMap[2]()
                this.renderMap[6]()
            },
        }
    }

    render(v) {
        this.renderMap[v]()
    }
}