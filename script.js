const board = document.querySelector('.board');
const highScoreElement = document.querySelector('#high-score');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');
const startBtn = document.querySelector('.start-btn');
const rstBtn = document.querySelector('.rst-btn');
const modal = document.querySelector('.modal');
const startModal = document.querySelector('.start-game');
const rstModal = document.querySelector('.rst-game');


const blockHeight=50;
const blockWidth=50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
let intervalId=null;

let food={
    x:Math.floor(Math.random()*rows),
    y:Math.floor(Math.random()*cols)
}

const blocks = {};
const snake=[
    {x:1,y:3},
    // {x:1,y:4},
    // {x:1,y:5},
];

let score=0;
let highScore=Number(localStorage.getItem("highScore")) || 0;
let time=`00:00`;


let direction='down';

for(let row=0;row<rows;row++){
    for(let col=0;col<cols;col++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        // block.innerText=`${row},${col}`;
        blocks[`${row},${col}`]=block;
    }
}

function getNewHead(dir){
    let head;
    if(dir==='down'){
        return {x:snake[0].x+1,y:snake[0].y};
    }
    else if(dir==='up'){
        return {x:snake[0].x-1,y:snake[0].y};
    }
    else if(dir==='left'){
        return {x:snake[0].x,y:snake[0].y-1};
    }
    else if(dir==='right'){
        return {x:snake[0].x,y:snake[0].y+1};
    }
}

function moveSnake(head,grow=false){
    //clear
    snake.forEach(segment=>{
        const block=blocks[`${segment.x},${segment.y}`];
        block.classList.remove('fill');
    });

    //apply move
    snake.unshift(head);
    if(!grow)snake.pop();

    // fill
    snake.forEach(segment=>{
        // console.dir(segment);
        // console.log(blocks[`${segment.x},${segment.y}`]);
        const block=blocks[`${segment.x},${segment.y}`];
        block.classList.add('fill');
    });


}

function renderGame(){
    //spawns food
    blocks[`${food.x},${food.y}`].classList.add('food');

    const head=getNewHead(direction);

    //end game pattern
    if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols){
        // alert('Game Over');
        modal.style.display='flex';
        startModal.style.display='none';
        rstModal.style.display='flex';
        clearInterval(intervalId);
        return;
    }

    //eats food
    const ateFood=head.x===food.x && head.y===food.y;
    if(ateFood){
        blocks[`${food.x},${food.y}`].classList.remove('food');
        food={
            x:Math.floor(Math.random()*rows),
            y:Math.floor(Math.random()*cols)
        };
        score++;
        scoreElement.textContent=score;
        if(score>highScore){
            highScore=score;
            localStorage.setItem("highScore",highScore.toString());
        }
        highScoreElement.textContent=highScore;
    }

    moveSnake(head,ateFood);
    
};


function startGame(){
    clearInterval(intervalId);
    modal.style.display= "none" ;
    intervalId=setInterval(()=>{
        renderGame();  
    },400);
};

function rstGame(){
    // clear board
    snake.forEach(seg => {
        blocks[`${seg.x},${seg.y}`]?.classList.remove('fill');
    });
    blocks[`${food.x},${food.y}`]?.classList.remove('food');

    // reset snake
    snake.length = 0;
    score=0;
    scoreElement.textContent=score;
    snake.push({ x: 1, y: 3 });

    // reset direction
    direction = 'down';

    // reset food
    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };
}

startBtn.addEventListener('click',startGame);
rstBtn.addEventListener('click',()=>{
    rstGame();
    startGame();
});


//controls
addEventListener('keydown',(e)=>{
    // console.log(e.key);
    if((e.key==='ArrowDown' || e.key==='s' || e.key==='S') && direction!=='up'){
        direction='down';
    }
    else if((e.key==='ArrowUp' || e.key==='w' || e.key==='W') && direction!=='down'){
        direction='up';
    }
    else if((e.key==='ArrowLeft' || e.key==='a' || e.key==='A') && direction!=='right'){
        direction='left';
    }
    else if((e.key==='ArrowRight' || e.key==='d' || e.key==='D') && direction!=='left'){
        direction='right';
    }
});