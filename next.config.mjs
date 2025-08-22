import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // keep SW off in dev; on in prod
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  // you can add other Next config here
};

export default withPWA(nextConfig);

