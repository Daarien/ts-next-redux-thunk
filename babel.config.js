module.exports = api => {
  api.cache(true)
  return {
    "presets": ["next/babel", "@zeit/next-typescript/babel"],
    "plugins": [
      ["styled-components", { "ssr": true }],
      "inline-react-svg",
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "components": "./src/components",
            "interfaces": "./src/interfaces",
            "store": "./src/store",
            "theme": "./src/theme",
            "utils": "./src/utils",
            "img": "./assets/img/"
          }
        }
      ]
    ]
  }
}
