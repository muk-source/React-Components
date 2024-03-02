const explorer = [
  {
    name: "root",
    children: [
      {
        name: "public",
        children: [
          {
            name: "folder-view.js",
          },
          {
            name: "hasOwnProperty.js",
          },
          {
            name: "components",
            children: [
              {
                name: "innermost",
                children: [],
              },
              {
                name: "file-1.ts",
              },
              {
                name: "file-2.ts",
              },
            ],
          },
        ],
      },
      {
        name: "src",
        children: [
          {
            name: "index.html",
          },
          {
            name: "index.js",
          },
          {
            name: "styles.css",
          },
        ],
      },
      {
        name: "package.json",
      },
    ],
  },
];

export default explorer;
