/// <reference types="react" />
import './card.css';
declare type Member = {
    name: string;
    imgUrl: string;
    noOfReads: number;
};
interface CardProps {
    label: string;
    members: Array<Member>;
}
export declare const Card: ({ label, members, ...props }: CardProps) => JSX.Element;
export {};
