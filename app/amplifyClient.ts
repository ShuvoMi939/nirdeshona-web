import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';  // Adjust this path if aws-exports is located somewhere else

Amplify.configure(awsExports);
