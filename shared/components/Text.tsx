import React from 'react'
import { css, cx } from '@linaria/core'

import { MEDIUM, LARGE_UP } from '../utils/breakpoints'
import {
  BlACK,
  WHITE,
  SILVER,
  GREY,
  PRIMARY,
  SECONDARY,
  SECONDARY_ACCENT,
  DARK,
} from '../utils/colors'
import { IS_DEV } from '../utils/environment'

/* Prop -> property maps */

const TEXT_FONT = 'Arial, Helvetica, sans-serif'
// const HEADING_FONT = "Arial Black, sans-serif"
const HEADING_FONT = 'Arial, Helvetica, sans-serif'

const BOLD_CLASS = css`
  font-weight: bold;
`
const CENTER_CLASS = css`
  text-align: center;
`
const ALL_CAPS_CLASS = css`
  text-transform: uppercase;
`

const styles = {
  t: css`
    font-family: ${TEXT_FONT};
  `,
  t1: css`
    font-family: ${TEXT_FONT};
    font-size: 20px;
    line-height: 24px;
    @media ${MEDIUM} {
      font-size: 24px;
      line-height: 32px;
    }
    @media ${LARGE_UP} {
      font-size: 26px;
      line-height: 34px;
    }
  `,
  t2: css`
    font-family: ${TEXT_FONT};
    font-size: 18px;
    line-height: 28px;
    @media ${MEDIUM} {
      font-size: 20px;
      line-height: 24px;
    }
    @media ${LARGE_UP} {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  t3: css`
    font-family: ${TEXT_FONT};
    font-size: 16px;
    /* line-height: 18px; */
    line-height: 20px;
    letter-spacing: 0.3px;
    @media ${MEDIUM} {
      font-size: 18px;
      line-height: 28px;
    }
    @media ${LARGE_UP} {
      font-size: 20px;
      /* line-height: 28px; */
      line-height: 30px;
    }
  `,
  t4: css`
    font-family: ${TEXT_FONT};
    font-size: 16px;
    line-height: 24px;
    @media ${LARGE_UP} {
      font-size: 18px;
      line-height: 28px;
    }
  `,
  t5: css`
    font-family: ${TEXT_FONT};
    font-size: 14px;
    line-height: 20px;
    @media ${LARGE_UP} {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  t6: css`
    font-family: ${TEXT_FONT};
    font-size: 13px;
    line-height: 20px;
  `,
  h1: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 44px;
    line-height: 52px;
    @media ${MEDIUM} {
      font-size: 60px;
      line-height: 68px;
    }
    @media ${LARGE_UP} {
      font-size: 84px;
      line-height: 96px;
    }
  `,
  h2: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    @media ${MEDIUM} {
      font-size: 44px;
      line-height: 52px;
    }
    @media ${LARGE_UP} {
      font-size: 64px;
      line-height: 72px;
    }
  `,
  h3: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;
    @media ${MEDIUM} {
      font-size: 36px;
      line-height: 44px;
    }
    @media ${LARGE_UP} {
      font-size: 50px;
      line-height: 52px;
    }
  `,
  h4: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 26px;
    line-height: 34px;
    @media ${MEDIUM} {
      font-size: 32px;
      line-height: 40px;
    }
    @media ${LARGE_UP} {
      font-size: 40px;
      line-height: 48px;
    }
  `,
  h5: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    @media ${MEDIUM} {
      font-size: 26px;
      line-height: 34px;
    }
    @media ${LARGE_UP} {
      font-size: 32px;
      line-height: 40px;
    }
  `,
  h6: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    @media ${LARGE_UP} {
      font-size: 26px;
      line-height: 34px;
    }
  `,
} as const

const colors = {
  white: css`
    color: ${WHITE};
  `,
  black: css`
    color: ${BlACK};
  `,
  dark: css`
    color: ${DARK};
  `,
  silver: css`
    color: ${SILVER};
  `,
  grey: css`
    color: ${GREY};
  `,
  primary: css`
    color: ${PRIMARY};
  `,
  secondary: css`
    color: ${SECONDARY};
  `,
  secondaryAccent: css`
    color: ${SECONDARY_ACCENT};
  `,
  unset: undefined,
} as const

interface Props {
  style: keyof typeof styles
  children: React.ReactNode
  color?: keyof typeof colors
  className?: string
  bold?: boolean
  center?: boolean
  allCaps?: boolean
  html?: boolean
  as?: keyof JSX.IntrinsicElements
}

export const Text = ({
  as: Comp = 'span',
  color = 'dark',
  style,
  bold,
  center,
  allCaps,
  className,
  html,
  children,
  ...props
}: Props) => (
  <txt
    $={Comp}
    {...props}
    className={cx(
      styles[style],
      colors[color],
      bold && BOLD_CLASS,
      center && CENTER_CLASS,
      allCaps && ALL_CAPS_CLASS,
      className
    )}
    data-text-style={IS_DEV ? style : undefined}
  >
    {html ? (
      <span
        dangerouslySetInnerHTML={{
          __html: `${children}`,
        }}
      />
    ) : (
      children
    )}
  </txt>
)
