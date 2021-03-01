class Form
{
    constructor()
    {
        this.title = null;
        this.button1 = createButton("single player");
        this.button2 = createButton("multi player");
    }

    display()
    {
        textSize(20);
        fill("black");
        this.title = text("Bike Racing Game", 325, 100);

        this.button1.position(250,150);
        this.button2.position(450,150);
        
        this.button1.mousePressed(() =>{
            gameState = 1
            
            database.ref("/").update({
                'gameState': 1
            })
        })

        this.button2.mousePressed(() =>{
            gameState = 2
            
            database.ref("/").update({
                'gameState': 2
            })
            
            playerCount++;
            player.index = playerCount;
            
            database.ref("/").update({
                'playerCount': playerCount
            })
        })
    }
}