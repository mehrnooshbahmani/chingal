import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const api = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Accept-Language': 'fa-IR',
        client: 'web',
    },
});

api.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('access-token');

        if (token && config.headers) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        void Promise.reject(error);
    },
);

api.interceptors.response.use(
    response => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        const token = localStorage.getItem('access-token');

        if (
            error.response &&
            error?.response?.status === 401
        ) {
            try {
                if (error.config.url.includes('refreshtoken')) {
                    throw new Error('refresh token 401');
                }

                return api(originalRequest);
            } catch (_error) {
                if (error.config.url.includes('refreshtoken')) {
                    localStorage.clear();
                    window.location.replace(window.location.origin + '/login');
                }
            }
        }
        return Promise.reject(error);
    },
);
const request = {
    get: <T>(
        endpoint: string,
        options: AxiosRequestConfig = {},
    ): Promise<AxiosResponse<T>> => {
        return api.get(endpoint, options);
    },
    post: (
        endpoint: string,
        data?: unknown,
        options?: AxiosRequestConfig,
    ): Promise<AxiosResponse> => {
        return api.post(endpoint, Object.assign({}, data), options);
    },
    patch: (
        endpoint: string,
        data?: unknown,
        options?: AxiosRequestConfig,
    ): Promise<AxiosResponse> => {
        return api.put(endpoint, Object.assign({}, data), options);
    },
    delete: (
        endpoint: string,
        options?: AxiosRequestConfig,
    ): Promise<AxiosResponse> => {
        return api.delete(endpoint, options);
    },
};

export default request;
