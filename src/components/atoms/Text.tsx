import { w } from 'windstitch'

export const Text = w.text(
  `select-none`,
  {
    variants: {
      color: {
        white: `
          text-white
        `,
        pink: `
          text-accent-3
        `,
        black: `
          text-accent-2
        `,
        yellow: `
          text-accent-4
        `,
      },
      align: {
        'left': 'text-left',
        'right': 'text-right',
        'center': 'text-center'
      },
      font: {
        'prompt': 'font-prompt',
        'rock_salt': 'font-rock_salt',
      },
      weight: {
        'black': 'font-black',
        'bold': 'font-bold',
        'semi-bold': 'font-semi-bold',
        'medium': 'font-medium',
        'normal': 'font-normal',
        'light': 'font-light',
        'thin': 'font-thin',
      },
      size: {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'base': 'text-base',
        'md': 'text-md',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
      }
    },
    defaultVariants: {
      font: 'prompt',
      size: 'base',
      color: 'white',
      align: 'left',
      weight: 'normal',
    }
  },
)
