export interface RequestCreate 
{
    name: string;
    email: string;
}

export interface ResponseCreate 
{
    name: string;
    email: string;
    id: string;
}

export interface User 
{
    name: string;
    email: string;
    id: string;
}

export interface ResponseUser 
{
    data: User
}

export interface RequestUpdate 
{
    name: string;
    email: string;
    
}

export interface ResponseUpdate 
{
    name: string;
    email: string;
}