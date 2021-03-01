class Game
{
    constructor()
    {
        this.track = loadImage("Images/Track Final.png");
    }

    play()
    {
        form.button1.hide();
        form.button2.hide();

        background("brown");
        image(this.track,displayWidth*4,displayHeight)
        if(gameState == 1)
        {
            
        }
        else if(gameState == 2)
        {
            if(playerCount<4)
            {
                textSize(20);
                fill("black");
                text("please wait for players to join",300,200);
            }
            else
            {

            }
        }
    }
}