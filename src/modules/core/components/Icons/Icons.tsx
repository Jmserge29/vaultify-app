import React from "react";
import Svg, {
  Defs,
  G,
  Path,
  RadialGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
import theme from "../../../../../theme";

interface CustomSVGProps extends SvgProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
}
// CustomSVGs
const CarpetaSvg = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "",
  strokeWidth = "",
  ...props
}: CustomSVGProps) => (
  <Svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="M6.82036 3.8218V3.58827C6.82036 2.80625 6.18642 2.17236 5.40445 2.17236H1.41591C0.633937 2.17236 0 2.8063 0 3.58832V5.09928V21.1199C0 21.5109 0.316969 21.8279 0.707953 21.8279H20.479V5.23775C20.479 4.45574 19.845 3.82185 19.0631 3.82185L6.82036 3.8218Z"
      fill="#DB710D"
    />
    <Path
      d="M6.82036 3.8218V3.58827C6.82036 2.80625 6.18642 2.17236 5.40445 2.17236H1.41591C0.633938 2.17236 0 2.8063 0 3.58832V5.09928V21.1199C0 21.5109 0.316969 21.8279 0.707953 21.8279H10.1656V3.8218H6.82036Z"
      fill="#F58F00"
    />
    <Path
      d="M22.5831 7.19238H4.16197C3.48988 7.19238 2.91036 7.66488 2.77503 8.32324L0.078125 21.4438C0.195734 21.6717 0.433016 21.8279 0.707141 21.8279H21.2772C21.9989 21.8279 22.6052 21.285 22.6846 20.5676L23.9904 8.76401C24.0832 7.92551 23.4268 7.19238 22.5831 7.19238Z"
      fill="#FCC200"
    />
    <Path
      d="M12.9087 7.19238H4.16197C3.48988 7.19238 2.91036 7.66488 2.77503 8.32324L0.078125 21.4438C0.195734 21.6717 0.433016 21.8279 0.707141 21.8279H11.2892L12.9087 7.19238Z"
      fill="#FFDE47"
    />
  </Svg>
);

// Brands Svgs
const NetflixSVG = ({
  width = 26,
  height = 26,
  fill = "black",
  stroke = "",
  strokeWidth = "",
  ...props
}: CustomSVGProps) => {
  return (
    <Svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <Defs>
        <RadialGradient
          id="a"
          cx="48.34%"
          cy="49.419%"
          fx="48.34%"
          fy="49.419%"
          r="70.438%"
          gradientTransform="matrix(1 0 0 .55088 0 .222)"
        >
          <Stop offset="0%" stopColor="#000" />
          <Stop offset="100%" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Path d="M0 0h255.904v255.904H0z" />
      <Path
        d="m141.676 41.275-.067 38.361-.068 38.361-3.156-8.905-.006-.017-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.094-.084.145-39.143.114-86.797l-.058-86.644H141.676ZM80.138 41.16v86.732c0 47.703.047 86.779.104 86.836.057.057 3.011-.222 6.565-.62 3.553-.398 8.465-.893 10.914-1.1 3.756-.317 14.97-1.038 16.268-1.046.378-.002.402-1.95.457-36.735l.058-36.734 2.713 7.677.96 2.713 4.077-85.381-1.401-3.96a32065.7 32065.7 0 0 0-6.283-17.754l-.225-.628H80.138Z"
        stroke="#000"
        strokeWidth="2.956"
        fill="#B1060F"
      />
      <Path
        d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734 2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.064-.058.107-19.21.118-46.227l-34.136-98.14-.016 9.287-.068 38.361-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32065.7 32065.7 0 0 0-6.283-17.754l-.225-.628H80.138Z"
        fill="url(#a)"
      />
      <Path
        d="m80.139 41.16 34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.812.225 3.37.34 3.48.258L141.54 117.98v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628H80.139Z"
        fill="#E50914"
      />
    </Svg>
  );
};

const GoogleSVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    viewBox="0 0 256 262"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <Path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <Path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <Path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </Svg>
);

const AppleSVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "#000",
  ...props
}) => (
  <Svg viewBox="0 0 814 1000" width={width} height={height} {...props}>
    <Path
      fill={fill}
      d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
    />
  </Svg>
);

const WindowsSVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    viewBox="0 0 256 256"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Path fill="#F1511B" d="M121.666 121.666H0V0h121.666z" />
    <Path fill="#80CC28" d="M256 121.666H134.335V0H256z" />
    <Path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z" />
    <Path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z" />
  </Svg>
);

const AmazonSVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg height={height} width={width} viewBox="0 0 291.319 291.319" {...props}>
    <G>
      <Path
        fill={"#F4B459"}
        d="M252.089,239.901c-120.033,57.126-194.528,9.331-242.214-19.7c-2.95-1.83-7.966,0.428-3.614,5.426
        c15.886,19.263,67.95,65.692,135.909,65.692c68.005,0,108.462-37.107,113.523-43.58
        C260.719,241.321,257.169,237.78,252.089,239.901z M285.8,221.284c-3.223-4.197-19.6-4.98-29.906-3.714
        c-10.324,1.229-25.818,7.538-24.471,11.325c0.692,1.42,2.103,0.783,9.195,0.146c7.11-0.71,27.029-3.223,31.18,2.203
        c4.17,5.462-6.354,31.49-8.275,35.687c-1.857,4.197,0.71,5.28,4.197,2.485c3.441-2.795,9.668-10.032,13.847-20.274
        C285.718,238.845,288.249,224.479,285.8,221.284z"
      />
      <Path
        fill={"#484848"}
        d="M221.71,149.219V53.557C221.71,37.125,205.815,0,148.689,0C91.572,0,61.184,35.696,61.184,67.85
        l47.74,4.27c0,0,10.633-32.136,35.313-32.136s22.987,19.992,22.987,24.316v20.784C135.607,86.149,57.096,95.18,57.096,161.382
        c0,71.191,89.863,74.177,119.332,28.167c1.138,1.866,2.431,3.696,4.051,5.408c10.843,11.398,25.308,24.981,25.308,24.981
        l36.852-36.415C242.658,183.513,221.71,167.071,221.71,149.219z M112.511,152.578c0-30.579,32.764-36.779,54.722-37.507v26.319
        C167.224,193.527,112.511,185.634,112.511,152.578z"
      />
    </G>
  </Svg>
);

const UdemySVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg viewBox="0 0 412.77 799.91" width={width} height={height} {...props}>
    <Path
      d="M412.74 238.2l-206.4-119.1L0 238.2V119.1L206.37 0l206.4 119.1v119.1z"
      fill="#a435f0"
    />
    <Path d="M0 338.22h108.11v262.54c0 67.83 50.67 100.9 98.26 100.9 48 0 98.3-33.95 98.3-101.81V338.22h108.1v268.8c0 62.48-19.65 110.7-58.96 143.76-39.33 33.04-88.45 49.13-148.35 49.13-59.84 0-108.99-16.06-147.38-49.13C19.65 717.75 0 671.32 0 609.69z" />
  </Svg>
);

const SpotifySVG = ({
  width = 24,
  height = 24,
  fill = "#1ED760",
  stroke = "",
  strokeWidth = "",
  ...props
}: CustomSVGProps) => (
  <Svg
    width={width}
    height={height}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path
      fill={fill}
      d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
    />
  </Svg>
);

const YoutubeSVG: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "red",
  ...props
}) => (
  <Svg
    viewBox="0 0 256 180"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Path
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
      fill={fill}
    />
    <Path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
  </Svg>
);

// HeroIcons
const HomeIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12L11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </Svg>
);

const GridIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
    />
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
    />
  </Svg>
);

const TransactionsIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
  </Svg>
);

const NotificationIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    />
  </Svg>
);

const ChartIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </Svg>
);

const SettingsIcon: React.FC<CustomSVGProps> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = theme.colors.aquamarine[600],
  strokeWidth = 1.5,
  ...props
}) => (
  <Svg viewBox="0 0 24 24" fill={fill} width={width} height={height} {...props}>
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
    <Path
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </Svg>
);

const ArrowDowmCheckIcon: React.FC<CustomSVGProps> = ({
  width = 20,
  height = 20,
  color = theme.colors.white,
}) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={color}
    width={width}
    height={height}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
    />
  </Svg>
);

const ArrowUpCheckIcon: React.FC<CustomSVGProps> = ({
  width = 20,
  height = 20,
  color = "white",
}) => (
  <Svg
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
    strokeWidth="2"
  >
    <Path
      fillRule="evenodd"
      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default {
  NetflixSVG,
  CarpetaSvg,
  SpotifySVG,
  YoutubeSVG,
  GoogleSVG,
  AppleSVG,
  AmazonSVG,
  WindowsSVG,
  UdemySVG,
  HomeIcon,
  ArrowDowmCheckIcon,
  GridIcon,
  TransactionsIcon,
  NotificationIcon,
  ChartIcon,
  ArrowUpCheckIcon,
  SettingsIcon,
};
