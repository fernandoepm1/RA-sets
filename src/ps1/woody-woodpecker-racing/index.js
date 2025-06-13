import { AchievementSet, define as $ } from '@cruncheevos/core';
import addAchievements from './achievements.js';
import addLeaderboards from './leaderboards.js';

const set = new AchievementSet({
    gameId: 16303,
    title: 'Woody Woodpecker Racing',
});

addAchievements(set);
addLeaderboards(set);

export default set;
