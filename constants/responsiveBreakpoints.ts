import type { ISliderBreakpoints } from "~/dto/breakpoints";

export const desktopMini = 1200,
  desktop = 1450,
  desktopWide = 1903,
  desktopBigWide = 2590,
  mobileMini = 320,
  mobileMedium = 360,
  mobile = 425,
  mobileWide = 578,
  tablet = 768,
  tabletWide = 992;
export const categorySliderBreakpoints: ISliderBreakpoints = {
  0: {
    slidesPerView: 1.2,
  },
  [mobile]: {
    slidesPerView: 1.2,
  },

  [mobileWide]: {
    slidesPerView: 2,
  },
  [tabletWide]: {
    slidesPerView: 2,
  },
  [desktopMini]: {
    slidesPerView: 3,
  },
  [desktop]: {
    slidesPerView: 4,
  },
};

export const productSliderBreakpoints: ISliderBreakpoints = {
  0: {
    slidesPerView: 1.7,
    spaceBetween: 20,
  },
  [mobile]: {
    slidesPerView: 1.7,
    spaceBetween: 20,
  },

  [mobileWide]: {
    slidesPerView: 2,
  },
  [tabletWide]: {
    slidesPerView: 3,
  },
  [desktopMini]: {
    slidesPerView: 4,
  },
  [desktop]: {
    slidesPerView: 5,
  },
};
export const PARTNERS_BREAKPOINTS: ISliderBreakpoints = {
  0: {
    slidesPerView: 2.2,
  },
  [mobile]: {
    slidesPerView: 2.4,
  },

  [mobileWide]: {
    slidesPerView: 3.4,
  },
  [tabletWide]: {
    slidesPerView: 4.2,
  },
  [desktopMini]: {
    slidesPerView: 4.2,
  },
  [desktop]: {
    slidesPerView: 5.2,
  },
};

export const compareBreakpoints: ISliderBreakpoints = {
  0: {
    slidesPerView: 2.2,
  },
  [mobile]: {
    slidesPerView: 2.2,
  },

  [mobileWide]: {
    slidesPerView: 3,
  },
  [tabletWide]: {
    slidesPerView: 2,
  },
  [desktopMini]: {
    slidesPerView: 3,
  },
  [desktop]: {
    slidesPerView: 3,
  },
};
