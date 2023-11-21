/* import dayjs from 'dayjs';
 * Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://github.com/Original-Lily/Site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/Original-Lily/Site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/Original-Lily/Site/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/Original-Lily/Site/network',
  },
  {
    label: 'Number of spoons',
    value: '6',
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/Original-Lily/Site',
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/Original-Lily/Site/graphs/contributors',
  },
];

export default data;
