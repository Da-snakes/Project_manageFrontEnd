
import { Person } from "./person.model";
import { Project } from "./project.model";

export class Task {
    id !: number;
    status !: string; //max length 30
    description !: string; //max length 30
    date !: Date;
    dead_line !: Date;
    project !: Project;
    person !: Person;
    }
    