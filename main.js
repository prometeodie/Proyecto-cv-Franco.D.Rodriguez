
const skillIntellect = [{
    skillName:'Superhuman Intelligence',
    percent: 100
},{
    skillName:'Scientific Prowess',
    percent: 90
},{
    skillName:'Robot Engineering',
    percent: 95
},{
    skillName:'Psychological Manipulation',
    percent: 85
},{
    skillName:'Hyper Inventing',
    percent: 99
},{
    skillName:'Mechanical Aptitude',
    percent: 78
},{
    skillName:'Mech Piloting Intuition',
    percent: 48
}];

const skillPhysicalFitness = [{
    skillName:'Peak Human Condition',
    percent: 67
},{
    skillName:'Cybernetic Enhancement',
    percent: 90
},{
    skillName:'Robot Engineering',
    percent: 95
},{
    skillName:'Near Superhuman Strength & Agility',
    percent: 85
},{
    skillName:'High Alcohol Resistance',
    percent: 99
}];

const skillCombatProwess = [{
    skillName:'Exceptional Fighting Prowess',
    percent: 69
},{
    skillName:'Expert Trapper',
    percent: 85
},{
    skillName:'Weapon Improvisation',
    percent: 99
}];

// Intellect list
const ulIntellect = document.getElementById('ulIntellect');
// Physical Fitness list
const ulPhysicalFit = document.getElementById('ulPhysicalFit');
// Combat Prowess list
const ulCombatPro = document.getElementById('ulCombatPro');

const docFragment = document.createDocumentFragment();

// function to make dinamics skill list
const dinamicUnorderedList = (skillList, listId)=>{
    skillList.forEach(value =>{
        
        const li = document.createElement('li');
        const div = document.createElement('div'); //we use this div to make the skill bar
        const percentContainer = document.createElement('div');
        const span = document.createElement('span');
    
        div.className= 'skillBar';
        div.style.width = `${value.percent}%`;
        percentContainer.textContent=`${value.percent}%`;
        span.textContent = value.skillName;
        span.appendChild(percentContainer);
        li.appendChild(span);
        li.appendChild(div);
        docFragment.appendChild(li);
    })
    console.log(docFragment)
    listId.appendChild(docFragment)
}

dinamicUnorderedList(skillIntellect, ulIntellect);
dinamicUnorderedList(skillPhysicalFitness, ulPhysicalFit);
dinamicUnorderedList(skillCombatProwess, ulCombatPro);