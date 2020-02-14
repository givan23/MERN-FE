export const testPropsAreEqual = (prevMovie, nextMovie) => {
    return prevMovie.testProps === nextMovie.testProps
        && prevMovie.isTrue === nextMovie.isTrue;
};