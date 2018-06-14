/*












VOUS N'AVEZ RIEN A FAIRE DANS CE FICHIER !!


















*/

var mapElement = document.getElementById('map');

function getRandom(type, max) {
    var rand = Math.round(Math.random() * max);
    return type+rand;
}

function getTile(type) {
    var tile = document.createElement('div');
    tile.style.backgroundSize = 'cover';
    if(type === "grass") {
        tile.style.backgroundImage = 'url("assets/'+getRandom('grass', 3)+'.png'+'")';
    } else if (type === "earth") {
        tile.style.backgroundImage = 'url("assets/'+getRandom('earth', 1)+'.png'+'")';
    } else if (type === "wall") {
        tile.style.backgroundImage = 'url("assets/'+getRandom('brick', 5)+'.png'+'")';
    } else if(type === "rock") {
        tile.style.backgroundImage = 'url("assets/'+getRandom('rock', 2)+'.png'+'")';
    } else if(type === "bush") {
        tile.style.backgroundImage = 'url("assets/'+getRandom('bush', 1)+'.png'+'")';
    } else {
        console.error('Wrong type: '+type);
    }
    return tile;
}

function render(map) {
    for(var i=0; i<mapHeight; i++) {
        var row = document.createElement('div');
        row.className = "row";

        for(var j=0; j<mapWidth; j++) {
            if(typeof(map[i][j]) === "string") {
                var tile = getTile(map[i][j])
                row.appendChild(tile);
            } else if(typeof(map[i][j] === "object")) {
                var tiles = document.createElement('div');
                for(let index in map[i][j]) {
                    var tile = getTile(map[i][j][index]);
                    tiles.appendChild(tile);
                }
                row.appendChild(tiles);
            }
        }
        mapElement.appendChild(row);
        
    }
}