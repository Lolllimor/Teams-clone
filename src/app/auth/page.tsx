'use client';
import { SignInCard } from '@/features/auth/components/sign-in-card';
import { SignUpCard } from '@/features/auth/components/sign-up-card';
import { SignInFlow } from '@/features/auth/types';
import { useState } from 'react';

const AuthPage = () => {
  const [state, setState] = useState<SignInFlow>('signIn');
  return (
    <div className="h-full flex items-center justify-center bg-[#5b5fc7]">
      <div className="md:h-auto md:w-[420px] flex justify-center items-center">
        {state === 'signIn' ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;