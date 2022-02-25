import {demo} from './module';

const doSomething = () => {
  console.log('Third-Party loaded');
  demo(1, 2);
};

export default doSomething;
