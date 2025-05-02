export interface MonsterData {
	name: string;
	physicalDamage: number;
	size: number;
	useSlam: boolean;
}

export const mondb = [
	{
		name: 'T15 Dangerous Rare Crit',
		physicalDamage: 8888,
		size: 50,
		useSlam: true,
	},
	{
		name: 'T15 Rare Burdened Wretch Slam',
		physicalDamage: 4444,
		size: 50,
		useSlam: true,
	},
	{
		name: 'T15 Hard hitting Magic',
		physicalDamage: 1200,
		size: 20,
		useSlam: false,
	},
	{
		name: 'T15 Trash Monster',
		physicalDamage: 600,
		size: 10,
		useSlam: false,
	},
];

export const generateMonsters = (): MonsterData[] => {
	const monsters: MonsterData[] = [];
	// add 1 T15 Dangerous Rare Crit
	monsters.push(mondb[0]);
	// add 2 T15 Rare Burdened Wretch Slam
	monsters.push(mondb[1]);
	monsters.push(mondb[1]);
	// add 8 T15 Hard hitting Magic
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	monsters.push(mondb[2]);
	// add 12 T15 Trash Monster
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	monsters.push(mondb[3]);
	return monsters;
};
