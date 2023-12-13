import NextNprogress from 'nextjs-progressbar';

const NProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#84D2F6"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500, showSpinner: false }}
    />
  );
};

export default NProgress;
