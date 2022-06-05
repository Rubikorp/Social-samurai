import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    //тестируем локальный state
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='hi'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('hi')
    });
    //тестируем появление компоненты
    test("after creation div should be displayed with correct status", () => {
        const component = create(<ProfileStatus status='hi'/>)
        const root = component.root
        let div = root.findByType('div')
        expect(div).not.toBe(1)
    });
    //тестируем появление input
    test("after creation div should not be input creation", () => {
        const component = create(<ProfileStatus status='hi'/>)
        const root = component.root
        expect(()=> {
            let input = root.findByType('input')
        }).toThrow()
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status='hi'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('hi')
    });

    // тестируем появление input во время нажатия
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status='hi'/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')

        expect(input.props.value).toBe('hi')
        expect(() => {root.findByType('span')}).toThrow()
    });

    // тестируем callback закрытия editmode
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='hi' updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);

    })
})
