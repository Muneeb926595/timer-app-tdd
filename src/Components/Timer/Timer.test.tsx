import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import App from "../App/App"
import Timer from "./Timer"

describe("App", () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => (container = shallow(<App />)))

    it("should render the Timer Component", () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
    })
})


describe("Timer", () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => (container = shallow(<Timer />)))

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})


describe("Timer", () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => (container = shallow(<Timer />)))

    it("should render instances of the TimerButton component", () => {
        expect(container.find("TimerButton").length).toEqual(3)
    })
})

