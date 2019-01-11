
const postData = (data) => {
    return {
        type: 'post_data',
        payload: data
    }
}
export default postData;


export const getData = (data) => {
    return {
        type: 'get_lists',
        payload: data
    }
}

export const selectedItem = (data) => {
    return {
        type: 'get_selectedItem',
        payload: data
    }
}
