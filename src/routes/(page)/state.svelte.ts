export class PlayerState {
	health = $state(2500);
	armour = $state(500);
	regen = $state(50);
	blocks = $state(0);
	evade = $state(0);
}

export const playerState = new PlayerState();
