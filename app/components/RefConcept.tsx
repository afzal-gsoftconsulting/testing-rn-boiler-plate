import {useEffect, useRef, useState} from 'react';
import {Text} from 'react-native';

const RefConcept = () => {
  const [val, setVal] = useState(1);
  const reff = useRef(val);
  //   console.log(reff.current);
  return (
    <>
      <Text
        onPress={() => {
          setVal(4);
          reff.current = 2;
        }}>
        {val + '' + reff?.current}
      </Text>
    </>
  );
};

export default RefConcept;
