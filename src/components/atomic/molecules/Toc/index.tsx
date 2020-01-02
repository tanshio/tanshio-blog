import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'

const TocWrapper = styled.nav`
  h2 {
    margin: 0;
  }
  @media (${mq.lg}) {
    //position: fixed;
    //right: 0;
    //top: 0;
    //padding-right: 2rem;
    //z-index: 99;
    max-width: 300px;
    font-size: 0.85rem;
    a {
      display: inline;
    }
    .is-active {
      background-color: var(--colorBgDark);
      color: var(--colorTextReverse);
      box-shadow: 0 5px 0 var(--colorBgDark), 0 -5px 0 var(--colorBgDark);
    }
  }
`

export type TocProps = {
  tableOfContents: string
}

// let timer: any = null

export const Toc = (props: TocProps) => {
  const navEl = useRef<HTMLDivElement>(null)
  // let callback: any = null
  // useEffect(() => {
  //   let observer: IntersectionObserver | null
  //   if (navEl.current && 'IntersectionObserver' in window) {
  //     const current = navEl.current
  //     const anchorList = Array.from(current.querySelectorAll('a'))
  //     const headingList = anchorList.map((e) => {
  //       const href = e.href
  //       const index = href.indexOf('/#')
  //       const hash = href.substr(index + 2, href.length - index - 2)
  //       return document.getElementById(decodeURI(hash))
  //     })
  //     callback = (
  //       entries: IntersectionObserverEntry[],
  //       o: IntersectionObserver
  //     ) => {
  //       if (entries.length > 2) {
  //         return
  //       }
  //
  //       clearTimeout(timer)
  //
  //       entries.forEach((entry) => {
  //         const id = entry.target.getAttribute('id')
  //         if (!id) return
  //         const href = `#${encodeURI(id)}`
  //         const currentIndex = anchorList.findIndex((l) => {
  //           const attr = l.getAttribute('href')
  //           if (attr) {
  //             return attr.indexOf(href) > -1
  //           }
  //           return false
  //         })
  //
  //         if (currentIndex > -1) {
  //           if (entry.isIntersecting) {
  //             // console.log('アクティブ、現在の見出しをアクティブにする')
  //             const prev = document.querySelector('.is-active')
  //             if (prev) {
  //               prev.classList.remove('is-active')
  //             }
  //             anchorList[currentIndex].classList.add('is-active')
  //           } else {
  //             const { top, height } = entry.boundingClientRect
  //
  //             const points = [entry.intersectionRatio, height]
  //             const point = top * -1
  //
  //             const closest = points.reduce(function(prev, curr) {
  //               return Math.abs(curr - point) < Math.abs(prev - point)
  //                 ? curr
  //                 : prev
  //             })
  //
  //             const isTop = points[0] >= closest
  //
  {
    /*            if (isTop) {*/
  }
  {
    /*              const prev = document.querySelector('.is-active')*/
  }
  //               if (prev) {
  //                 prev.classList.remove('is-active')
  //               }
  //               if (currentIndex !== 0) {
  //                 // timer = setTimeout(() => {
  //                 anchorList[currentIndex - 1].classList.add('is-active')
  //                 // }, 100)
  //               }
  //               // console.log('上から抜ける、前にセットする')
  //             } else {
  //               // console.log('下から抜ける、そのまま')
  //             }
  //           }
  //         }
  //       })
  //     }
  //     observer = new IntersectionObserver(callback, {
  //       // root: document.body,
  //       rootMargin: '0px 0px -100% 0px',
  //       threshold: 0,
  //     })
  //
  {
    /*    headingList.forEach((heading) => {*/
  }
  //       if (heading && observer) {
  //         observer.observe(heading)
  //       }
  {
    /*    })*/
  }
  {
    /*  }*/
  }

  //   return () => {
  //     if (observer) {
  //       console.log('disconnect')
  //       observer.disconnect()
  //       // clearTimeout(timer)
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <TocWrapper>
      <h2>目次</h2>
      <div
        ref={navEl}
        dangerouslySetInnerHTML={{ __html: props.tableOfContents }}
      />
    </TocWrapper>
  )
}

export default memo(Toc)
