const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_GAMEOVER = 'GAMEOVER';
const LOG_MONSTER_WON = 'MONSTER_WON';
const LOG_PLAYER_WON = 'PLAYER_WON';
const LOG_DRAW = 'GAME_DRAW';
const LOG_HEAL_APPLIED = 'HEAL_APPLIED';

let logData = [];

const enteredMaxLifeValue = prompt('Choose the health for player and monster.' , 100);
let choosenMaxLife = parseInt(enteredMaxLifeValue);

if(isNaN(choosenMaxLife) || choosenMaxLife <= 0){
    choosenMaxLife = 100;
}

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(choosenMaxLife);

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    logger(LOG_MONSTER_ATTACK,playerDamage,currentMonsterHealth,currentPlayerHealth);
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You were about to die! but bonus life saved you.')
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You have won!');
        logger(LOG_PLAYER_WON, 'Player has won', currentMonsterHealth, currentPlayerHealth);
    }
    else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!');
        logger(LOG_MONSTER_WON, 'Monster has won', currentMonsterHealth, currentPlayerHealth);
    }
    else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert('draw!');
        logger(LOG_DRAW, 'Game is a draw', currentMonsterHealth, currentPlayerHealth);
    }
    
    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0)
        reset();
}

function attackMonster(mode){
    let maxAttackValue;
    let attackMode;
    if(mode === MODE_ATTACK){
        maxAttackValue = ATTACK_VALUE;
        attackMode = LOG_PLAYER_ATTACK;
    }else if(mode === MODE_STRONG_ATTACK){
        maxAttackValue = STRONG_ATTACK_VALUE;
        attackMode = LOG_PLAYER_STRONG_ATTACK;
    }
    
    const damage = dealMonsterDamage(maxAttackValue);
    logger(attackMode, damage , currentMonsterHealth, currentPlayerHealth);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK);
}

function healButtonHandler(){
    let healValue;
    if(currentPlayerHealth >= choosenMaxLife - HEAL_VALUE){
        alert("You can't increase health beyond the max level.")
        healValue = choosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    logger(LOG_HEAL_APPLIED, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function reset(){
    currentMonsterHealth = choosenMaxLife;
    currentPlayerHealth = choosenMaxLife;
    resetGame(choosenMaxLife);
}

function logger(event, value, monsterHealth, playerHealth){
    let loggerData = {
        event: event,
        value: value,
        monsterHealth: monsterHealth,
        playerHealth : playerHealth
    }

    switch(event){
        case LOG_MONSTER_ATTACK:
            loggerData.target = "PLAYER";
            break;
        case LOG_PLAYER_ATTACK:
        case LOG_PLAYER_STRONG_ATTACK:
            loggerData.target = "MONSTER";
            break;
        case LOG_HEAL_APPLIED:
            loggerData.target = 'PLAYER';
            break;
        default: {}
    }

    // if(event === LOG_MONSTER_ATTACK){
    //     loggerData.target = "PLAYER";
    // }else if(event === LOG_PLAYER_ATTACK || event === LOG_PLAYER_STRONG_ATTACK){
    //     loggerData.target = "MONSTER";
    // }else if(LOG_HEAL_APPLIED === "HEAL_APPLIED")
    //     loggerData.target = 'PLAYER';

    logData.push(loggerData);
}

function logHandler(){
    //console.log(logData);

    //using for loop
    // for(let i = 0; i < logData.length; i++){
    //     console.log(`Entry#${i}: `)
    //     console.log(logData[i]);
    // }

    //using for of loop
    // let i = 0;
    // for(const element of logData){
    //     console.log(`Entry#${i}: `)
    //     console.log(element);
    //     i++;
    // }

    //using for in loop
    // for(const element of logData){
    //     for(let key in element){
    //         console.log(key);
    //         console.log(element[key]);
    //     }
    // }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healButtonHandler);
logBtn.addEventListener('click',logHandler);