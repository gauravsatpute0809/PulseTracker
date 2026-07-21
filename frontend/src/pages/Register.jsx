import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Start your AI-powered business journey with PulseMetrics."
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;