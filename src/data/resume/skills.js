const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Web Development', 'Languages', 'Java'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Next.JS',
    competency: 1,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages', 'Cyber Security'],
  },
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Web Development', 'Tools', 'Databases', 'Cloud', 'Cyber Security'],
  },
  {
    title: 'mySQL',
    competency: 4,
    category: ['Databases'],
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
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development', 'Cyber Security', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Tensorflow',
    competency: 1,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Machine Learning'],
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
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Web Development', 'Databases', 'Cyber Security', 'Cloud'],
  },
  {
    title: 'VueJS',
    competency: 2,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Tools', 'Machine Learning', 'Cloud', 'Databases'],
  },
  {
    title: 'NoSQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'PosgreSQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'ExpressJS',
    competency: 3,
    category: ['Java', 'Web Development', 'Cyber Security'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Tools'],
  },
  {
    title: 'RunPod',
    competency: 2,
    category: ['Tools', 'Cloud', 'Machine Learning'],
  },
  {
    title: 'Terraform',
    competency: 2,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Cloud'],
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
