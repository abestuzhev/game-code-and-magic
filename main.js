// let wizard = {
//     name: 'Пендальф',
//     level: 2,

//     say: () => {
//         console.log(
//             this.name + ' говорит: "Ты не пройдешь! мой уровень ' + this.level + '".'
//         );
//     },

//     levelUp: () => {
//         this.level += level;
//     }
// }

// wizard.say();


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100)
// ctx.fillRect(0,0,300,150);

let CLOUD_WIDTH = 500;
let CLOUD_HEIGHT = 200;

// функция генерации модального окна
let renderCloud = function(ctx, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
} 

let players = ['Cat', 'Dog', 'Monkey'];


window.RenderStatictics = function(ctx){
    renderCloud(ctx, 100, 60, 'rgba(0,0,0,.3)');
    renderCloud(ctx, 100, 50, '#fff');
}
console.log(players[1]);