import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SessionInterceptor } from './session-interceptor';

export const InterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true }
];
