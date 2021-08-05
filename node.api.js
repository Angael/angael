export default pluginOptions => ({
    webpack: (current, state) => {
        // current.resolve.alias
        // console.log('resolve', current.resolve);
        // console.log('current', current);
        // console.log('state', state)
        return current;
    }
})
