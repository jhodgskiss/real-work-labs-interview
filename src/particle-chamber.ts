class Particle {
    position: number;
    speed: number;

    constructor(position: number, speed: number) {
        this.position = position;
        this.speed = speed;
    }

    // advance particle and return whether it is still in the chamber
    step(chamberLength: number): boolean {
        this.position += this.speed;
        return this.speed > 0 ? this.position < chamberLength : this.position >= 0;
    }
}

class ParticleChamber {
    particles: Particle[];
    length: number;

    constructor(initialPosition: string, speed: number) {
        this.particles = [];
        this.length = initialPosition.length;

        Array.from(initialPosition).forEach((char, index) => {
            switch (char) {
            case 'R':
                this.addParticle(index, speed);
                break;
            case 'L':
                this.addParticle(index, -speed);
                break;
            default:
                break;
            }
        });
    }

    addParticle(position: number, speed: number) {
        this.particles.push(new Particle(position, speed));
    }

    getChamberState(): string {
        const chamberArray = Array(this.length).fill('.');
        this.particles.forEach(particle => chamberArray[particle.position] = 'X');
        return chamberArray.join('');
    }

    // advances particles and removes those outside chamber
    step() {
        this.particles = this.particles.filter(particle => particle.step(this.length));
    }
}

export function animate(initialPosition: string, speed: number) {
    if (speed === 0) {
        throw new Error('A speed of zero would result in an infinite loop, check inputs.');
    }

    if (!Number.isInteger(speed)) {
        throw new Error('Floats currently not supported.');
    }

    const chamber = new ParticleChamber(initialPosition, speed);
    const chamberArrays: string[] = [chamber.getChamberState()];

    while (chamber.particles.length) {
        chamber.step();
        chamberArrays.push(chamber.getChamberState());
    }

    return chamberArrays;
}
