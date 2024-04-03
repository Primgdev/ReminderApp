import http from './utils/http';

import * as interceptors from './commons/interceptors';

function initInterceptors(){
    http.interceptors.request.use(interceptors.authorizationInterceptor);

    http.interceptors.response.use(
        response => response,
        interceptors.unauthorizedResponseHandlerInterceptor
    )
}

export default () => {
    initInterceptors();
}