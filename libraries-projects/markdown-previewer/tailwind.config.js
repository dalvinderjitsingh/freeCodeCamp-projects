module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"]
      },
      zIndex: {
        100: "100"
      },
      gridTemplateColumns: {
        "1fr2x": "1fr 1fr"
      },
      margin: {
        "10-auto": "10% auto"
      },
      width: {
        "tab-area-w": "calc(50% + 89.172px)",
        "420px": "420px"
      },
      height: {
        "34px": "34px",
        "100vh-133px": "calc(100vh - 133px)"
      },
      maxWidth: {
        "480px": "480px",
        "100vw": "100vw"
      },
      maxHeight: {
        67: "67%"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover"],
      visibility: ["group-hover"],
      zIndex: ["group-hover"],
      opacity: ["group-hover"]
    }
  },
  corePlugins: {
    listStyleType: false,
    fontFamily: false
  }
};
