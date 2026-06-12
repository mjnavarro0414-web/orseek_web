import localFont from "next/font/local";

export const supreme = localFont({
  src: [
    {
      path: "../fonts/supreme/Supreme-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/supreme/Supreme-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});
