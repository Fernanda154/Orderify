export interface ServiceOrder {
    id: number;
    title: string;
    description: string;
    user_id: number;
    status: string;
}
export interface ServiceOrderForm {
    id?: number;
    title: string;
    description: string;
    user_id: number;
    status: number;
}