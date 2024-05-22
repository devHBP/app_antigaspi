import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Promo = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.59175 1.20025C7.43448 1.34256 7.26921 1.47578 7.09675 1.59925C6.79875 1.79925 6.46375 1.93725 6.11175 2.00725C5.95875 2.03725 5.79875 2.05025 5.47975 2.07525C4.67875 2.13925 4.27775 2.17125 3.94375 2.28925C3.56185 2.42409 3.21498 2.64272 2.9286 2.9291C2.64222 3.21548 2.42359 3.56235 2.28875 3.94425C2.17075 4.27825 2.13875 4.67925 2.07475 5.48025C2.06384 5.69202 2.04114 5.90301 2.00675 6.11225C1.93675 6.46425 1.79875 6.79925 1.59875 7.09725C1.51175 7.22725 1.40775 7.34925 1.19975 7.59225C0.67875 8.20425 0.41775 8.51025 0.26475 8.83025C-0.08825 9.57025 -0.08825 10.4303 0.26475 11.1703C0.41775 11.4903 0.67875 11.7963 1.19975 12.4083C1.40775 12.6513 1.51175 12.7733 1.59875 12.9033C1.79875 13.2013 1.93675 13.5363 2.00675 13.8883C2.03675 14.0413 2.04975 14.2013 2.07475 14.5203C2.13875 15.3213 2.17075 15.7223 2.28875 16.0563C2.42359 16.4382 2.64222 16.785 2.9286 17.0714C3.21498 17.3578 3.56185 17.5764 3.94375 17.7113C4.27775 17.8293 4.67875 17.8613 5.47975 17.9253C5.79875 17.9503 5.95875 17.9633 6.11175 17.9933C6.46375 18.0633 6.79875 18.2023 7.09675 18.4013C7.22675 18.4883 7.34875 18.5923 7.59175 18.8003C8.20375 19.3213 8.50975 19.5823 8.82975 19.7353C9.56975 20.0883 10.4298 20.0883 11.1698 19.7353C11.4897 19.5823 11.7957 19.3213 12.4078 18.8003C12.6508 18.5923 12.7727 18.4883 12.9028 18.4013C13.2008 18.2013 13.5357 18.0633 13.8877 17.9933C14.0407 17.9633 14.2008 17.9503 14.5198 17.9253C15.3208 17.8613 15.7218 17.8293 16.0557 17.7113C16.4377 17.5764 16.7845 17.3578 17.0709 17.0714C17.3573 16.785 17.5759 16.4382 17.7108 16.0563C17.8288 15.7223 17.8608 15.3213 17.9247 14.5203C17.9497 14.2013 17.9627 14.0413 17.9928 13.8883C18.0627 13.5363 18.2017 13.2013 18.4007 12.9033C18.4877 12.7733 18.5917 12.6513 18.7997 12.4083C19.3207 11.7963 19.5818 11.4903 19.7348 11.1703C20.0878 10.4303 20.0878 9.57025 19.7348 8.83025C19.5818 8.51025 19.3207 8.20425 18.7997 7.59225C18.6574 7.43498 18.5242 7.26971 18.4007 7.09725C18.2009 6.79914 18.0623 6.46434 17.9928 6.11225C17.9584 5.90301 17.9357 5.69202 17.9247 5.48025C17.8608 4.67925 17.8288 4.27825 17.7108 3.94425C17.5759 3.56235 17.3573 3.21548 17.0709 2.9291C16.7845 2.64272 16.4377 2.42409 16.0557 2.28925C15.7218 2.17125 15.3208 2.13925 14.5198 2.07525C14.308 2.06434 14.097 2.04164 13.8877 2.00725C13.5357 1.93774 13.2009 1.79906 12.9028 1.59925C12.7305 1.47552 12.5652 1.34231 12.4078 1.20025C11.7957 0.679252 11.4897 0.418252 11.1698 0.265252C10.8044 0.0906332 10.4047 0 9.99975 0C9.59484 0 9.19507 0.0906332 8.82975 0.265252C8.50975 0.418252 8.20375 0.679252 7.59175 1.20025ZM13.8308 6.17025C13.983 6.32286 14.0686 6.52965 14.0686 6.74525C14.0686 6.96085 13.983 7.16764 13.8308 7.32025L7.31975 13.8323C7.24556 13.9135 7.15569 13.9788 7.05556 14.0243C6.95543 14.0698 6.84711 14.0945 6.73716 14.097C6.6272 14.0995 6.51788 14.0796 6.4158 14.0387C6.31372 13.9978 6.22099 13.9366 6.14322 13.8588C6.06545 13.781 6.00425 13.6883 5.96331 13.5862C5.92236 13.4841 5.90253 13.3748 5.90501 13.2648C5.90749 13.1549 5.93223 13.0466 5.97773 12.9464C6.02323 12.8463 6.08855 12.7564 6.16975 12.6823L12.6798 6.17125C12.8324 6.01895 13.0392 5.93342 13.2548 5.93342C13.4704 5.93342 13.6771 6.01895 13.8298 6.17125L13.8308 6.17025ZM13.7978 12.7133C13.7978 13.001 13.6834 13.277 13.48 13.4805C13.2765 13.6839 13.0005 13.7983 12.7128 13.7983C12.425 13.7983 12.149 13.6839 11.9455 13.4805C11.7421 13.277 11.6278 13.001 11.6278 12.7133C11.6278 12.4255 11.7421 12.1495 11.9455 11.946C12.149 11.7426 12.425 11.6283 12.7128 11.6283C13.0005 11.6283 13.2765 11.7426 13.48 11.946C13.6834 12.1495 13.7978 12.4255 13.7978 12.7133ZM7.28775 8.37325C7.43023 8.37325 7.57132 8.34519 7.70296 8.29066C7.8346 8.23613 7.95421 8.15622 8.05496 8.05546C8.15571 7.95471 8.23563 7.8351 8.29016 7.70346C8.34469 7.57183 8.37275 7.43074 8.37275 7.28825C8.37275 7.14577 8.34469 7.00468 8.29016 6.87304C8.23563 6.7414 8.15571 6.62179 8.05496 6.52104C7.95421 6.42029 7.8346 6.34037 7.70296 6.28584C7.57132 6.23132 7.43023 6.20325 7.28775 6.20325C6.99999 6.20325 6.72402 6.31756 6.52054 6.52104C6.31706 6.72452 6.20275 7.00049 6.20275 7.28825C6.20275 7.57601 6.31706 7.85199 6.52054 8.05546C6.72402 8.25894 6.99999 8.37325 7.28775 8.37325Z" fill="white"/>
    </Svg>
    
  )
}

export default Promo