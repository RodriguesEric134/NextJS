"use client";
import { useState, useEffect } from 'react';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários");
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Erro ao buscar usuários");
                if (err instanceof Error) {
                    setError("Erro ao buscar usuários: " + err.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li key={user.id} className="bg-white p-4 shadow-md text-gray-700 rounded-lg">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}