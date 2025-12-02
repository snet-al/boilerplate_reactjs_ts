import React, { useState } from 'react'
import { Alert, Box, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { AuthService } from '../../services'
import { useAppDispatch } from '../../store/redux'
import { setCredentials } from '../../store/redux/slices/auth'
import { LoginUserInput } from '../../types/user'
import { TOKEN } from '../../utils/constants'

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
      const response = await AuthService.login(values)
      const token = response?.data?.access_token
      const user = response?.data?.user

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
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: '#f5f5f5', padding: 2 }}
    >
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 420, padding: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Welcome back
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={3}>
          Sign in to access your dashboard.
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <Box display="flex" flexDirection="column" gap={2}>
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

            {error && <Alert severity="error">{error}</Alert>}

            <Button type="submit" disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}
