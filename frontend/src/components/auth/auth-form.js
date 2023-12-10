'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { login, register } from '@/services/auth-services';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Eye, EyeOff, Loader, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function UserAuthForm({ className, toggle, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const router = useRouter();
  const { toast } = useToast();

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function onSubmitLogin(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await login(formData.email, formData.password);
      if (res.user !== null) {
        toast({
          title: 'Login Successful',
        });
      }
      if (res.user !== null) router.replace('/');
    } catch (error) {
      toast({
        description: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmitRegister(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await register(formData.email, formData.password);
      console.log(res);
      if (res.user !== null) {
        toast({
          title: 'Register Successful',
        });
      }
      if (res.user.refreshToken) router.push('/');
    } catch (error) {
      toast({
        description: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={toggle ? onSubmitRegister : onSubmitLogin}>
        <div className="grid gap-2">
          {toggle && (
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-1">
                <label className="sr-only" htmlFor="firstname">
                  FirstName
                </label>
                <Input
                  id="firstname"
                  placeholder="firstname"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      firstname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid gap-1">
                <label className="sr-only" htmlFor="lastname">
                  LastName
                </label>
                <Input
                  id="lastname"
                  placeholder="lastname"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      lastname: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          )}
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.email}
              onChange={(e) =>
                setFormData((values) => ({
                  ...values,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="password"
              type={isVisible ? 'text' : 'password'}
              autoCapitalize="none"
              autoCorrect="off"
              icon={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
              value={formData.password}
              onChange={(e) =>
                setFormData((values) => ({
                  ...values,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <Button
            isLoading={isLoading}
            color="primary"
            className="mt-2"
            type="submit"
            disabled={isLoading}
          >
            {toggle ? (
              <div className="flex items-center">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span>Sign Up with Email</span>
              </div>
            ) : (
              <div className="flex items-center">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span>Sign In with Email</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
