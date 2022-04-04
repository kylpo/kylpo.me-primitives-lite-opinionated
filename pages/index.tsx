import type { NextPage } from 'next'
import Image from 'next/image'
import { MEDIUM_UP } from '../shared/utils/breakpoints'
import { BlACK, DARK, WHITE } from '../shared/utils/colors'
import { MAX_PAGE_WIDTH } from '../shared/utils/sizes'
import { css } from '@linaria/core'
import { Text } from '../shared/components/Text'
import { Link } from '../shared/components/Link'

const CONTENT_OFFSET = 32

const LINK_STYLE = css`
  padding: 2px 0;
`

const Home: NextPage = () => {
  return (
    <>
      <column
        $="main"
        className={css`
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          max-width: ${MAX_PAGE_WIDTH}px;
          min-height: 100vh;

          ${MEDIUM_UP} {
            min-height: calc(100vh - ${CONTENT_OFFSET}px);
          }
        `}
      >
        <Text
          as="h1"
          style="h1"
          bold
          className={css`
            z-index: 100;
            animation: logo 4s ease-out;
            @keyframes logo {
              0% {
                color: ${BlACK};
              }
              20% {
                color: ${WHITE};
              }
              30% {
                color: ${WHITE};
              }
              70% {
                color: ${DARK};
              }
              100% {
                color: ${DARK};
              }
            }

            ${MEDIUM_UP} {
              transform: translateY(${CONTENT_OFFSET}px);
            }
          `}
        >
          KYLPO
        </Text>

        <column
          className={css`
            align-items: center;
            justify-content: center;

            ${MEDIUM_UP} {
              transform: translateY(${CONTENT_OFFSET}px);
            }
          `}
        >
          <div
            className={css`
              flex-basis: 48px;

              ${MEDIUM_UP} {
                flex-basis: 64px;
              }
            `}
          />

          <column
            $="nav"
            className={css`
              align-items: center;
              justify-content: center;
            `}
          >
            <Link
              to="https://medium.com/@kylpo"
              className={LINK_STYLE}
            >
              Blog
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
              className={LINK_STYLE}
            >
              Talks
            </Link>
            <Link
              to="mailto:kyle@chronstruct.com"
              className={LINK_STYLE}
            >
              Email
            </Link>
            <Link
              to="https://github.com/kylpo"
              className={LINK_STYLE}
            >
              Github
            </Link>
            <Link
              to="https://twitter.com/kylpo"
              className={LINK_STYLE}
            >
              Twitter
            </Link>
            <Link
              to="https://www.linkedin.com/in/kylpo/"
              className={LINK_STYLE}
            >
              LinkedIn
            </Link>
          </column>

          <div
            className={css`
              flex-basis: 48px;

              ${MEDIUM_UP} {
                flex-basis: 64px;
              }
            `}
          />

          <div
            className={css`
              padding: 0 16;
            `}
          >
            <Text
              as="p"
              style="t4"
              center
              html
              className={css`
                padding: 0 16;
              `}
            >
              {'<b>Kyle Poole</b> is a full stack web and mobile developer'}
            </Text>
          </div>
        </column>
      </column>

      {/* Black overlay on page load that fades out */}
      <div
        className={css`
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;

          animation: backgound 4s ease-out;
          @keyframes backgound {
            0% {
              opacity: 1;
              background-color: ${BlACK};
              visibility: visible;
            }
            40% {
              opacity: 1;
              background-color: ${BlACK};
              visibility: visible;
            }
            100% {
              opacity: 0;
              visibility: hidden;
            }
          }
        `}
      />
    </>
  )
}

export default Home
