import { useNavigate } from "react-router-dom";
import RegisterForm from "@/components/Auth/RegisterForm";

export default function Register() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pgpurple-100 to-white">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-pgpurple-600 mb-6">
                    Create your account
                </h2>
                <RegisterForm onRegister={() => navigate("/login")} />
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-pgpurple-600 hover:underline"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}