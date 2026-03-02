// ABOUTME: Tests for the EmailSubscribe form component.
// ABOUTME: Verifies form rendering, submission flow, and success/error states.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EmailSubscribe } from '../email-subscribe';

describe('EmailSubscribe', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders the subscribe prompt text', () => {
    render(<EmailSubscribe />);
    expect(screen.getByText(/If you want to follow along, leave your email below/)).toBeDefined();
  });

  it('renders an email input field', () => {
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    expect(input).toBeDefined();
    expect(input.getAttribute('type')).toBe('email');
  });

  it('renders a subscribe button', () => {
    render(<EmailSubscribe />);
    expect(screen.getByText('Subscribe')).toBeDefined();
  });

  it('updates email input value on change', () => {
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('shows success message after submission', async () => {
    vi.useRealTimers();
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com');
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/You're in/)).toBeDefined();
    });
  });

  it('clears email input after successful submission', async () => {
    vi.useRealTimers();
    render(<EmailSubscribe />);
    const input = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    const button = screen.getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });

  it('has a border-t separator at the top', () => {
    const { container } = render(<EmailSubscribe />);
    const wrapper = container.firstElementChild;
    expect(wrapper?.classList.contains('border-t')).toBe(true);
  });
});
