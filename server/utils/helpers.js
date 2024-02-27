const {dogCare, catCare } = require('./careActivities');


const activityUpdate = async ( petProfile ) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear(); 
    const currentMonth = currentDate.getMonth();


    for ( let i = 0; i < petProfile.activities.length; i++ ) {
        const lastCompletedYear = petProfile.activities[i].lastCompleted.getFullYear();
        const lastCompletedMonth = petProfile.activities[i].lastCompleted.getMonth();

        if ( petProfile.activities[i].frequency === 'monthly' && (currentYear > lastCompletedYear)) {
            petProfile.activities[i].isComplete = false;
        } else if (petProfile.activities[i].frequency === 'yearly' && (currentYear > lastCompletedYear)) {
            petProfile.activities[i].isComplete = false;
        } else if (petProfile.activities[i].frequency === 'everyThreeYears' && (currentYear - lastCompletedYear >= 3)) {
            petProfile.activities[i].isComplete = false;
        }
    };

    return petProfile;
};

const checkAge =  async (petProfile) => {
    const currentAge = petProfile.currentAge;
    const hasYoungActivities = petProfile.activities.some(activity => activity.category === 'young');
    const hasAdultActivities = petProfile.activities.some(activity => activity.category === 'adult');

    if (currentAge > 52 && hasYoungActivities && !hasAdultActivities) {
        await petProfile.activities.map((activity) => activity.isComplete = true);

        const adultActivities = await petProfile.isDog ? dogCare.filter((activity) => activity.category === 'adult') : catCare.filter((activity) => activity.category === 'adult');
        petProfile.activities.push(...adultActivities);

        return petProfile;
    } return petProfile     
};

module.exports = {
    activityUpdate,
    checkAge
}