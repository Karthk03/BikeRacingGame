class Player
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.flag = false;
        this.lane = null;
    }

    update()
    {
        database.ref("players/player"+player.index).update({
            'lane': this.lane,
            'distance': this.distance,
            'flag': this.flag
        })
    }

    static getPlayerInfo()
    {
        database.ref("players").on("value", function(data){
            Allplayers = data.val();
        })
    }
}