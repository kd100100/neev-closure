import axios from "axios";

const useFetch = async (url) => {
    var response;

    await axios.get(url).then((res) => {
        response = res;
    });

    return response;
};

export default useFetch;
