import styled from "styled-components";

// font_families
export const fontFamilyRegular = "EnnVisions";
export const fontFamilyMedium = "EnnVisionsMedium";
export const fontFamilyBold = "EnnVisionsBold";

// media device sizes
export const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "480px",
  mobileBS: "576px",
  tabletS: "600px",
  tablet: "768px",
  tabletB: "868px",
  tabletL: "991px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
// media devices
export const mediaDeviceMin = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  mobileXL: `(min-width: ${deviceSize.mobileXL})`,
  mobileBS: `(min-width: ${deviceSize.mobileBS})`,
  tabletS: `(min-width: ${deviceSize.tabletS})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  tabletB: `(min-width: ${deviceSize.tabletB})`,
  tabletL: `(min-width: ${deviceSize.tabletL})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`,
};
// media devices
export const mediaDeviceMax = {
  mobileS: `(max-width: ${deviceSize.mobileS})`,
  mobileM: `(max-width: ${deviceSize.mobileM})`,
  mobileL: `(max-width: ${deviceSize.mobileL})`,
  mobileXL: `(max-width: ${deviceSize.mobileXL})`,
  mobileBS: `(max-width: ${deviceSize.mobileBS})`,
  tabletS: `(max-width: ${deviceSize.tabletS})`,
  tabletB: `(max-width: ${deviceSize.tabletB})`,
  tablet: `(max-width: ${deviceSize.tablet})`,
  tabletL: `(max-width: ${deviceSize.tabletL})`,
  laptop: `(max-width: ${deviceSize.laptop})`,
  laptopL: `(max-width: ${deviceSize.laptopL})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  desktopL: `(max-width: ${deviceSize.desktop})`,
};

export const whiteColor = "#ffffff";

export const pureDark = "#000000";
export const pureDark2 = "#061229";
export const pureDark3 = "#1F3340";
export const pureDark4 = "#181F24";
export const pureDark5 = "#192A35";

export const lightGreen1 = "#8BADB7";
export const lightGreen2 = "#8AA5AD";
export const darkGreen1 = "#71929C";

export const pink1 = "#FD469E";

export const gray1 = "#616161";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;

export const SmallHeadingBlack = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: ${pureDark};
  font-family: ${fontFamilyRegular};
`;
