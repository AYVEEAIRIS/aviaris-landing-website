'use client';
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from '@mui/material';

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      const response = await fetch('https://formspree.io/f/xjggklra', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
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
      <Container
        sx={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '1rem' }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ marginTop: '1rem' }}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: '0.5rem', maxWidth: '1000px', margin: '0 auto' }}
        >
          Have questions or want to learn more about Aviaris or our product,
          Horizon? Fill out the form below and we'll get back to you as soon as
          possible.
        </Typography>
        {success && (
          <Alert
            severity="success"
            sx={{ marginTop: '1rem', maxWidth: '50ch', margin: '1rem auto' }}
          >
            Message sent successfully! We'll be in touch soon.
          </Alert>
        )}
        {error && (
          <Alert
            severity="error"
            sx={{ marginTop: '1rem', maxWidth: '50ch', margin: '1rem auto' }}
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
            alignItems: 'center',
            marginTop: '2rem',
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
        >
          <TextField
            name="name"
            label="Name"
            variant="outlined"
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
            value={formData.message}
            onChange={handleChange}
            disabled={success}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: '1rem' }}
            disabled={isLoading || success}
          >
            {isLoading ? 'Sending...' : 'Send Inquiry'}
          </Button>
        </Box>
      </Container>
    </section>
  );
}
