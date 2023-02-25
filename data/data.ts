import mooreThumbnail from "@/public/robertmoore.png";
import mooreImageOne from "@/public/mooreOne.png";
import mooreImageTwo from "@/public/mooreTwo.png";
import mooreImageThree from "@/public/mooreThree.png";
import ocrThumbnail from "@/public/ocrThumbnail.png";
import ocrOne from "@/public/ocrOne.png";
import ocrTwo from "@/public/ocrTwo.png";
import notificationThumbnail from "@/public/notifications.jpg";
import notificationTwo from "@/public/notifications.png";
import calculatorThumbnail from "@/public/react-calculator.png";
import introSectionThumbnail from "@/public/intro-section.png";

export const workData = [
  {
    id: "robertmoore",
    thumbnail: mooreThumbnail,
    title: "RobertMooreFoundation",
    description:
      "The Robert Moore Foundation is a non-profit focused on providing grants for both small business and other non-profit organizations",
    stack: "react",
    link: "https://robertmoorefoundation.org",
    images: [mooreImageOne, mooreImageTwo, mooreImageThree],
  },

  {
    id: "extract",
    thumbnail: ocrThumbnail,
    title: "Extract",
    description:
      "Extract is a Text Recognition app that detects real time text from an image, this app was built with javascript and is still under improvement",
    stack: "javascript",
    link: "https://storied-narwhal-66cb03.netlify.app",
    images: [ocrOne, ocrTwo],
  },
];

export const personalData = [
  {
    id: "notifications-page",
    thumbnail: notificationThumbnail,
    title: "Notifications Page | Frontend Mentor Project",
    description: "This is a mini frontent mentor project",
    stack: "html, css, javascript",
    link: "https://thecode-master-sy.github.io/notifications-page/",
    images: [notificationThumbnail, notificationTwo],
  },
  {
    id: "react-calculator",
    thumbnail: calculatorThumbnail,
    title: "React Calculator",
    stack: "react",
    description: "This is also a mini personal project, Yo!!",
    link: "https://majestic-cheesecake-72637f.netlify.app",
    images: [calculatorThumbnail],
  },
  {
    id: "Intro-Section-with-navigation",
    thumbnail: introSectionThumbnail,
    title: "Intro-Section | Frontend Mentor Project",
    description: "This is also a mini personal project Yo!!",
    stack: "html, css, javascript",
    link: "https://thecode-master-sy.github.io/intro-section-with-drop-down-navigation/",
    images: [introSectionThumbnail],
  },
];
