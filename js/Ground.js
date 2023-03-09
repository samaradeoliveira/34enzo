class Ground {
    constructor() {
        var ground_options = {
            //deixar o chão parado
            isStatic: true
        }

        //chão
        this.ground = Bodies.rectangle(450, 390, 900, 20, ground_options);
        //adicionando o chão no mundo
        World.add(world, this.ground);
    }

    //exibição
    display() {
        //não terá borda
        noStroke();
        //preencher de uma cor hexadecimal
        fill(188, 67, 67);
        //centralizar a posição x,y iniciais no centro
        rectMode(CENTER);
        //desenhar o retangulo que representa o chão
        rect(this.ground.position.x, this.ground.position.y, 900, 20);
    }

}