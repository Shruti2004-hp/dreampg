import { useState } from "react";

export default function RegisterForm({ onRegister }: { onRegister: () => void }) {
    const [form, setForm] = useState({ name: "", email: "", password: "", isAdmin: false });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setLoading(false);
            if (res.ok) {
                setMsg("Registration successful! Please login.");
                setTimeout(onRegister, 1200);
            } else {
                setMsg(data.message || "Registration failed.");
            }
        } catch {
            setLoading(false);
            setMsg("Network error.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pgpurple-200"
                required
            />
            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pgpurple-200"
                required
            />
            <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pgpurple-200"
                required
            />
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isAdmin"
                    checked={form.isAdmin}
                    onChange={handleChange}
                />
                <span>Register as Admin</span>
            </label>
            <button
                type="submit"
                className="w-full bg-pgpurple-600 text-white py-2 rounded hover:bg-pgpurple-700 transition"
                disabled={loading}
            >
                {loading ? "Registering..." : "Register"}
            </button>
            {msg && <div className="text-center text-pgpurple-600">{msg}</div>}
        </form>
    );
}