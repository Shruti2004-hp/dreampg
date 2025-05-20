import { useState } from "react";

export default function LoginForm({ onLogin }: { onLogin: (user: any, token: string) => void }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            setLoading(false);
            if (res.ok && data.token) {
                onLogin(data.user, data.token);
            } else {
                setMsg(data.message || "Login failed.");
            }
        } catch {
            setLoading(false);
            setMsg("Network error.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
                type="submit"
                className="w-full bg-pgpurple-600 text-white py-2 rounded hover:bg-pgpurple-700 transition"
                disabled={loading}
            >
                {loading ? "Signing in..." : "Sign In"}
            </button>
            {msg && <div className="text-center text-red-500">{msg}</div>}
        </form>
    );
}