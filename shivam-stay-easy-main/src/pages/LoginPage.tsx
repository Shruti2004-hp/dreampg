import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/Auth/LoginForm";

export default function Login() {
    const navigate = useNavigate();
    const handleLogin = (user: any, token: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        if (user.isAdmin) navigate('/admin');
        else navigate('/');
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pgpurple-100 to-white">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-pgpurple-600 mb-6">Sign in to your account</h2>
                <LoginForm onLogin={handleLogin} />
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Don&apos;t have an account? <a href="/register" className="text-pgpurple-600 hover:underline">Register</a>
                </div>
            </div>
        </div>
    );
}