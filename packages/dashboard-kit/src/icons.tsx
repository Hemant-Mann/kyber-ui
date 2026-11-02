import type { ReactNode, SVGProps } from "react";

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  // Keep icon props permissive across consuming apps that may have stricter or older SVG typings.
  const svgProps = props as Record<string, unknown>;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...svgProps}>
      {children}
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
    </IconBase>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </IconBase>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </IconBase>
  );
}

export function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 20h8M12 17v3" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4 10-10" />
    </IconBase>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m18 6-12 12M6 6l12 12" />
    </IconBase>
  );
}

// Navigation and action icons. Same 24px grid and stroke as the icons above.
type IconProps = SVGProps<SVGSVGElement>;
const icon = (paths: string[], extra?: ReactNode) =>
  function KitIcon(props: IconProps) {
    return (
      <IconBase {...props}>
        {paths.map((d) => <path key={d} d={d} />)}
        {extra}
      </IconBase>
    );
  };

export const GridIcon = icon(["M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z"]);
export const UsersIcon = icon(["M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20", "M17 11a3 3 0 1 0 0-6", "M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35"], <circle cx="10" cy="8" r="3.5" />);
export const UserIcon = icon(["M19 20v-1.5a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4V20"], <circle cx="12" cy="7.5" r="3.5" />);
export const BriefcaseIcon = icon(["M9 6V4.5h6V6", "M4 6h16v13H4z", "M4 12h16"]);
export const KeyIcon = icon(["m10.6 13.4 7.9-7.9M16 8l2.5 2.5M14 10l1.5 1.5"], <circle cx="7.5" cy="16.5" r="3.5" />);
export const QrIcon = icon(["M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z", "M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2"]);
export const CarIcon = icon(["M5 16V11l2-5h10l2 5v5", "M3 16h18v2H3z", "M5 11h14"], <><circle cx="7.5" cy="14" r=".6" /><circle cx="16.5" cy="14" r=".6" /></>);
export const FlagIcon = icon(["M5 21V4", "M5 4h11l-2 4 2 4H5"]);
export const MessageIcon = icon(["M4 5h16v11H9l-5 4z"]);
export const FileTextIcon = icon(["M6 3h8l4 4v14H6z", "M14 3v4h4", "M9 12h6M9 16h6"]);
export const ReceiptIcon = icon(["M6 3h12v18l-3-2-3 2-3-2-3 2z", "M9 8h6M9 12h6"]);
export const ListIcon = icon(["M9 6h11M9 12h11M9 18h11", "M4 6h.01M4 12h.01M4 18h.01"]);
export const ImageIcon = icon(["M4 4h16v16H4z", "m4 16 5-5 4 4 3-3 4 4"], <circle cx="15.5" cy="8.5" r="1.5" />);
export const BellIcon = icon(["M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z", "M10 20.5h4"]);
export const BookIcon = icon(["M4 5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2z", "M4 20a2 2 0 0 0 2 1h14"]);
export const BagIcon = icon(["M5 8h14l-1 13H6z", "M9 8V6a3 3 0 0 1 6 0v2"]);
export const PackageIcon = icon(["M12 3 20 7.5v9L12 21l-8-4.5v-9z", "M4 7.5 12 12l8-4.5M12 12v9"]);
export const HelpIcon = icon(["M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.4", "M12 17h.01"], <circle cx="12" cy="12" r="9" />);
export const StoreIcon = icon(["M4 9 5.5 4h13L20 9", "M4 9h16v2a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 11z", "M5 13v8h14v-8", "M10 21v-5h4v5"]);
export const LogOutIcon = icon(["M10 4H5v16h5", "M14 8l4 4-4 4M18 12H9"]);
export const PlusIcon = icon(["M12 5v14M5 12h14"]);
export const RefreshIcon = icon(["M20 12a8 8 0 1 1-2.3-5.6", "M20 4v5h-5"]);
export const DownloadIcon = icon(["M12 4v11M7 10l5 5 5-5", "M5 20h14"]);
export const ColumnsIcon = icon(["M4 4h16v16H4z", "M10 4v16M15 4v16"]);
export const FilterIcon = icon(["M4 5h16l-6 7.5V19l-4 1.5v-8z"]);
export const EyeIcon = icon(["M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"], <circle cx="12" cy="12" r="3" />);
export const PencilIcon = icon(["M4 20h4L19 9l-4-4L4 16z", "m13.5 6.5 4 4"]);
export const TrashIcon = icon(["M4 7h16", "M9 7V4h6v3", "M6 7l1 13h10l1-13", "M10 11v6M14 11v6"]);
export const ArchiveIcon = icon(["M3 4h18v4H3z", "M5 8v12h14V8", "M10 12h4"]);
export const RotateIcon = icon(["M4 12a8 8 0 1 0 2.3-5.6", "M4 4v5h5"]);
export const MoreIcon = icon([], <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>);
export const ArrowRightIcon = icon(["M5 12h14M13 6l6 6-6 6"]);
export const CalendarIcon = icon(["M4 6h16v15H4z", "M4 10h16M8 3v4M16 3v4"]);
export const CheckCircleIcon = icon(["m8 12 3 3 5-6"], <circle cx="12" cy="12" r="9" />);
export const XCircleIcon = icon(["m9 9 6 6M15 9l-6 6"], <circle cx="12" cy="12" r="9" />);
export const UploadIcon = icon(["M12 16V5M7 10l5-5 5 5", "M5 20h14"]);
export const MailIcon = icon(["M3 6h18v12H3z", "m3 7 9 6 9-6"]);
export const AlertIcon = icon(["M12 8v5M12 16.5h.01"], <circle cx="12" cy="12" r="9" />);
export const InfoIcon = icon(["M12 11v6M12 7.5h.01"], <circle cx="12" cy="12" r="9" />);
export const ChevronUpIcon = icon(["m6 15 6-6 6 6"]);
export const ArrowLeftIcon = icon(["M19 12H5M11 6l-6 6 6 6"]);
export const PlayIcon = icon(["M8 5v14l11-7z"]);
export const PhoneIcon = icon(["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"]);
export const MapPinIcon = icon(["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"], <circle cx="12" cy="9.5" r="2.5" />);
export const StarIcon = icon(["m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"]);
export const CopyIcon = icon(["M9 9h11v11H9z", "M5 15H4V4h11v1"]);
export const ClockIcon = icon(["M12 7v5l3 2"], <circle cx="12" cy="12" r="9" />);
export const TruckIcon = icon(["M3 6h11v10H3zM14 10h4l3 3v3h-7"], <><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>);
export const CartIcon = icon(["M3 4h2.5l2.2 10.5h10.6L20.5 8H6.6"], <><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></>);
export const CardIcon = icon(["M3 6h18v12H3z", "M3 10h18M7 15h3"]);
export const HomeIcon = icon(["M4 11 12 4l8 7", "M6 9.5V20h12V9.5", "M10 20v-5h4v5"]);
export const BuildingIcon = icon(["M5 21V4h10v17", "M15 9h4v12", "M3 21h18", "M8 8h4M8 12h4M8 16h4"]);
export const WrenchIcon = icon(["M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2z"]);
export const FuelIcon = icon(["M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16", "M3 21h13", "M5 10h9", "M14 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"]);
export const PaletteIcon = icon(["M12 3a9 9 0 0 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.4-1.3-1.9-1.3-3.1 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z"], <><circle cx="7.5" cy="11" r=".8" /><circle cx="10" cy="7" r=".8" /><circle cx="15" cy="7.5" r=".8" /></>);
export const FilePlusIcon = icon(["M6 3h8l4 4v14H6z", "M14 3v4h4", "M12 11v6M9 14h6"]);
export const ShieldCheckIcon = icon(["M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z", "m9 12 2 2 4-4"]);
export const GiftIcon = icon(["M4 9h16v4H4zM5 13h14v8H5z", "M12 9v12", "M12 9S10.5 4 8 4.5 7 9 12 9zM12 9s1.5-5 4-4.5S17 9 12 9z"]);
export const SaveIcon = icon(["M5 4h11l3 3v13H5z", "M8 4v5h7V4M8 20v-6h8v6"]);
export const DropIcon = icon(["M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"]);
