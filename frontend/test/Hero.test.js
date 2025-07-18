import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/hero/Hero';

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    
    const heroImage = screen.getByAltText("Hero Image"); // Alt text, not inner text
    
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});