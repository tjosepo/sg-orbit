import { createTheme } from "./createTheme";
import { OrbitTheme } from "./orbitTheme";

export const ShareGateTheme = createTheme({
    name: "sharegate",
    colors: {
        white: "#fff",
        black: "#000",
        gray: "#f9f9f9",
        accent: [
            "#eef3fd",
            "#dbe6fd",
            "#b6c2ef",
            "#95a9f5",
            "#7689fd",
            "#5D65f6",
            "#4B11fd",
            "#362aae",
            "#1f2151",
            "#0d0f1f"
        ],
        light: {
            // Background
            "bg-alias-body": "$gray",
            "bg-alias-surface": "$white",
            "bg-alias-soft-break": "$gray",
            "bg-alias-mid-break": "$neutral-1",
            "bg-alias-hard-break": "$neutral-3",
            "bg-alias-basic": "$neutral-8",
            "bg-alias-basic-hover": "$neutral-9",
            "bg-alias-basic-active": "$neutral-10",
            "bg-alias-basic-transparent": "$transparent",
            "bg-alias-basic-transparent-hover": "$neutral-2",
            "bg-alias-basic-transparent-active": "$neutral-3",
            "bg-alias-static-white": "$white",
            "bg-alias-grey-hover": "$neutral-1",
            "bg-alias-grey-active": "$neutral-3",
            "bg-alias-accent": "$purple-6",
            "bg-alias-accent-hover": "$purple-8",
            "bg-alias-accent-active": "$purple-9",
            "bg-alias-accent-faint": "$purple-1",
            "bg-alias-accent-light": "$purple-2",
            "bg-alias-accent-transparent": "$transparent",
            "bg-alias-accent-transparent-hover": "$purple-1",
            "bg-alias-accent-transparent-active": "$purple-2",
            "bg-alias-alert": "$alert-6",
            "bg-alias-alert-hover": "$alert-8",
            "bg-alias-alert-active": "$alert-9",
            "bg-alias-alert-faint": "$alert-1",
            "bg-alias-alert-light": "$alert-2",
            "bg-alias-alert-transparent": "$transparent",
            "bg-alias-alert-transparent-hover": "$alert-1",
            "bg-alias-alert-transparent-active": "$alert-2",
            "bg-alias-warning": "$warning-3",
            "bg-alias-warning-hover": "$warning-8",
            "bg-alias-warning-active": "$warning-9",
            "bg-alias-warning-faint": "$warning-1",
            "bg-alias-warning-light": "$warning-2",
            "bg-alias-success": "$success-6",
            "bg-alias-success-hover": "$success-8",
            "bg-alias-success-active": "$success-9",
            "bg-alias-success-faint": "$success-1",
            "bg-alias-success-light": "$success-2",
            "bg-alias-transparent": "transparent",
            "bg-alias-input-selection": "$accent-3",
            "bg-alias-underlay": "rgba(31, 33, 81, 0.5)",
            // Border
            "b-alias-low-break": "$neutral-2",
            "b-alias-mid-break": "$neutral-4",
            "b-alias-high-break": "$neutral-6",
            "b-alias-accent": "$purple-6",
            "b-alias-accent-hover": "$purple-8",
            "b-alias-accent-active": "$purple-9",
            "b-alias-alert": "$alert-6",
            "b-alias-alert-hover": "$alert-7",
            "b-alias-alert-active": "$alert-8",
            "b-alias-warning": "$warning-4",
            "b-alias-warning-hover": "$warning-8",
            "b-alias-warning-active": "$warning-9",
            "b-alias-success": "$success-4",
            "b-alias-success-hover": "$success-8",
            "b-alias-success-active": "$success-9",
            // Icon
            "icon-alias-primary": "$neutral-10",
            "icon-alias-primary-hover": "$black",
            "icon-alias-secondary": "$neutral-8",
            "icon-alias-tertiary": "$neutral-6",
            "icon-alias-faint": "$neutral-5",
            "icon-alias-accent": "$purple-6",
            "icon-alias-accent-hover": "$purple-8",
            "icon-alias-alert": "$alert-6",
            "icon-alias-alert-hover": "$alert-8",
            "icon-alias-warning": "$warning-5",
            "icon-alias-success": "$success-6",
            "icon-alias-static-white": "$white",
            "icon-alias-input-placeholder": "$neutral-4",
            // Text
            "text-alias-primary": "$neutral-10",
            "text-alias-primary-hover": "$black",
            "text-alias-secondary": "$neutral-8",
            "text-alias-tertiary": "$neutral-6",
            "text-alias-faint": "$neutral-5",
            "text-alias-accent": "$purple-6",
            "text-alias-accent-hover": "$purple-8",
            "text-alias-alert": "$alert-7",
            "text-alias-warning": "$warning-5",
            "text-alias-success": "$success-6",
            "text-alias-static-white": "$white",
            "text-alias-input-placeholder": "$neutral-4",
            // Focus
            "focus-ring-color-alias-default": "rgba(31, 115, 183, .35)"
        },
        dark: {
            // Background
            "bg-alias-body": "$neutral-10",
            "bg-alias-surface": "$neutral-9",
            "bg-alias-soft-break": "$neutral-10",
            "bg-alias-hard-break": "$neutral-6",
            "bg-alias-mid-break": "$neutral-8",
            "bg-alias-basic": "$neutral-5",
            "bg-alias-basic-hover": "$neutral-6",
            "bg-alias-basic-active": "$neutral-7",
            "bg-alias-basic-transparent": "$transparent",
            "bg-alias-basic-transparent-hover": "$neutral-7",
            "bg-alias-basic-transparent-active": "$neutral-8",
            "bg-alias-static-white": "$white",
            "bg-alias-grey-hover": "$neutral-6",
            "bg-alias-grey-active": "$neutral-7",
            "bg-alias-accent": "$purple-6",
            "bg-alias-accent-hover": "$purple-8",
            "bg-alias-accent-active": "$purple-9",
            "bg-alias-accent-faint": "$purple-9",
            "bg-alias-accent-transparent": "$transparent",
            "bg-alias-accent-transparent-hover": "$purple-8",
            "bg-alias-accent-transparent-active": "$purple-9",
            "bg-alias-accent-light": "$purple-8",
            "bg-alias-alert": "$alert-6",
            "bg-alias-alert-hover": "$alert-8",
            "bg-alias-alert-active": "$alert-9",
            "bg-alias-alert-faint": "$alert-9",
            "bg-alias-alert-light": "$alert-8",
            "bg-alias-alert-transparent": "$transparent",
            "bg-alias-alert-transparent-hover": "$alert-8",
            "bg-alias-alert-transparent-active": "$alert-9",
            "bg-alias-warning": "$warning-3",
            "bg-alias-warning-hover": "$warning-8",
            "bg-alias-warning-active": "$warning-9",
            "bg-alias-warning-faint": "$warning-8",
            "bg-alias-warning-light": "$warning-7",
            "bg-alias-success": "$success-6",
            "bg-alias-success-hover": "$success-8",
            "bg-alias-success-active": "$success-9",
            "bg-alias-success-faint": "$success-9",
            "bg-alias-success-light": "$success-8",
            "bg-alias-transparent": "transparent",
            "bg-alias-input-selection": "$accent-5",
            "bg-alias-underlay": "rgba(31, 33, 81, 0.5)",
            // Border
            "b-alias-low-break": "$neutral-8",
            "b-alias-mid-break": "$neutral-7",
            "b-alias-high-break": "$neutral-5",
            "b-alias-accent": "$purple-6",
            "b-alias-accent-hover": "$purple-7",
            "b-alias-accent-active": "$purple-8",
            "b-alias-alert": "$alert-6",
            "b-alias-alert-hover": "$alert-7",
            "b-alias-alert-active": "$alert-8",
            "b-alias-warning": "$warning-5",
            "b-alias-warning-hover": "$warning-7",
            "b-alias-warning-active": "$warning-8",
            "b-alias-success": "$success-6",
            "b-alias-success-hover": "$success-7",
            "b-alias-success-active": "$success-8",
            // Icon
            "icon-alias-primary": "$white",
            "icon-alias-primary-hover": "$white",
            "icon-alias-secondary": "$neutral-1",
            "icon-alias-tertiary": "$neutral-2",
            "icon-alias-faint": "$neutral-3",
            "icon-alias-accent": "$purple-5",
            "icon-alias-accent-hover": "$purple-8",
            "icon-alias-alert": "$alert-4",
            "icon-alias-alert-hover": "$alert-8",
            "icon-alias-warning": "$warning-3",
            "icon-alias-success": "$success-5",
            "icon-alias-static-white": "$white",
            "icon-alias-input-placeholder": "$neutral-3",
            // Text
            "text-alias-primary": "$white",
            "text-alias-primary-hover": "$white",
            "text-alias-secondary": "$neutral-1",
            "text-alias-tertiary": "$neutral-2",
            "text-alias-faint": "$neutral-3",
            "text-alias-accent": "$purple-5",
            "text-alias-accent-hover": "$purple-6",
            "text-alias-alert": "$alert-6",
            "text-alias-warning": "$warning-3",
            "text-alias-success": "$success-5",
            "text-alias-static-white": "$white",
            "text-alias-input-placeholder": "$neutral-3",
            // Focus
            "focus-ring-color-alias-default": "rgba(53, 144, 221, .35)"
        }
    },
    boxShadows: {
        common: {
            "alias-lifted": "$bs-1",
            "alias-floating": "$bs-2"
        },
        light: [ `
            0px 5px 10px rgba(93, 101, 246, 0.1)
            `, `
            0px 0.1px 0.3px rgba(93, 101, 246, 0.022),
            0px 0.3px 0.7px rgba(93, 101, 246, 0.032),
            0px 0.6px 1.3px rgba(93, 101, 246, 0.04),
            0px 1.1px 2.2px rgba(93, 101, 246, 0.048),
            0px 2.1px 4.2px rgba(93, 101, 246, 0.058),
            0px 5px 10px rgba(93, 101, 246, 0.08);
            `
        ],
        dark: [ `
            0px 5px 10px rgba(93, 101, 246, 0.1)
            `, `
            0px 0.1px 0.3px rgba(93, 101, 246, 0.022),
            0px 0.3px 0.7px rgba(93, 101, 246, 0.032),
            0px 0.6px 1.3px rgba(93, 101, 246, 0.04),
            0px 1.1px 2.2px rgba(93, 101, 246, 0.048),
            0px 2.1px 4.2px rgba(93, 101, 246, 0.058),
            0px 5px 10px rgba(93, 101, 246, 0.08);
            `
        ]
    }
});

export const LegacyTheme: OrbitTheme = {
    ...ShareGateTheme,
    name: "legacy",
    colors: {
        ...ShareGateTheme.colors,
        light: {
            ...ShareGateTheme.colors.light,
            "bg-alias-body": "white"
        },
        dark: {
            ...ShareGateTheme.colors.dark,
            "bg-alias-body": "white"
        }
    },
    boxShadows: {
        common: {
            "alias-lifted": "$bs-1",
            "alias-floating": "$bs-2"
        },
        light: [ `
            0 0.2px 0.6px rgba(0, 0, 0, 0.02),
            0 0.5px 1.3px rgba(0, 0, 0, 0.028),
            0 0.9px 2.5px rgba(0, 0, 0, 0.035),
            0 1.6px 4.5px rgba(0, 0, 0, 0.042),
            0 2.9px 8.4px rgba(0, 0, 0, 0.05),
            0 7px 20px rgba(0, 0, 0, 0.07)
            `, `
            0 0.3px 1.1px rgba(0, 0, 0, 0.017),
            0 0.7px 2.7px rgba(0, 0, 0, 0.024),
            0 1.3px 5px rgba(0, 0, 0, 0.03),
            0 2.2px 8.9px rgba(0, 0, 0, 0.036),
            0 4.2px 16.7px rgba(0, 0, 0, 0.043),
            0 10px 40px rgba(0, 0, 0, 0.06)
            `
        ],
        dark: [ `
            0 0.2px 0.6px rgba(0, 0, 0, 0.056),
            0 0.5px 1.3px rgba(0, 0, 0, 0.081),
            0 0.9px 2.5px rgba(0, 0, 0, 0.1),
            0 1.6px 4.5px rgba(0, 0, 0, 0.119),
            0 2.9px 8.4px rgba(0, 0, 0, 0.144),
            0 7px 20px rgba(0, 0, 0, 0.2)
            `, `
            0 0.3px 1.1px rgba(0, 0, 0, 0.056),
            0 0.7px 2.7px rgba(0, 0, 0, 0.081),
            0 1.3px 5px rgba(0, 0, 0, 0.1),
            0 2.2px 8.9px rgba(0, 0, 0, 0.119),
            0 4.2px 16.7px rgba(0, 0, 0, 0.144),
            0 10px 40px rgba(0, 0, 0, 0.2)
            `
        ]
    }
};
