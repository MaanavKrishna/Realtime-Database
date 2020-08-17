var ball,ball1,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball1=createSprite(300,300,10,10);
    ball1.shapeColor="aqua";
    database.ref('ball/position').on("value",function (data){
      position=data.val();
      ball1.x=position.x;
      ball1.y=position.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}

function writeposition(x,y)
{
    database.ref('ball/position').set({x:ball1.x+x,y:ball1.y+y});
    console.log("hi")
}