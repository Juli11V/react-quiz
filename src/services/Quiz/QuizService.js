import { urls } from "../../urls";

export default class QuizService {

    constructor(token) {
        this.token = token;
    }

    request(url, method="GET", data=null) {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlVkU3BnejdxNnJtX0dsdXdnZVpnOCJ9.eyJpc3MiOiJodHRwczovL2Rldi0wa3JybXNybWFiMHNneHgwLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJNSlRsNkI3SFVLSHBYNTY3S0ZKWGp0RmtlSXFzRmZUbEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly90ZXN0LWFwaS8iLCJpYXQiOjE3MDgzNTQzNjMsImV4cCI6MTcwODQ0MDc2MywiYXpwIjoiTUpUbDZCN0hVS0hwWDU2N0tGSlhqdEZrZUlxc0ZmVGwiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ihv03gU2L1SdWT21FJgfrmPwiQSizfbaFujbeFOqNSQ07C5KUr5Ck2ZX5wuq0S8rTaoMYUweCmorbaLEtdg1D7o4t4_AhT87RZoFQaUx5xhitqCRLJ7JZec2lfu-pVunPjmxBuoT65QDQiCyDlIZp6K4-sZNRXwQC0LFXVcqvpF3ePPe1L8-iDWHlgt3F0IyHERZB7gEbhXvidZPkh1gXQkv2_a1aeiCxAj9f9ZdK1gU5yGK0NyUuWnMQzYtzqLgQWOYPMJFrnLZvyY6U2UXJDbiX0KqrSIJsaMT378iEAxfgHOhjbduJ6Y7Qko1ox9mUUR3rlrFMOpGKxELOEo9Sg",
            },
            method: method,
        }
        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(url, options);
    }

    get() {
        const method = 'GET';
        let url = urls.quizEndpoint;

        return this.request(url, method).then(res => res.json());
    }

}

