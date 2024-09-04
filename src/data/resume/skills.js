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
    title: 'Ubuntu',
    competency: 4,
    category: ['Tools', 'Operating Systems'],
  },
  {
    title: 'Kali',
    competency: 4,
    category: ['Tools', 'Operating Systems', 'Cyber Security'],
  },
  {
    title: 'Windows',
    competency: 4,
    category: ['Tools', 'Operating Systems'],
  },
  {
    title: 'MacOS',
    competency: 2,
    category: ['Tools', 'Operating Systems'],
  },
  {
    title: 'Nmap',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'MetaSploit Framework',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'WireShark',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'John',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'BurpSuite',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'Nessus',
    competency: 4,
    category: ['Tools', 'Cyber Security'],
  },
  {
    title: 'SQLmap',
    competency: 3,
    category: ['Tools', 'Cyber Security', 'Databases'],
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
  {
    title: 'Swift',
    competency: 1,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Rust',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Cloud', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#f9bbff',
  '#ffb5e5',
  '#ffe7ff',
  '#2deeff',
  '#f9f871',
  '#fe82c7',
  '#8dffdb',
  '#a4ffb8',
  '#cbff93',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
