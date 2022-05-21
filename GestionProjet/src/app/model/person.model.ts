import { Position } from './position.model';

export class Person {
    id !: number;
    first_name !: string;//max length 30
    last_name !: string;//max length 30
    email !: string;//max length 30
    password !: string;//max length 255
    position !: Position;
    }
    