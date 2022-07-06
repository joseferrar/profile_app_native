import React from 'react';
import MainNavigation from './src/Navigations/MainNavigation';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const App = () => {
  // React.useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       console.log(link);
  //       console.log(link.url);
  //     });
  // }, []);

  return (
    <>
      <MainNavigation />
    </>
  );
};

export default App;
