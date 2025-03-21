import { useEffect, useState } from "react";

type MockUser = {
    id: number;
    name: string;
};

export default function MockUsers() {
    const [users, setUsers] = useState<MockUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://67ddc38c471aaaa742827861.mockapi.io/Users");
            const data = await res.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div className="py-10">
            <form className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Adicionar Usuário</button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user) => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
