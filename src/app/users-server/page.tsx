import { resolve } from "path";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();

    return (
        <ul className="space-y-4 p-4">
            {data.map((user: User) => (
                <li key={user.id} className="bg-white p-4 shadow-md text-gray-700 rounded-lg">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}