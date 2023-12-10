import AuthScreen from '@/components/auth/auth-screen';
import { Toaster } from '@/components/ui/toaster';

const AuthPage = () => {
  return (
    <div>
      <AuthScreen />
      <Toaster />
    </div>
  );
};

export default AuthPage;
