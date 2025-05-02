export class PlayerState {
	health = $state(2500);
	armour = $state(500);
	regen = $state(50);
}

export const playerState = new PlayerState();
