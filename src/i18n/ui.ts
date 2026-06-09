// src/i18n/ui.ts

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.symptoms': 'Symptoms',
    'nav.nutrition': 'Nutrition',
    'nav.faq': 'FAQ',
    'nav.glossary': 'Glossary',
    'nav.compare': 'Compare Weeks',
    'nav.tools': 'Tools',
    'nav.checklists': 'Checklists',
    
    'welcome.back': 'Welcome back!',
    'welcome.title': 'Welcome to Week {week}! 🎉',
    'dashboard.weeks': 'You are {weeks} weeks, {days} days pregnant',
    'dashboard.trimester': 'Trimester',
    'dashboard.countdown': 'Days Until Due Date',
    'dashboard.milestone': 'Next Milestone',
    'dashboard.guide_btn': 'View Week {week} Guide →',
    'dashboard.share_btn': '🔗 Copy Shareable Progress Link',
    
    'calculator.title': 'Due Date Tracker',
    'calculator.subtitle': 'Input your dates below to instantly determine your gestational age and target due date.',
    'calculator.lmp': 'Last Period (LMP)',
    'calculator.conception': 'Conception Date',
    'calculator.edd': 'Due Date (EDD)',
    'calculator.calculate_btn': 'Calculate Due Date',
    'calculator.reset_btn': 'Reset'
  },
  es: {
    'nav.symptoms': 'Síntomas',
    'nav.nutrition': 'Nutrición',
    'nav.faq': 'FAQ',
    'nav.glossary': 'Glosario',
    'nav.compare': 'Comparar Semanas',
    'nav.tools': 'Herramientas',
    'nav.checklists': 'Checklists',
    
    'welcome.back': '¡Bienvenida de nuevo!',
    'welcome.title': '¡Bienvenida a la Semana {week}! 🎉',
    'dashboard.weeks': 'Tienes {weeks} semanas y {days} días de embarazo',
    'dashboard.trimester': 'Trimestre',
    'dashboard.countdown': 'Días para la fecha de parto',
    'dashboard.milestone': 'Próximo Hito',
    'dashboard.guide_btn': 'Ver Guía de la Semana {week} →',
    'dashboard.share_btn': '🔗 Copiar Enlace de Progreso',
    
    'calculator.title': 'Calculadora de Fecha de Parto',
    'calculator.subtitle': 'Ingresa tus fechas para determinar al instante tu edad gestacional y fecha de parto.',
    'calculator.lmp': 'Último Período (LMP)',
    'calculator.conception': 'Fecha de Concepción',
    'calculator.edd': 'Fecha de Parto (EDD)',
    'calculator.calculate_btn': 'Calcular Fecha de Parto',
    'calculator.reset_btn': 'Reiniciar'
  }
} as const;
