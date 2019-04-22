const compose = (...func) => (component) => {
    return func.reduceRight((prevResult, fn) => {
        return fn(prevResult);
    }, component);
};

export default compose;