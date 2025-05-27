import PasswordInput from '@/components/ui/PasswordInput';
import Submitting from '@/components/ui/Submitting';
import Text from '@/components/ui/Text';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import BackgroundImage from '@/components/ui/BackgroundImage';
import ForgotPasswordModal from '@/features/forgot-password/components/ForgotPassword';
import { useLoginMutation } from '@/features/login/api/mutate/user-login';
import '@/features/login/components/Login.css';
import { loginSchema } from '@/features/login/schema/login.schema';
import { LoginRequest } from '@/features/login/types/login-request';
import { Anchor, Grid } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  bgColor?: string;
  logo?: string;
  mainContainerBgColor?: string;

  keyboardClassName?: string;
  isFromTransition?: boolean;
}

const Login = ({

  isFromTransition = false,
}: LoginProps) => {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailKeyboardVisible, setEmailKeyboardVisible] = useState(false);
  const [isPasswordKeyboardVisible, setPasswordKeyboardVisible] =
    useState(false);

  const handleEmailKeyboardChange = (input: string) => {
    form.setFieldValue('kiosk_code', input);
  };

  const handlePasswordKeyboardChange = (input: string) => {
    form.setFieldValue('password', input);
  };

  // Form Handling
  const form = useForm<LoginRequest>({
    initialValues: {
      kiosk_code: '',
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
    <BackgroundImage className='fade-in-blur'>
      {!isFromTransition && <div></div>}

      {/* Two-column layout */}
      <Grid grow className='flex-1 pt-64'>
        {/* Left Column - Colored Text */}
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className='flex items-center justify-center'
        >
          <div className='text-center md:text-left'>
            <Title
              className='font-extrabold font-roboto-slab'
              size={80}
              lh={0.8}
              words={['Financial', 'Management', 'Information', 'System']}
              colors={['#000153', '#00039B', '#0A2EE4', '#DCE2EF']}
              vertical
            />
          </div>
        </Grid.Col>
        

        {/* Right Column - Login Form */}
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className='flex items-center justify-center'
        >
          <div className='w-full max-w-md'>
            <Title fz={48} fw={600} className='text-blue-900 font-roboto-slab'>
              Welcome!
            </Title>
            <Text fw={300} fz={24}>
              Log in your credential
            </Text>
            <form
              className='flex flex-col w-full gap-5 mt-10'
              onSubmit={form.onSubmit(handleSubmit)}
            >
              {/* Email Field */}
              <TextInput
                placeholder='Enter your email'
                label='Email'
                type='text'
                value={form.values.kiosk_code}
                onChange={(e) =>
                  form.setFieldValue('kiosk_code', e.target.value)
                }
                onFocus={() => {
                  setEmailKeyboardVisible(true);
                  setPasswordKeyboardVisible(false);
                }}
                error={form.errors.kiosk_code}
                autoComplete='off'
                withAsterisk
              />

              {/* PasswordInput with Forgot Password? */}
              <PasswordInput
                placeholder='Enter your password'
                label='Password'
                value={form.values.password}
                onChange={(e) => form.setFieldValue('password', e.target.value)}
                onFocus={() => {
                  setPasswordKeyboardVisible(true);
                  setEmailKeyboardVisible(false);
                }}
                error={form.errors.password}
                autoComplete='off'
                withAsterisk
              />
              <div className='flex justify-end'>
                <Anchor
                  href='#'
                  onClick={(event) => {
                    event.preventDefault();
                    setShowForgotModal(true);
                  }}
                  fw={600}
                  fz='16'
                  c='#25578F'
                  className='pt-2'
                >
                  Forgot your password?
                </Anchor>
              </div>

              <Button
                radius='xs'
                size='md'
                type='submit'
                className='duration-300 shadow-md trnsition-all te2xt-lg hover:shadow-lg'
                fullWidth
                loading={isPending}
                disabled={isPending}
              >
                Log In
              </Button>

            </form>
          </div>
        </Grid.Col>
      </Grid>
      {/* Forgot Password Modal */}
      <ForgotPasswordModal open={showForgotModal} onClose={() => setShowForgotModal(false)} />
    </BackgroundImage>
  );
}

export default Login;
