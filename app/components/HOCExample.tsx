import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const withLogger = WrappedComponent => {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} is about to unmount`);
      };
    }, []);
    const user = 'jjjj';

    return <WrappedComponent {...props} user={user} />;
  };
};

function MyComponent(props) {
  console.log('props', props);

  return (
    <View>
      <Text>Hello, I'm a component</Text>
    </View>
  );
}

const EnhancedComponent = withLogger(MyComponent);

function HOCExample() {
  return (
    <View>
      <EnhancedComponent />
    </View>
  );
}

export default HOCExample;
