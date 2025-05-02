export class PlayerState {
	health = $state(2500);
	armour = $state(2000);
	regen = $state(100);
}

export const playerState = new PlayerState();
