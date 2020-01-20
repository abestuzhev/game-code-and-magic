(function (){
window.load = function(url, onSuccess, onError){
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function(){
        if(xhr.status === 200){
            onSuccess(xhr.response);
        }else {
            onError('Статус ответа: ' + xhr.status + ', ' + xhr.statusText);
        }
    });

    xhr.addEventListener('error', function(){
        onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function(){
        onError('Запрос не успел выполнитья за ' + xhr.timeout + ' секунд');
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
    // console.log(xhr);
};
})();

(function(){
    let onError = function(message){
        console.log(message);
    }

    let onSuccess = function(data){
        console.log(data);
    }

    // let userGit = 'abestuzhev';

    // window.load(
    //     'https:/up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json',
    //     onSuccess,
    //     onError
    // );


    // многоуровневые объекты
    let Rect = function(left, top, right, bottom){
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }

    let Coordinate = function(x, y, contraints){
        this._x = x;
        this._y = y;
        this._contraints = contraints;
    }

    Coordinate.prototype.setX = function(x){
        if(x >= this._contraints.left && x <= this._contraints.right ){
            this.x = x;
            console.log(`${this.x} больше чем ${this._contraints.right}`);
        }else {
            console.log(`значение ${x} больше допустимого`);
        }          
    }

    Coordinate.prototype.setY = function(y){
        if(y >= this._contraints.top && y <= this._contraints.bottom ){
            this.y = y;
            console.log(this.y);
        }else {
            console.log(`значение ${y} больше допустимого`);
        }        
    }

    let rect = new Rect(0, 0, 640, 480);

    let coord = new Coordinate(100, 100, rect);

    coord.setX(459);

    // ------------------------
    let greet = function(){
        console.log('hello ' + this.name);
    }

    let wizard = {
        name: 'Pendalf',
        greet: greet
    }

    wizard.greet();

    //bind

    let creatWizard = function(name){
        return {
            name: name,
            selectHandler: function(evt){
                evt.target.textContent += ': ' + this.name;
            }
        };
    };

    let wizards = {
        creatWizard('Саурон'),
        creatWizard('Радагаст'),
        creatWizard('Пендальф')
    }

    let headers = document.querySelectorAll('h1');

    for (let i = 0; i < headers.length; i++) {
        let wizard = wizards[i];
        headers[i].addEventListener('click', wizard.selectHandler.bind(wizard));        
    }
    
})();
