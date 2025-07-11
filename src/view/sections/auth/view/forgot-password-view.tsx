'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, Stack, Typography } from '@mui/material';

import { paths } from '@/lib/config/paths';
import { OTPPurpose } from '@/lib/types/auth';

import AuthOtp from '../auth-otp';
import NewPassword from '../new-password';
import ForgotPasswordEmail from '../forgot-password-email';

export default function ForgotPasswordView() {
  const t = useTranslations();
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState<string>('');

  const steps = [
    <ForgotPasswordEmail
      onSuccess={(email) => {
        setEmail(email);
        setCurrentStep(1);
      }}
    />,
    <AuthOtp
      purpose={OTPPurpose.ResetPassword}
      onSuccess={() => setCurrentStep(2)}
      email={email}
    />,
    <NewPassword onSuccess={() => {}} />,
  ];

  return (
    <Stack>
      <Typography variant="h3" component="h1">
        {t('Pages.Auth.forgot_password_title')}
      </Typography>

      {steps[currentStep]}

      <Stack spacing={1} sx={{ mt: 2 }}>
        <Typography variant="body2" textAlign="center">
          {t('Pages.Auth.login_instead')}{' '}
          <Link href={paths.auth.login} underline="hover">
            {t('Global.Action.login')}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
