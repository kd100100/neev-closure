import axios from "axios";

const useDelete = async (url) => {
    var response;

    await axios.delete(url).then((res) => {
        response = res;
    });

    return response;
};

export default useDelete;
