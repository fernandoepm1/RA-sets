import { AchievementSet, define as $ } from '@cruncheevos/core';

const addAchievements = (set) => {
    set.addAchievement({
        title: 'Heating Up',
        description: 'Finish the first 3 races on Quest Mode',
        points: 5,
        conditions: '1=1',
    });
};

export default addAchievements;
