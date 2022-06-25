import axios from "axios";

const useAdd = async (url, data) => {
    var response;

    await axios.post(url, data).then((res) => {
        response = res;
    });

    return response;
};

export default useAdd;
