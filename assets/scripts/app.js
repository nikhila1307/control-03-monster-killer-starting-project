let chosenMaxLife = 100;
const ATTACK_VALUE = 10;

adjustHealthBars(chosenMaxLife);

function attackMonster(){
   const damage = dealMonsterDamage(ATTACK_VALUE);
}
attackBtn.addEventListener('click', attackMonster);