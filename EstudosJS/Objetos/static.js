class npc {
  static alerta = false;
  constructor(energia) {
    this.energia = energia;
  }
  info = function () {
    console.log(`Energia:${this.energia}`);
    console.log(`alerta:${npc.alerta ? "sim" : "não"}`);
    console.log(`-----------------------------------------`);
  };
}
const npc1 = new npc(100);
const npc2 = new npc(80);
const npc3 = new npc(30);
npc.alerta = true;
npc1.info();
npc2.info();
npc3.info();
