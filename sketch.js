var movingBall;
var database;
var position;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    movingBall = createSprite(250,250,10,10);
    movingBall.shapeColor = "red";
    database.ref("ball/position").on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position!==undefined)

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x:position.x+x,
        y:position.y+y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function readPosition(data){
    position=data.val()
    movingBall.x=position.x
    movingBall.y=position.y
}

function showError(){
    console.log("there is an Error in your program")
}

