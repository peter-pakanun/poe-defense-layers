export interface MonsterData {
	name: string;
	physicalDamage: number;
	size: number;
	useSlam: boolean;
	isMagic?: boolean;
	isRare?: boolean;
}

export const mondb = [
	{
		name: 'T15 Dangerous Rare Crit',
		physicalDamage: 8888,
		size: 50,
		useSlam: true,
		isRare: true,
	},
	{
		name: 'T15 Rare Burdened Wretch Slam',
		physicalDamage: 4444,
		size: 50,
		useSlam: true,
		isRare: true,
	},
	{
		name: 'T15 Hard hitting Magic',
		physicalDamage: 1200,
		size: 20,
		useSlam: false,
		isMagic: true,
	},
	{
		name: 'T15 Trash Monster',
		physicalDamage: 600,
		size: 10,
		useSlam: false,
	},
];

export const generateMonsters = (
	trashMonsters = 30,
	magicMonsters = 12,
	rareMonsters = 2,
	dangerousMonsters = 1
): MonsterData[] => {
	const monsters: MonsterData[] = [];
	// add T15 Dangerous Rare Crit
	for (let i = 0; i < dangerousMonsters; i++) {
		monsters.push(mondb[0]);
	}
	// add T15 Rare Burdened Wretch Slam
	for (let i = 0; i < rareMonsters; i++) {
		monsters.push(mondb[1]);
	}
	// add T15 Hard hitting Magic
	for (let i = 0; i < magicMonsters; i++) {
		monsters.push(mondb[2]);
	}
	// add T15 Trash Monster
	for (let i = 0; i < trashMonsters; i++) {
		monsters.push(mondb[3]);
	}
	return monsters;
};
