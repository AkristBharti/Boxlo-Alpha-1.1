//var bg = createSprite(200,200,400,400);
var gamestate = 1;
var player, table, npc1, obj1, obj2, obj3, obj4, npc1text, objgroup, gamestate, congratsmsg, counter, objcount
var playerimg, helloimg, congratsimg, playerleftimg, playerrightimg, playerdownimg;
var congratsmsg;
counter = 0;
objcount = 0;
function preload(){
    playerimg = loadImage("/images/sprite_boxlo0.png");
    helloimg = loadImage("/images/sprite_hello0.png");
    playerleftimg = loadImage("/images/sprite_left.png");
    playerrightimg = loadImage("/images/sprite_right.png");
    congratsimg = loadImage("/images/sprite_congrats0.png");
    playerdownimg = loadImage("/images/sprite_down.png");
}
function setup(){
    createCanvas(400,400);
    player = createSprite(200,200,10,10);
    table = createSprite(200, 50, 200, 60);
    npc1 = createSprite(50, 300, 40,40);
    obj1 = createSprite(40,100, 20, 20);
    obj2 = createSprite(70,100, 20, 20);
    obj3 = createSprite(100,100, 20, 20);
    obj4 = createSprite(130,100, 20, 20);
    npc1text = createSprite(260,300, 10, 10);
    objgroup = createGroup();
    gamestate = 1;
    congratsmsg = createSprite(200,200,10,10);
    objgroup.add(obj1);
    objgroup.add(obj2);
    objgroup.add(obj3);
    objgroup.add(obj4);
    player.addImage(playerimg);
    npc1text.addImage(helloimg);
    congratsmsg.addImage(congratsimg);
    npc1text.visible= false;
    congratsmsg.visible = false;
    npc1.setCollider("rectangle", 0, 0,60,60);
    npc1.debug = true;
}

function draw() {
    if(gamestate === 1){
     background("white");
     text("Items : " + objcount,300,130 );
     if (keyDown("up")){
       player.y = player.y - 8;
       player.addImage(playerimg);
     }
     if(keyDown("left")){
       player.x = player.x -8;
       player.addImage(playerleftimg);
     }
     if(keyDown("right")){
       player.x = player.x +8;
       player.addImage(playerrightimg);
     }
     if(keyDown("down")){
       player.y = player.y +8;
       player.addImage(playerdownimg);
     }
     if (player.isTouching(npc1)){
       counter = 1;
     }
   
     if (keyDown("space")){
       npc1text.visible = false;
     }
   
     if(objcount >= 4){
       gamestate = 2;
     }
   
     if(counter ===1){  
       text("Press X to Interact", 200, 350);
       console.log("working");
       if (keyWentDown("x")){
         npc1text.visible = true;
         console.log("done");
         counter = 2;
     }
   
   }/*
   if(counter ===2){
     npc1text.visible = true;
     for(var i = 0; i<51;i++){
       if (i === 50){
         counter = 3;
         npc1text.visible = false;
       }
     }
   }
   
   
   
   
   if(counter ===2){
     npc1text.visible = true;
     //text("Hi Welcome to my bar!", 200,200);
     tickerjob(tick);
   }
   if(counter === 3){
     npc1text.visible = false;
   }
   
   
   /*if (player.isTouching(objgroup)){
     objcount +=1;
     obj1.destroy();
     
   }*/
     if (obj1.isTouching(player)){
       obj1.destroy();
       objcount ++;
     }
     if (obj2.isTouching(player)){
       obj2.destroy();
       objcount ++;
     }
     if (obj3.isTouching(player)){
       obj3.destroy();
       objcount ++;
     }
     if (obj4.isTouching(player)){
       obj4.destroy();
       objcount ++;
     }
     player.collide(npc1);
     player.collide(table);
   }
   if(gamestate === 2){
     congratsmsg.visible = true;
   }
   
   
   drawSprites();
   //bg.setAnimation("background1");
 } 