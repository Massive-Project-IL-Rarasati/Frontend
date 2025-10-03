// src/config/constants.js

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  TIMEOUT: 10000,
};

// Map Configuration
export const MAP_CONFIG = {
  DEFAULT_CENTER: {
    lat: -6.918168067932129,
    lng: 107.60761260986328,
  },
  DEFAULT_ZOOM: 14,
  BANDUNG_COORDINATES: [-6.917464, 107.619123],
};

// Pagination
export const PAGINATION = {
  ITEMS_PER_PAGE: 3,
  ARTIKEL_HOME_LIMIT: 3,
  PUPPIES_HOME_LIMIT: 3,
};

// UI Dimensions
export const UI_DIMENSIONS = {
  AVATAR_SIZE: 'w-8',
  LOGO_WIDTH: 'w-20',
  BUTTON_DEFAULT_WIDTH: 'w-[188px]',
  BUTTON_DEFAULT_HEIGHT: 'h-[62px]',
  MAP_CONTAINER: {
    width: '300px',
    height: '200px',
  },
  MAP_PICKER: {
    height: '300px',
    width: '100%',
  },
};

// Text Lengths
export const TEXT_LIMITS = {
  MAX_COMMENT_LENGTH: 500,
  MAX_POST_LENGTH: 1000,
  MIN_PASSWORD_LENGTH: 6,
};

// Time Formats
export const TIME_FORMAT = {
  POST_DATE: 'DD/MM/YYYY',
  COMMENT_DATE: 'DD/MM/YYYY HH:mm',
};

// Image Placeholders
export const PLACEHOLDERS = {
  AVATAR: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
  DEFAULT_IMAGE: 'https://via.placeholder.com/150',
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  ADOPSI: '/adopsi',
  ARTIKEL: '/artikel',
};

// Form Validation Messages (Indonesian)
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Field ini wajib diisi',
  EMAIL_REQUIRED: 'Email wajib diisi',
  EMAIL_INVALID: 'Format email tidak valid',
  PASSWORD_REQUIRED: 'Password wajib diisi',
  PASSWORD_MIN_LENGTH: `Password minimal ${TEXT_LIMITS.MIN_PASSWORD_LENGTH} karakter`,
  LOGIN_FAILED: 'Email atau password tidak valid',
};

// Status Messages
export const STATUS_MESSAGES = {
  SUCCESS: 'Berhasil',
  ERROR: 'Terjadi kesalahan',
  LOADING: 'Mohon tunggu sebentar...',
  NO_DATA: 'Tidak ada data',
};