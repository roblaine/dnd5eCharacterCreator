import Head from 'next/head';

class CustomHead extends React.Component {
  render() {
    return (
      <Head>
        <title>DND Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}

export default CustomHead;
