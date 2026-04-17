'use client';
import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { theme } from '@/config/theme';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xqedznpk', {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        console.error('Formspree response data:', data);
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <Box
        sx={{
          backgroundColor: theme.palette.primary.light + '30',
          py: 16,
          px: { xs: 4, md: 12 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ maxWidth: '480px', width: '100%', textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mt: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Have questions or want to learn more about Aviaris or Horizon? We'd
            love to hear from you.
          </Typography>
        </Box>

        {success && (
          <Alert
            severity="success"
            sx={{ mb: 3, width: '100%', maxWidth: '480px' }}
          >
            Message sent successfully! We'll be in touch soon.
          </Alert>
        )}
        {error && (
          <Alert
            severity="error"
            sx={{ mb: 3, width: '100%', maxWidth: '480px' }}
          >
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: '480px',
          }}
        >
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            disabled={success}
            required
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            disabled={success}
            required
          />
          <TextField
            name="message"
            label="Comments or Questions"
            rows={4}
            multiline
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
            disabled={success}
            required
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isLoading || success}
            sx={{ mt: 1 }}
          >
            {isLoading ? 'Sending...' : 'Send Inquiry'}
          </Button>
        </Box>
      </Box>
    </section>
  );
}
