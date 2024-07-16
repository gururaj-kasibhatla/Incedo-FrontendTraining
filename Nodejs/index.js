const cal=require('./Calculator');
const bonus=require('./BonusCalculator');
console.log('ADD :',cal.add(1,5));
console.log('Bonus for 40000: ',bonus.calculateBonus(40000))