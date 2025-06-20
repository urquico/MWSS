import PasswordInput from '@/components/ui/PasswordInput';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import ForgotPasswordModal from '@/features/forgot-password/components/ForgotPassword';
import { useLoginMutation } from '@/features/login/api/mutate/user-login';
import '@/features/login/components/Login.css';
import { loginSchema } from '@/features/login/schema/login.schema';
import { LoginRequest } from '@/features/login/types/login-request';
import { Anchor, Grid, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appVersion } from '@/utils/version';

interface LoginProps {
  isFromTransition?: boolean;
}

const Login = ({
  isFromTransition = false,
}: LoginProps) => {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailKeyboardVisible, setEmailKeyboardVisible] = useState(false);
  const [isPasswordKeyboardVisible, setPasswordKeyboardVisible] = useState(false);

  // Form Handling
  const form = useForm<LoginRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const { mutateAsync, isPending } = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginRequest) => {
    navigate('/landing');
  };

  if (isPending)
    return (
      <main className='z-50 flex flex-col items-center justify-center w-full h-screen'>
        <Submitting title='Logging in please wait...' />
      </main>
    );

  return (
    <Box className="relative w-full min-h-screen overflow-hidden bg-white">

      {/* Fixed Left Background Image */}
      <div
        className="fixed top-0 left-0 z-0 hidden w-full h-full pointer-events-none md:block"
        style={{
          backgroundImage: "url('/background-circle.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Layout */}
      <Grid className="relative z-10 h-screen" grow gutter={0}>
        {/* Left: Title */}
        <Grid.Col span={{ base: 12, md: 6 }} className="items-center justify-center hidden h-screen md:flex">
          <Title
            className="font-extrabold text-center md:text-left font-roboto-slab"
            size={80}
            lh={0.8}
            words={['Financial', 'Management', 'Information', 'System']}
            colors={['#000153', '#00039B', '#0A2EE4', '#DCE2EF']}
            vertical
          />
        </Grid.Col>

        {/* Right: Login Form */}
        <Grid.Col span={{ base: 12, md: 6 }} className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md mt-[35%] md:mt-0">
            <Title fz={48} fw={600} className="mb-2 text-center text-blue-900 font-roboto-slab">
              Welcome!
            </Title>
            <Text fw={300} fz={24} className="mb-8 text-center">
              Log in your credential
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)} className="flex flex-col gap-5">
              <TextInput
                label="Email"
                placeholder="Enter your email"
                type="text"
                value={form.values.email}
                onChange={(e) => form.setFieldValue('email', e.target.value)}
                error={form.errors.email}
                withAsterisk
                autoComplete="off"
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={form.values.password}
                onChange={(e) => form.setFieldValue('password', e.target.value)}
                error={form.errors.password}
                withAsterisk
                autoComplete="off"
              />

              <div className="flex justify-end">
                <Anchor
                  href="#"
                  fw={600}
                  fz="16"
                  c="#25578F"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForgotModal(true);
                  }}
                  className="pt-2"
                >
                  Forgot your password?
                </Anchor>
              </div>

              <Button
                type="submit"
                radius="xs"
                size="md"
                fullWidth
                loading={isPending}
                disabled={isPending}
                className="text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Log In
              </Button>
              <div className="text-xs text-right text-gray-400">
                Version {appVersion}
              </div>
            </form>
          </div>
        </Grid.Col>
      </Grid>

      {/* Center-Bottom Vector */}
      <div className="absolute bottom-0 z-0 hidden transform -translate-x-1/2 left-1/2 md:block">
        <img
          src="/vector.png"
          alt="Vector"
          className="block"
          style={{
            width: '20vw',
            height: '18vw',
            maxWidth: '393px',
            maxHeight: '374px',
            minWidth: '180px',
            minHeight: '120px',
          }}
        />
      </div>

      {/*  Forgot Password Modal */}
      <ForgotPasswordModal open={showForgotModal} onClose={() => setShowForgotModal(false)} />
    </Box>
  );
}

export default Login;