import 'dotenv/config';

export default {
  name: 'rate-repository-app',
  // rest of the configuration...
  extra: {
    env: process.env.ENV, // eslint-disable-line no-eval
    apollo_uri: process.env.APOLLO_URI // eslint-disable-line no-eval
  },
};
