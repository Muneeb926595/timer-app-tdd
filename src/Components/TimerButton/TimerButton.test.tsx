import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerButton from "./TimerButton"


describe("Timer Button", () => {
    let container: any;

    beforeEach(() => container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue="" />))

    it('should render a div', () => {
        expect(container.find('div').length).toEqual(1);
    });
})