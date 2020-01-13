let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

let name = [
    'Иван', 'Хуан', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
];

let lastName = [
    'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
];

let coatColorBasic = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)'];
let eyesColorBasic = ['black','red','blue','yellow','green'];

let magician = [],
    coatColor = [],
    eyesColor = [];

for (let i = 0; i <= name.length; i++) {
    magician.push(name[Math.floor(Math.random() * name.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)]); 
    coatColor.push(coatColorBasic[Math.floor(Math.random() * coatColorBasic.length)]);
    eyesColor.push(eyesColorBasic[Math.floor(Math.random() * eyesColorBasic.length)]);
}


let wizzard = [
    {
        name: magician[0],
        coatColor: coatColor[0],
        eyesColor: eyesColor[0]
    },
    {
        name: magician[1],
        coatColor: coatColor[1],
        eyesColor: eyesColor[1]
    },
    {
        name: magician[2],
        coatColor: coatColor[2],
        eyesColor: eyesColor[2]
    },
    {
        name: magician[3],
        coatColor: coatColor[3],
        eyesColor: eyesColor[3]
    },

]
let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardElement = document.querySelector('#similar-wizard-template')
                                    .content
                                    .querySelector('.setup-similar-item');



let renderWizard = function(wizzard){
    let wizardElement = similarWizardElement.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizzard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizzard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizzard.eyesColor;

    return wizardElement;
}

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizzard.length; i++) {
    fragment.appendChild(renderWizard(wizzard[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');