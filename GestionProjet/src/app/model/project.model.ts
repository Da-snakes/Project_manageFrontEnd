
import { Person } from "./person.model";
import { Portfolio } from "./portfolio.model";

export class Project {
    id !: number;
    name !: string;
    description !: number;
    person !: Person;
    portfolio !: Portfolio;
    status !: string;
    }
    