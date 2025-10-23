import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button heroSlider__button--prev"
      type="button"
      {...restProps}
    >
      <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292892 6.65682C-0.0976296 7.04734 -0.0976333 7.68051 0.292893 8.07103L6.65684 14.435C7.04737 14.8255 7.68053 14.8255 8.07106 14.435C8.46158 14.0445 8.46158 13.4113 8.07106 13.0208L2.41422 7.36393L8.07107 1.70708C8.4616 1.31656 8.4616 0.683394 8.07108 0.292869C7.68055 -0.097656 7.04739 -0.0976569 6.65686 0.292867L0.292892 6.65682ZM60 6.36401L1 6.36393L1 8.36393L60 8.36401L60 6.36401Z" fill="black"/>
      </svg>

      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button heroSlider__button--next"
      type="button"
      {...restProps}
    >
      <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292892 6.65682C-0.0976296 7.04734 -0.0976333 7.68051 0.292893 8.07103L6.65684 14.435C7.04737 14.8255 7.68053 14.8255 8.07106 14.435C8.46158 14.0445 8.46158 13.4113 8.07106 13.0208L2.41422 7.36393L8.07107 1.70708C8.4616 1.31656 8.4616 0.683394 8.07108 0.292869C7.68055 -0.097656 7.04739 -0.0976569 6.65686 0.292867L0.292892 6.65682ZM60 6.36401L1 6.36393L1 8.36393L60 8.36401L60 6.36401Z" fill="black"/>
      </svg>
      {children}
    </button>
  )
}
