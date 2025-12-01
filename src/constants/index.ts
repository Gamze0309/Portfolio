/**
 * Navbar scroll tracking offset
 * Accounts for navbar height (96px) + buffer to trigger active state before exact position
 */
export const NAVBAR_SCROLL_OFFSET = 150;

/**
 * IntersectionObserver threshold for Lottie animations
 * 0.2 = animation triggers when 20% of element is visible
 */
export const ANIMATION_INTERSECTION_THRESHOLD = 0.2;

/**
 * Role rotation interval in milliseconds
 */
export const ROLE_ROTATION_INTERVAL = 2000;

/**
 * Section IDs for navigation
 */
export const SECTION_IDS = {
  INTRODUCTION: "introduction",
  INFORMATION: "information",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;
