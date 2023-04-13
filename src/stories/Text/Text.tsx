// import { useEffect, useState } from 'react'
import './Text.css'

export interface TextProps {
  children: React.ReactNode,
  variant?: 'body' | 'title' | 'subtitle',
  extra?: boolean,
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className?: string,
}

export function Text ({
  children,
  variant = 'body',
  extra,
  as = 'p',
  className,
}: TextProps) {
  // const [DefaultVariant, setDefaultVariant] = useState(variant)
  // const [DefaultAs, setDefaultAs] = useState(as)

  // useEffect(() => {
  //   setDefaultVariant(variant)
  // }, [])

  // useEffect(() => {
  //   if (DefaultVariant === 'title' && !as)
  //     return setDefaultAs('h1')
  //   if (DefaultVariant === 'subtitle' && !as)
  //     return setDefaultAs('h2')

  //   setDefaultAs(as)
  // }, [DefaultVariant])

  const addExtra = extra ? '__extra' : ''

  const textClass = `text text--${variant}${addExtra} ${className ? className : ''}`

  // if (DefaultAs === 'h1') {
  //   return (
  //     <h1 className={textClass}>
  //       {children}
  //     </h1>
  //   )
  // }
  
  // if (DefaultAs === 'h2') return (
  //   <h2 className={textClass}>
  //     {children}
  //   </h2>
  // )

  return (
    <p className={textClass}>
      {children}
    </p>
  )
}
