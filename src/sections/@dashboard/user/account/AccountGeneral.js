import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Grid, Card, Typography, Stack, Button } from '@mui/material';

import useAuth from 'src/hooks/useAuth';

import { fData } from 'src/utils/formatNumber';

import { FormProvider, RHFTextField, RHFUploadAvatar } from 'src/components/hook-form';

import axios from 'src/utils/axios';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const { user, updateUser } = useAuth();

  const UpdateProfileSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().optional(),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateProfileSchema),
    defaultValues: user,
  });

  const {
    getValues,
    setError,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      const response = await axios.post('/profile/update', getValues());
      console.log(response);
      enqueueSnackbar('Profiel updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const formData = new FormData();

    formData.append('avatar', file);

    axios
      .post('/profile/upload-avatar', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(() => {
        setTimeout(() => {
          updateUser();
        }, 3000);
        enqueueSnackbar('Image uploaded successfully!', { variant: 'success' });
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      });
  };

  useEffect(() => {
    Object.keys(user).forEach((key) => {
      setValue(key, user[key]);
    });
  }, [user]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 3, pt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <RHFUploadAvatar
              name="fullAvatarUrl"
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <RHFTextField name="uuid" label="UUID" disabled />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="firstname" label="First name" />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="lastname" label="Last name" />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="username" label="Username" />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="email" label="Email Address" />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="phone" label="Phone Number" />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField name="role" label="Role" disabled />
              </Grid>
              <Grid item xs={6} />

              <Grid item xs={6}>
                <Button variant="contained" size="large" type="submit" disabled={isSubmitting} fullWidth>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </FormProvider>
  );
}
