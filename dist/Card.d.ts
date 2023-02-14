/// <reference types="react" />
import './card.css';
declare type Member = {
    firstName: string;
    lastName: string;
    imageURL: string;
    titlesRead: number;
};
interface CardProps {
    label: string;
    members: Array<Member>;
}
export declare const Card: ({ label, members, ...props }: CardProps) => JSX.Element;
export {};
