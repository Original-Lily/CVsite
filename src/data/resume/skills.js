const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages', 'Cyber Security'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools', 'Databases', 'Cloud'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'MS Office',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Adobe Applications',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 1,
    category: ['Tools', 'Web Development', 'Cyber Security', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Science'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow',
    competency: 1,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Haskell',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Web Development', 'Databases', 'Cyber Security'],
  },
  {
    title: 'VueJS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Tools', 'Cyber Security', 'Cloud'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
