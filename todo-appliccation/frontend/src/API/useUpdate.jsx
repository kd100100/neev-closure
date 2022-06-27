import axios from "axios";

const useUpdate = async (url, data) => {
    var response;

    await axios.put(url, data).then((res) => {
        response = res;
    });

    return response;
};

export default useUpdate;
