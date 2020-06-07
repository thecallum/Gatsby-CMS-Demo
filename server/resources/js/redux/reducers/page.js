import {
    PAGE_LOAD_NEW,
    PAGE_LOAD_SUCCESS,
    PAGE_FOCUS_COMPONENT,
    PAGE_DELETE_COMPONENT,
    PAGE_DELETE,
    PAGE_DELETE_START,
    PAGE_SHOW_COMPONENT_SIDEBAR,
    PAGE_ADD_COMPONENT,
    PAGE_UPDATE_START,
    PAGE_UPDATE_SUCCESS,
    PAGE_UPDATE_PROPERTY,
    PAGE_UPDATE_STATE,
    PAGE_UPDATE_PROP
} from "../actionTypes/page";

const initialState = {
    loading: false,

    id: null,

    properties: {
        name: "",
        slug: ""
    },
    jsonContent: [],

    error: null,

    focussedComponentId: null,

    showComponentSidebar: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PAGE_LOAD_NEW: {
            return {
                ...initialState,
                loading: true
            };
        }

        case PAGE_LOAD_SUCCESS: {
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        }

        case PAGE_FOCUS_COMPONENT: {
            return {
                ...state,
                focussedComponentId: action.payload.index
            };
        }

        case PAGE_DELETE_COMPONENT: {
            return {
                ...state,
                focussedComponentId: null,
                jsonContent: state.jsonContent.filter(
                    (component, componentIndex) => {
                        return action.payload.index !== componentIndex;
                    }
                )
            };
        }

        case PAGE_DELETE_START: {
            return {
                ...initialState,
                id: state.id,
                loading: true
            };
        }

        case PAGE_DELETE: {
            return initialState;
        }

        case PAGE_SHOW_COMPONENT_SIDEBAR: {
            return {
                ...state,
                showComponentSidebar: action.payload.show
            };
        }

        case PAGE_ADD_COMPONENT: {
            return {
                ...state,
                jsonContent: [...state.jsonContent, action.payload.schema]
            };
        }

        case PAGE_UPDATE_START: {
            return {
                ...state,
                loading: true
            };
        }

        case PAGE_UPDATE_SUCCESS: {
            return {
                ...state,
                loading: false,
                name: action.payload.name,
                slug: action.payload.slug,
                jsonContent: action.payload.jsonContent
            };
        }

        case PAGE_UPDATE_PROPERTY: {
            return {
                ...state,
                properties: {
                    ...state.properties,
                    [action.payload.key]: action.payload.value
                }
            };
        }

        case PAGE_UPDATE_PROP: {
            return {
                ...state,
                jsonContent: state.jsonContent.map((component, index) => {
                    if (action.payload.componentIndex !== index)
                        return component;

                    const newProps = {
                        ...component.props,
                        [action.payload.key]: {
                            ...component.props[action.payload.key],
                            value: action.payload.value
                        }
                    };

                    return {
                        ...component,
                        props: newProps
                    };
                })
            };
        }

        case PAGE_UPDATE_STATE: {
            return {
                ...state,
                jsonContent: state.jsonContent.map((component, index) => {
                    if (action.payload.componentIndex !== index)
                        return component;

                    const newState = {
                        ...component.state,
                        [action.payload.key]: action.payload.value
                    };

                    return {
                        ...component,
                        state: newState
                    };
                })
            };
        }

        default: {
            return state;
        }
    }
};
