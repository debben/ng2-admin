import { OpaqueToken } from '@angular/core';
import { PAGES_MENU } from './pages/pages.menu';

export const MENU = [
  ...PAGES_MENU
];

export const MENU_TOKEN = new OpaqueToken('MENU_TOKEN');
