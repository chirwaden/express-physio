// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
    mobile: 0,          //targeting all devices
    tablet: 900,        //targeting devices that are larger than the iPhone 6 Plus 
    desktop: 1200,      //targeting devices that are larger than the iPad and are desktop
    giant: 1800         //targeting all devices that are for 2k displays and above
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css()}
    }
  `
  return accumulator
}, {})

// More info on breakpoints go here: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md