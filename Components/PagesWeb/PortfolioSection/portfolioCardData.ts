

export const portfolioCardData: {
  id: string;
  // If internal or extrenal don't exist then "" in object
  internalLink: string;
  externalLink: string;
  projectName: string;
  projectImage: string;
  projectImageAltText: string;
  backgroundImage?: string;
  backgroundImageAltText?: string;
  backgroundColourId?: string;
}[] = [
  {
    id: "externalLink",
    internalLink: "",
    externalLink: "https://www.reverberationfest.com/",
    projectName: "Reverberation Festival",
    projectImage: "/static/portrait.png",
    projectImageAltText: "This is the alt text",
    backgroundImage: "Background image here",
    backgroundColourId: "black",
  },
];
