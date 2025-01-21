//* CONTEXT FOR ACCESSIBILITY FEATURES
import React, { createContext, useState, useEffect, useContext } from 'react';
import { ConvShd } from '../utils/ConsistentColorLib';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('KAINAKAPVSTM') || 'light');
  const [color, setColor] = useState(localStorage.getItem('KAINAKAPCLRS') || "g");
  const [size, setSize] = useState(localStorage.getItem('KAINAKAPSZNG') || 'normal');
  const [narration, setNarration] = useState((localStorage.getItem('KAINAKAPNRTN')) || true);

  function handleColorChange() {
    
    const shd50 = ConvShd(color, 'a');
    const shd200 = ConvShd(color, 'b');
    const shd300 = ConvShd(color, 'c');
    const shd500 = ConvShd(color, 'd');
    const shd700 = ConvShd(color, 'e');
    const shd950 = ConvShd(color, 'f');

    const white = "#ffffff";
    const black = "#000000";
    const gray100 = "#f1f5f9";
    const gray300 = "#cbd5e1";
    const gray700 = "#334155";
    const gray800 = "#1e293b";
    const gray900 = "#0f172a";

    document.documentElement.style.setProperty('--color-text-base', theme === 'light' ? black : white);
    document.documentElement.style.setProperty('--color-text-muted', theme === 'light' ? shd700 : shd300);
    document.documentElement.style.setProperty('--color-text-primary', shd500);
    document.documentElement.style.setProperty('--color-text-inverted', theme === 'light' ?  white : black);
    document.documentElement.style.setProperty('--color-text-inverted-hover', theme === 'light' ? shd700 : shd300);
    document.documentElement.style.setProperty('--color-text-inverted-active', theme === 'light' ? shd500 : shd300);
    document.documentElement.style.setProperty('--color-text-inverted-checked', theme === 'light' ? white : black);
    document.documentElement.style.setProperty('--color-page-bg', theme === 'light' ? white : gray900);
    document.documentElement.style.setProperty('--color-panel-bg', theme === 'light' ? gray300 : gray800);
    document.documentElement.style.setProperty('--color-panel-bg-alt', theme === 'light' ? shd50 : shd950);
    document.documentElement.style.setProperty('--color-btn-bg', shd500);
    document.documentElement.style.setProperty('--color-btn-bg-hover', theme === 'light' ? gray100 : gray700);
    document.documentElement.style.setProperty('--color-btn-bg-active', theme === 'light' ? shd950 : shd200);
    document.documentElement.style.setProperty('--color-cbox-bg-checked', shd500);
  }
  
  useEffect(() => {
    localStorage.setItem('KAINAKAPVSTM', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('KAINAKAPCLRS', color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem('KAINAKAPSZNG', size);
  }, [size]);

  useEffect(() => {
    localStorage.setItem('KAINAKAPNRTN', narration);
  }, [narration]);

  return (
    <AccessibilityContext.Provider
      value={{ theme, setTheme, color, setColor, size, setSize, narration, setNarration }}
    >
      {children}
      {handleColorChange()}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);