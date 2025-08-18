declare module "react-chrono" {
  export interface TimelineItemModel {
    title?: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string;
    media?: {
      type: "IMAGE" | "VIDEO" | "TEXT";
      source: {
        url?: string;
        text?: string;
      };
    };
  }

  export interface ChronoProps {
    items: readonly TimelineItemModel[];
    mode?: "VERTICAL" | "HORIZONTAL" | "VERTICAL_ALTERNATING";
    theme?: {
      // Base colors
      cardBgColor?: string;
      toolbarBgColor?: string;
      toolbarBtnBgColor?: string;

      // Enhanced dark mode properties
      iconColor?: string; // Bright blue for icons
      buttonHoverBgColor?: string; // Gray hover
      buttonActiveBgColor?: string; // Orange active state
      buttonActiveIconColor?: string; // Dark icon on orange

      // Borders and effects
      buttonBorderColor?: string;
      buttonHoverBorderColor?: string;
      shadowColor?: string;
      glowColor?: string;

      // Search and dark toggle
      searchHighlightColor?: string;
      darkToggleActiveBgColor?: string;
      darkToggleActiveIconColor?: string;
    };
    fontSizes?: {
      cardSubtitle?: string;
      cardText?: string;
      cardTitle?: string;
      title?: string;
    };
    classNames?: {
      card?: string;
      cardMedia?: string;
      cardSubTitle?: string;
      cardTitle?: string;
      cardText?: string;
      title?: string;
    };
    cardHeight?: number;
    useReadMore?: boolean;
    hideControls?: boolean;
    disableNavOnKey?: boolean;
    scrollable?: {
      scrollbar?: boolean;
    };
  }

  export const Chrono: React.FC<ChronoProps>;
}
