class aviao {
    constructor() {
        this.model = 'boeing 737-800'
        this.maxalt = ' 12.500 metros (41.000 pés)'
        this.velmax = 1010
        this.Comprimento = 39, 5
        this.envergadura = 35, 8
    };
    getinfo() {
        return [this.model = 'boeing 737-800', this.maxalt = ' 12.500 metros (41.000 pés)', this.velmax = 1010, this.Comprimento = 39, 5, this.envergadura = 35, 8]
    };
};

let a1 = new aviao()
console.log(a1.getinfo())
