
import { ColorsTheme } from '../theme/Theme.interface';

export const Colors: ColorsTheme = {
  light: {
    primary: {
      DEFAULT: '#10B981', // emerald-500
      light: '#6EE7B7',   // emerald-300
      dark: '#047857',    // emerald-700
    },
    secondary: {
      DEFAULT: '#F59E0B', // amber-500
      light: '#FCD34D',   // amber-300
      dark: '#B45309',    // amber-700
    },
    accent: {
      DEFAULT: '#F43F5E', // rose-500
      light: '#FDA4AF',   // rose-300
      dark: '#9F1239',    // rose-800
    },
    background: '#F9FAFB', // gray-50
    text: '#1F2937',       // gray-800
    error: '#dc2626',      // red-600
  },
   dark: {
    primary: {
      DEFAULT: '#34D399', // emerald-400 (un poco más brillante en dark mode)
      light: '#6EE7B7',
      dark: '#059669',
    },
    secondary: {
      DEFAULT: '#FBBF24', // amber-400
      light: '#FCD34D',
      dark: '#B45309',
    },
    accent: {
      DEFAULT: '#FB7185', // rose-400
      light: '#FDA4AF',
      dark: '#BE123C',
    },
    background: '#111827', // gray-900
    text: '#F9FAFB',       // gray-50
    error: '#dc2626',      // red-600
  }
} as const;