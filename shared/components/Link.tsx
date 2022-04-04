import React from 'react'
import { css, cx } from '@linaria/core'
import Link_ from 'next/link'
import { GREY } from '../utils/colors'
import { Text } from './Text'

interface Props {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Link(props: Props) {
  return (
    <Link_
      passHref
      href={props.to}
    >
      <Text
        center
        as="a"
        style="t4"
        color="dark"
        className={cx(
          css`
            text-decoration: underline;

            :hover {
              color: ${GREY};
            }
          `,
          props.className
        )}
      >
        {props.children}
      </Text>
    </Link_>
  )
}
