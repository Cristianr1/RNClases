import { createNavigationReducer } from 'react-navigation-redux-helpers';

import AppNavigator from 'cascos/src/app-navigator'

const navigationReducer = createNavigationReducer(AppNavigator);
export default navigationReducer;