class Particle {
    position: number;
    speed: number;

    constructor(position: number, speed: number) {
        this.position = position;
        this.speed = speed;
    }

    getDistanceToExit(chamberLength: number): number {
        return this.speed > 0 ? chamberLength - this.position : this.position;
    }

    step(chamberLength: number): boolean {
        this.position += this.speed;
        return this.speed > 0 ? this.position < chamberLength : this.position >= 0;
    }
}

export function animate(initialPosition: string, speed: number) {
    const particles: Particle[] = [];
    const chamberLength: number = initialPosition.length;

    if (speed === 0) {
        throw new Error('A speed of zero would result in an infinite loop, check inputs.');
    }

    if (!Number.isInteger(speed)) {
        throw new Error('Floats currently not supported.');
    }

    Array.from(initialPosition).forEach((char, index) => {
        switch (char) {
        case 'R':
            particles.push(new Particle(index, speed > 0 ? speed : -speed));
            break;
        case 'L':
            particles.push(new Particle(index, speed > 0 ? -speed : speed));
            break;
        default:
            break;
        }
    });

    const maxDistance = Math.max(...particles.map(particle => particle.getDistanceToExit(chamberLength)), 0);
    const maxSteps = Math.abs(Math.ceil(maxDistance / speed));

    const particleArrays: string[][] = [...Array(maxSteps + 1)].map(() => Array(chamberLength).fill('.'));

    particles.forEach(particle => {
        let time = 0;
        do {
            particleArrays[time++][particle.position] = 'X';
        } while (particle.step(chamberLength));
    });

    return particleArrays.map(charArray => charArray.join(''));
}
