"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const batchSvg = <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4316 6.62014C14.2734 5.49613 15.7036 4.98119 17.0687 5.31054L18.1102 5.56181C18.8466 5.73947 19.6207 5.67444 20.3171 5.37642L21.3021 4.9549C22.5932 4.40241 24.0892 4.67153 25.1068 5.63933L25.8832 6.3777C26.4321 6.89975 27.135 7.23048 27.8871 7.32059L28.9509 7.44805C30.3452 7.61511 31.5063 8.5962 31.9036 9.94313L32.2068 10.9707C32.4211 11.6973 32.8645 12.3352 33.4708 12.7893L34.3283 13.4316C35.4523 14.2734 35.9673 15.7036 35.6379 17.0687L35.3867 18.1102C35.209 18.8466 35.274 19.6207 35.5721 20.3171L35.9936 21.3021C36.5461 22.5932 36.2769 24.0892 35.3091 25.1068L34.5708 25.8832C34.0487 26.4321 33.718 27.135 33.6279 27.8871L33.5004 28.9509C33.3334 30.3452 32.3523 31.5063 31.0053 31.9036L29.9777 32.2068C29.2512 32.4211 28.6133 32.8645 28.1592 33.4708L27.5169 34.3283C26.6751 35.4523 25.2449 35.9673 23.8797 35.6379L22.8382 35.3867C22.1018 35.209 21.3278 35.274 20.6313 35.5721L19.6463 35.9936C18.3553 36.5461 16.8592 36.2769 15.8416 35.3091L15.0653 34.5708C14.5164 34.0487 13.8135 33.718 13.0614 33.6279L11.9976 33.5004C10.6032 33.3334 9.44219 32.3523 9.04484 31.0053L8.74169 29.9777C8.52735 29.2512 8.084 28.6133 7.47769 28.1592L6.62014 27.5169C5.49613 26.6751 4.98119 25.2449 5.31054 23.8797L5.56181 22.8382C5.73947 22.1018 5.67444 21.3278 5.37642 20.6313L4.9549 19.6463C4.40241 18.3553 4.67153 16.8592 5.63933 15.8416L6.3777 15.0653C6.89975 14.5164 7.23048 13.8135 7.32059 13.0614L7.44805 11.9976C7.61511 10.6032 8.5962 9.44219 9.94313 9.04484L10.9707 8.74169C11.6973 8.52735 12.3352 8.084 12.7893 7.47769L13.4316 6.62014Z" fill="#4797F6" />
  <g clipPath="url(#clip0_2606_8362)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7773 15.4695C14.5019 15.6294 14.2679 15.8519 14.0944 16.119C13.9208 16.386 13.8126 16.6902 13.7783 17.0068C13.7282 17.4933 13.5465 16.9316 15.6428 22.7792C17.3663 27.5855 17.5257 28.0206 17.6051 28.121C17.6687 28.1979 17.7489 28.2594 17.8398 28.3007C17.9307 28.342 18.0298 28.3621 18.1296 28.3594C18.492 28.3387 18.55 28.2796 19.0277 27.4415C19.3663 26.847 19.431 26.7493 19.474 26.7643C19.5023 26.7739 19.8143 26.8926 20.1673 27.0269C20.973 27.3341 21.029 27.3459 21.2602 27.2619C21.3898 27.2145 21.4568 27.1741 21.5166 27.108C21.5614 27.0592 21.7671 26.7195 21.9749 26.3541L22.3519 25.6891L23.0663 25.9611C23.4588 26.1104 23.8345 26.2408 23.9001 26.2498C23.9883 26.2626 24.0657 26.2511 24.1957 26.205C24.4274 26.1222 24.463 26.0775 24.888 25.3272C25.0743 24.9986 25.2391 24.7083 25.2547 24.6829C25.2782 24.6439 25.3904 24.6779 26.0303 24.9202C26.9326 25.2613 27.015 25.2699 27.3074 25.0548C27.3897 24.9944 27.4546 24.9133 27.4956 24.8198C27.6257 24.5434 27.7762 25.0107 25.7038 19.2551C23.6328 13.5033 23.791 13.9012 23.441 13.5532C23.1193 13.2252 22.6926 13.0208 22.2354 12.9755C21.7549 12.926 22.0917 12.8224 18.2944 14.184C16.4239 14.8554 14.8407 15.4332 14.7773 15.4695ZM21.6808 17.2522C21.9407 17.2479 22.2162 17.4406 22.3057 17.689C22.3603 17.8408 22.3487 18.0427 22.2765 18.1963C22.1518 18.4622 22.2461 18.419 20.0213 19.2201C17.8761 19.9925 17.9364 19.975 17.698 19.8993C17.6192 19.8691 17.5457 19.8264 17.4803 19.7729C17.3844 19.6934 17.3581 19.6519 17.3003 19.4913C17.2424 19.3307 17.2362 19.2819 17.2594 19.1595C17.2897 18.9977 17.3742 18.8525 17.495 18.753C17.5606 18.6989 17.9689 18.5441 19.5606 17.9703C21.3428 17.3271 21.5577 17.2548 21.6808 17.2522ZM20.7024 20.4388C20.9623 20.4345 21.2379 20.6272 21.3273 20.8755C21.4168 21.1239 21.3273 21.4481 21.1243 21.6105C20.9707 21.7331 19.0174 22.4399 18.8284 22.4406C18.6657 22.4446 18.5072 22.3881 18.3837 22.2819C18.2878 22.2024 18.2615 22.1608 18.2036 22.0003C18.1458 21.8397 18.1396 21.7909 18.1628 21.6685C18.1778 21.5901 18.218 21.4814 18.2532 21.4276C18.3779 21.2346 18.4015 21.2233 19.5232 20.818C20.4297 20.4902 20.5835 20.4412 20.7024 20.4388Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_2606_8362">
      <rect width="16" height="16" fill="white" transform="translate(10.2372 15.6574) rotate(-19.802)" />
    </clipPath>
  </defs>
</svg>

const ngnSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2606_8361)">
    <rect width="24" height="24" rx="12" fill="#FF4E4E" />
    <path d="M0 0H24V24H0V0Z" fill="#008751" />
    <path d="M8 0H16V24H8V0Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_2606_8361">
      <rect width="24" height="24" rx="12" fill="white" />
    </clipPath>
  </defs>
</svg>

const appleLogo = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.389 9.34133C12.3836 8.35812 12.8284 7.61602 13.7285 7.06949C13.2249 6.34882 12.464 5.95232 11.4594 5.87463C10.5083 5.79962 9.46883 6.4292 9.08841 6.4292C8.68655 6.4292 7.76495 5.90142 7.0416 5.90142C5.54669 5.92553 3.95801 7.0936 3.95801 9.46993C3.95801 10.1718 4.0866 10.897 4.34379 11.6453C4.68671 12.6285 5.92444 15.0397 7.21574 14.9995C7.89087 14.9834 8.36774 14.52 9.24647 14.52C10.0984 14.52 10.5405 14.9995 11.2933 14.9995C12.5953 14.9808 13.7151 12.7893 14.042 11.8034C12.2952 10.9809 12.389 9.39223 12.389 9.34133V9.34133ZM10.8727 4.94232C11.604 4.0743 11.5371 3.28398 11.5156 3C10.87 3.03751 10.1225 3.43937 9.69655 3.93499C9.22772 4.46545 8.95177 5.12181 9.01071 5.86123C9.70995 5.91482 10.3476 5.55582 10.8727 4.94232V4.94232Z" fill="white" />
</svg>

const googlePlayLogo = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_2665_729)">
    <path d="M9 10.0605L11.2102 12.2707L3.9375 16.4692C3.75806 16.5741 3.5529 16.6268 3.34512 16.6214C3.13734 16.616 2.93521 16.5526 2.7615 16.4385L2.6805 16.38L9 10.0605ZM2.25 3.3105L7.9395 9L2.25 14.6895V3.3105ZM12.555 6.5055L15.1875 8.02575C15.9375 8.4585 15.9375 9.54075 15.1875 9.97425L12.555 11.4945L10.0605 9L12.555 6.5055ZM3.9375 1.53075L11.2102 5.72925L9 7.9395L2.6805 1.61925C2.8569 1.47996 3.07115 1.39703 3.29536 1.38124C3.51956 1.36546 3.74332 1.41755 3.9375 1.53075Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_2665_729">
      <rect width="18" height="18" fill="white" />
    </clipPath>
  </defs>
</svg>



const Hero = () => {
  const buttoms = [
    { name: 'Apple Store', logo: appleLogo, onClick: () => console.log('Clicked Apple') },
    {
      name: 'Google Play', logo: googlePlayLogo, onClick: function() {
        window.open('https://play.google.com/store/apps/details?id=com.zoltraa.app', '_blank');
      }
    },
  ];
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="text-center pt-16 bg-white flex flex-col items-center" id="intro">
      <motion.div
        className="inline-flex flex-row gap-2 items-center py-[4px] px-[12px] bg-[#F6F2FF] rounded-full mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="w-[8px] h-[8px] bg-[#A479FF] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="text-sm font-medium text-[#A479FF]">
          Introducing Zoltraa
        </div>
      </motion.div>

      <div className="relative px-8 md:px-0">
        <motion.div
          className="absolute -left-6 md:-left-14 top-[-10px]"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 8, -6, 4, -2, 0],
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
            rotate: { duration: 0.8, delay: 0.6, ease: 'easeInOut' },
            y: { duration: 3, delay: 1.2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {batchSvg}
        </motion.div>
        <motion.h1
          className="text-[22px] sm:text-[30px] md:text-[35px] leading-[1.2] font-semibold text-[#1A1A1A] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Turn your transactions into<br />
          insights for smarter money<br />
          management in Nigeria.
        </motion.h1>
        <motion.div
          className="absolute -right-2 md:-right-2 bottom-[-5px]"
          initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, -10, 6, -4, 2, 0],
            y: [0, 3, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
            rotate: { duration: 0.8, delay: 0.65, ease: 'easeInOut' },
            y: { duration: 3.5, delay: 1.4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {ngnSvg}
        </motion.div>
      </div>

      <motion.p
        className="text-[#A3A3A3] mt-7 text-[12px]/[18px] sm:text-[14px]/[20px] font-medium px-6 md:px-0"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        Connect your accounts or upload your data to see your<br />
        <span className="md:hidden"> </span>
        spending, income, and habits in one place.
      </motion.p>

      <motion.div
        className="mt-[48px] flex flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {buttoms.map((buttom, index) => {
          return (
            <motion.button
              key={index}
              onClick={buttom.onClick}
              className="flex flex-row gap-2 items-center py-[7px] px-[12px] bg-[#171717] rounded-[10px] hover:bg-[#262626] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {buttom.logo}
              <div className="text-[14px]/[20px] font-medium text-[#FFFFFF]">
                {buttom.name}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {MockupSection()}
    </section>
  );
};

const MockupSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="relative mt-[34px] flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 w-[355px] min-h-[400px] flex items-center justify-center">

        {!isLoaded && (
          <div className="w-full h-[600px] bg-gray-600 animate-pulse rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full" />
          </div>
        )}

        <img
          src="/Shots_Mockups_1.png"
          alt="App Mockup"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto object-contain transition-opacity duration-500 ${isLoaded ? "opacity-100 block" : "opacity-0 hidden"
            }`}
        />
      </div>

      <div className="absolute bottom-0 w-full sm:w-full md:w-[808px] h-[400px] bg-gradient-to-b from-[#E9F5FF] to-[#FFFFFF] rounded-t-[32px] z-0">
      </div>
    </motion.div>
  );
};

export default Hero;
