import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue to PulseMetrics."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;