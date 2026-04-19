const names = [
  "Waleed Hussain",
  "Waleed Hussain Portfolio",
  "Waleed Hussain Dev",
  "WALEED.HUSSAIN.DEV",
];

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Creative Developer",
  "Freelance Web Developer",
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Web Development",
  "Responsive Design",
];

const projects = [
  "Velva Ecom Website",
  "Areeha Portfolio Website",
  "To-Do App",
  "Calculator App",
];

const locations = [
  "Pakistan",
  "Punjab",
  "Remote",
  "Worldwide",
];

const longTail = [
  "Hire Web Developer in Pakistan",
  "Best Web Developer Portfolio",
  "Freelance Web Developer Pakistan",
  "Frontend Developer for hire",
  "Where Code Meets Creativity",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
