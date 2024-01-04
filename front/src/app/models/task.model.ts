export interface Task {
    id?: number;
    created_at?: Date;
    title: string;
    description: string;
    done?: boolean;
}