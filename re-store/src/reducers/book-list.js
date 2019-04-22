const updateBookList = (state, action) => {
    
    if(state === undefined){
        return {
            books: [],
            loading: true,
            loadingImg: true,
            error: null,
        };
    }

    switch(action.type){
        case "FETCH_BOOKS_REQUEST":
            return {
                books: [],
                loading: true,
                loadingImg: true,
                error: null
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                books: action.payload,
                loading: false,
                loadingImg: true,
                error: null
            };
        case "FETCH_IMG_SUCCESS":
            return {
                ...state.bookList,
                loadingImg: false,
            };
        case "FETCH_BOOKS_FAILURE":
            return {
                books: [],
                loading: false,
                loadingImg: false,
                error: action.payload
            };
        default:
            return state.bookList;
    }

};

export default updateBookList;