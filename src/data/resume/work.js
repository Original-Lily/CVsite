/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'MediCare IT',
    position: 'Cheif Technical Lead',
    url: 'https://github.com/Original-Lily/MediCare',
    startDate: '2024-01-04',
    endDate: '2024-05-04',
    summary: `A scalable and Patient-sentric healthcare management system, designed to be user-friendly and secure for both patients
    and healthcare professionals; developed with a team of 5, using agile methodologies and version control systems.`,
    highlights: [
      'Effective use of AWS cloud systems and Zero-Trust access policies to ensure data security and privacy.',
      'Modular & scalable design allowed for easy integration of new features and services such as detailed data logging systems and testing.',
      'Use of Maven and Jenkins CI/CD pipelines to automate testing and deployment processes, ensuring a high level of code quality and reliability.',
      'Enabled the training and skills development of new team members, ensuring they were able to contribute effectively to the project.',
    ],
  },
  {
    name: 'Sneaky Spy',
    position: 'Co-Founder',
    url: 'https://github.com/SneakySpi',
    startDate: '2021-02-01',
    endDate: '2021-05-26',
    summary: `An engaging and helpful cryptography and cyber security education & awareness tool, aimed at ages 12 - 15, includes
    engaging cryptography tools and proof of concept randsomware and keylogger programs developed in a diverse selection of languages`,
    highlights: [
      'Was later intergrated into extra curricular activities after demonstrating its effectiveness',
      'Tools were demonstrated through the use of a phishing payload in order to aid understanding of risks',
      'Teaching fellow students to mitigate these risks was key',
    ],
  },
  {
    name: 'Chosen Hill Tech Support',
    position: 'Short Term IT Specialist',
    url: 'https://chosenhillschool.co.uk/',
    startDate: '2018-06-14',
    endDate: '2018-08-01',
    summary: `Worked alongside IT support in order to mainly develop and enhance my employability skills,
     such as communication, teamwork, time management, and practical problem-solving.`,
    highlights: [
      'Conducted & collaborated with staff on security audits and vulnerability assessments within the schools network infrastructure, identifying and mitigating potential risks.',
      'Responded promptly to IT related incidents/ problems, troubleshooting, and finding satisfactory resolutions, regarding both hardware and software issues.',
      'Maintained an up-to-date inventory of hardware and software on protected devices, ensuring patches and updates remained in line with advancing standards.',
      'Collaborated with external cybersecurity agencies such as ImperoSoftware in order to source and deploy security software or plugins effectively.',
    ],
  },
];

export default work;
