module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessTypeChecking: false,
      builderOptions: {
        asar: true,
        extraResources: [
          {
            from: `dist_locales`,
            to: `locales`
          },
          {
            from: `icon.ico`,
            to: `icon.ico`
          }
        ],
        win: {
          icon: "icon.ico",
          target: [
            {
              target: "nsis",
              arch: ["x64"] //"ia32"
            }
          ]
        },
        nsis: {
          installerIcon: "icon.ico",
          oneClick: false,
          perMachine: false
        }
      },
      externals: ["iohook"],
      // 这一步还蛮重要的，不然就会报错
      nodeModulesPath: ["./node_modules"]
    }
  }
};
