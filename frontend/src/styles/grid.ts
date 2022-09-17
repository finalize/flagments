export type Content = {
  components: {
    header: {
      isVisible: boolean
    }
    leftSidebar: {
      isVisible: boolean
    }
    rightSidebar: {
      isVisible: boolean
    }
  }
  gridTemplateRows: string
  gridTemplateColumns: string
  templateAreas: string
  pattern: string[]
}

export type Template = {
  [key: string]: Content
}

export const Template: Template = {
  a: {
    components: {
      header: {
        isVisible: true,
      },
      leftSidebar: {
        isVisible: true,
      },
      rightSidebar: {
        isVisible: true,
      },
    },
    pattern: ["header", "leftSidebar", "rightSidebar"],
    gridTemplateRows: "48px 1fr",
    gridTemplateColumns: "256px 1fr 256px",
    templateAreas: `"header      header header"
                    "leftSidebar flow   rightSidebar"`,
  },
  b: {
    components: {
      header: {
        isVisible: true,
      },
      leftSidebar: {
        isVisible: false,
      },
      rightSidebar: {
        isVisible: false,
      },
    },
    pattern: ["header"],
    gridTemplateRows: "48px 1fr",
    gridTemplateColumns: "1fr",
    templateAreas: `"header"
                    "flow"`,
  },
  c: {
    components: {
      header: {
        isVisible: true,
      },
      leftSidebar: {
        isVisible: false,
      },
      rightSidebar: {
        isVisible: true,
      },
    },
    pattern: ["header", "rightSidebar"],
    gridTemplateRows: "48px 1fr",
    gridTemplateColumns: "1fr 256px",
    templateAreas: `"header header"
                    "flow   rightSidebar"`,
  },
  d: {
    components: {
      header: {
        isVisible: true,
      },
      leftSidebar: {
        isVisible: true,
      },
      rightSidebar: {
        isVisible: false,
      },
    },
    pattern: ["header", "leftSidebar"],
    gridTemplateRows: "48px 1fr",
    gridTemplateColumns: "256px 1fr",
    templateAreas: `"header      header"
                    "leftSidebar flow"`,
  },
  e: {
    components: {
      header: {
        isVisible: false,
      },
      leftSidebar: {
        isVisible: true,
      },
      rightSidebar: {
        isVisible: true,
      },
    },
    pattern: ["rightSidebar", "leftSidebar"],
    gridTemplateRows: "1fr",
    gridTemplateColumns: "256px 1fr 256px",
    templateAreas: `"leftSidebar flow rightSidebar"`,
  },
  f: {
    components: {
      header: {
        isVisible: false,
      },
      leftSidebar: {
        isVisible: true,
      },
      rightSidebar: {
        isVisible: false,
      },
    },
    pattern: ["leftSidebar"],
    gridTemplateRows: "1fr",
    gridTemplateColumns: "256px 1fr ",
    templateAreas: `"leftSidebar flow"`,
  },
  g: {
    components: {
      header: {
        isVisible: false,
      },
      leftSidebar: {
        isVisible: false,
      },
      rightSidebar: {
        isVisible: true,
      },
    },
    pattern: ["rightSidebar"],
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 256px",
    templateAreas: `"flow rightSidebar"`,
  },
  h: {
    components: {
      header: {
        isVisible: false,
      },
      leftSidebar: {
        isVisible: false,
      },
      rightSidebar: {
        isVisible: false,
      },
    },
    pattern: [],
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
    templateAreas: `"flow"`,
  },
}
