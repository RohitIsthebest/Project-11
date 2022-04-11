var boy,boy_run,leftBoundary,rightBoundary
var road,road_move

function preload(){
    boy_run = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png")

    road_move = loadImage("path.png")
}


function setup(){
    createCanvas(400,400)

    road = createSprite(200,200)
    road.addImage("roadmove",road_move)
    road.scale = 1.2
    road.velocityY = 5


    boy = createSprite(180,340,30,30)
    boy.addAnimation("run",boy_run)
    boy.scale = 0.09

    leftBoundary = createSprite(0,0,100,100)
    leftBoundary.visible = false

    rightBoundary = createSprite(410,0,100,100)
    rightBoundary.visible = false

}


function draw(){
    background("black")

    edges = createEdgeSprites()

    boy.collide(rightBoundary)
    boy.collide(leftBoundary)
    boy.collide(edges[3])


    boy.x = World.mouseX

    
    if(road.y > 400){
        road.y = height/2
    }


    drawSprites()
}







