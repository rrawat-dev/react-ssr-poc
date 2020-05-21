export default function fullpageLoader(fullpageLoader = false, action) {
    switch(action.type) {
        case 'SHOW_FULLPAGE_LOADER':
            return action.payload;
        default:
            return fullpageLoader;
    }
}