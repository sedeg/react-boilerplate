import * as React from 'react';

import { shallow } from 'enzyme';
import App from '../src/App';

test('App renders without crashing', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");
	expect(appComponent.length).toBe(1);
});
