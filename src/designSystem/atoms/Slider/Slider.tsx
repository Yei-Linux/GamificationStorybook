import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import {
  ArrowLeft,
  ArrowRight,
  Dot,
  Dots,
  KeenSlider,
  SliderWrapper,
} from './Slider.styles'
import { colorLight } from '../../../styles/theme'

export interface SliderProps {
  children: React.ReactNode
  slidesPerView: number
  spacing: number
  initial: number
  isLoop: boolean
  vertical?: boolean
  isAutoplay?: boolean
}

const Slider = ({
  children,
  slidesPerView,
  spacing,
  initial,
  isLoop,
  vertical,
  isAutoplay,
}: SliderProps) => {
  const [pause, setPause] = useState(false)
  const timer: any = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider]: any = useKeenSlider({
    initial,
    loop: isLoop,
    slidesPerView,
    spacing,

    vertical,
    centered: vertical,

    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },

    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const handleAutoplay = () => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }

  const handleIntervalOnAutoplay = () => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }

  useEffect(() => {
    isAutoplay && handleAutoplay()
  }, [sliderRef])

  useEffect(() => {
    if (isAutoplay) return handleIntervalOnAutoplay()
  }, [pause, slider])

  return (
    <Fragment>
      <SliderWrapper>
        <KeenSlider
          isVertical={vertical}
          ref={sliderRef}
          className="keen-slider"
        >
          {children}
        </KeenSlider>
        {slider && !vertical && (
          <>
            <ArrowLeft
              onClick={(e: any) => e.stopPropagation() || slider.prev()}
              fill={
                currentSlide === 0
                  ? colorLight.neutral.five
                  : colorLight.primary.one
              }
              name="arrowLeft"
            />
            <ArrowRight
              onClick={(e: any) => e.stopPropagation() || slider.next()}
              fill={
                currentSlide === slider.details().size - 1
                  ? colorLight.neutral.five
                  : colorLight.primary.one
              }
              name="arrowRight"
            />
          </>
        )}
      </SliderWrapper>

      {slider && !vertical && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <Dot
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx)
              }}
              isActive={currentSlide === idx}
            />
          ))}
        </Dots>
      )}
    </Fragment>
  )
}

Slider.defaultProps = {
  initial: 0,
  isLoop: true,
  slidesPerView: 1,
  spacing: 0,
  vertical: false,
  isAutoplay: false,
}

export default Slider
