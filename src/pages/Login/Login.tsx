import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
// import { AuthService } from '../../services'
import { useAppDispatch } from '../../store/redux'
import { setCredentials } from '../../store/redux/slices/auth'
import { LoginUserInput } from '../../types/user'
import { TOKEN } from '../../utils/constants'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card/Card'
import { Alert, AlertDescription } from '../../components/ui/Alert/Alert'

export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<LoginUserInput>({
    username: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange =
    (field: keyof LoginUserInput) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      // const response = await AuthService.login(values)
      // const token = response?.data?.access_token
      // const user = response?.data?.user

      const token = 'test-token'
      const user = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
      }

      if (token) {
        localStorage.setItem(TOKEN, token)
      }

      if (token && user) {
        dispatch(setCredentials({ user, accessToken: token }))
      }

      navigate('/')
    } catch (loginError) {
      const message =
        loginError instanceof Error
          ? loginError.message
          : 'Unable to login, please try again.'

      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Sign in to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4">
              <Input
                label="Username"
                value={values.username}
                onChange={handleChange('username')}
                autoComplete="username"
                required
              />
              <Input
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange('password')}
                autoComplete="current-password"
                required
              />

              {error ? (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              ) : null}

              <Button type="submit" disabled={isSubmitting} variant="default" >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
