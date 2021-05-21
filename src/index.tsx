import  React  from 'react';
import LocalApi from './localApi/index';
import codePush from 'react-native-code-push'

const Index = () => {
    
    return (
      <LocalApi/>
    );
  };

const codePushOption = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
};

  export default codePush(codePushOption) (Index);