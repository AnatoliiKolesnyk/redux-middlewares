export default function({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload.then(response => {
            dispatch({ ...action, payload: response })
        });
    };
}
