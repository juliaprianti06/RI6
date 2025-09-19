export default function Bhaskara(a: number, b: number, c: number): { x1: number | null; x2: number | null } {
    if (a === 0) {
        throw new Error('O valor de a não pode ser zero');
    }
    
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return { x1: null, x2: null };
    }

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return { x1, x2 };
}