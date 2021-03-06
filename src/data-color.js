export default {
  name: "example1",
  color: "#FFF",
  children: [
    {
      name: "example2",
      color: "#C2E358",
      children: [
        {
          name: "example3",
          color: "#9ED763",

          children: [
            {
              name: "example4",
              color: "#2C9E4B",
              size: 89,
            },
            {
              name: "example5",
              color: "#2C9E4B",
              size: 10,
            },
            {
              name: "example6",
              color: "#2C9E4B",
              size: 40,
              children: [
                {
                  name: "example66",
                  color: "#2C9E4B",
                  size: 10,
                },
              ],
            },
          ],
        },
        {
          name: "example7",
          color: "#9ED763",
          size: 63,
        },
        {
          name: "example8",
          color: "#9ED763",
          size: 18,
        },
      ],
    },
    {
      name: "example9",
      color: "#F78608",

      children: [
        {
          name: "example10",
          color: "#EE3711",
          size: 40,
        },
        {
          name: "example11",
          color: "#EE3711",
          size: 2,
        },
        {
          name: "example12",
          color: "#EE3711",
          size: 50,
          children: [
            {
              name: "example13",
              color: "#E6172F",
              size: 20,
            },
          ],
        },
      ],
    },
  ],
};
