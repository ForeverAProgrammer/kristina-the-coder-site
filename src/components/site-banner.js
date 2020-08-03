import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import styles from './site-banner.module.css'
import styled from 'styled-components'

const BackgroundSection = ({ data }) => (
    
      <BackgroundImage
        className={styles.banner}
        alt={data.name}
        fluid={data.banner.fluid}
      >
          <div className = {styles.siteTitle}> 
            <div className = {styles.siteMainTitle}>{data.siteTitle}</div>
            <hr />
            <div className = {styles.siteSubTitle}>{data.siteSubTitle}</div>
          </div>
          
        </BackgroundImage>

  )

  const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 600px;
`

export default StyledBackgroundSection