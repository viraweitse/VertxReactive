// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VertxReactive title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VertxReactive/i);
    expect(titleElement).toBeInTheDocument();
});
