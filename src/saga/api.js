// Create fetch API function
export default function apiCall(url, method, raw) {
  // Add error variable
  let error;
  // Get token from local storage
  const token = "Bearer " + window.localStorage.getItem('People-News-Token');

  // Set request data
  let requestData = {
    method: method,
    body: raw,
    headers: {
      "Authorization": token,
      "Content-Type":  "application/json"
    }
  };

  return (
    fetch(url, requestData)
      .then(response => {
        // Control HTTP response status codes
        switch (response.status) {
          case 400:
            // Set error code
            error = 400;
            break;
          case 401:
            error = 401;
            // Remove token and reload app
            if (window.localStorage.getItem('People-News-Token')) {    
              window.localStorage.removeItem('People-News-Token');
              window.location.reload();
            }
            break;
          case 403:
            error = 403;
            // Remove token and reload app
            if (window.localStorage.getItem('People-News-Token')) {    
              window.localStorage.removeItem('People-News-Token');
              window.location.reload();
            }
            break;
          case 500:
            // Set error code
            error = 500;
            break;
          default:
            break;
        }
        return response.json()
      })
      .then(res => {
        // Actions for any HTTP error response codes
        switch (error) {
          case 400:
            const error_400 = { message: res.error };
            throw error_400;
          case 500:
            const error_500 = { message: res.error };
            throw error_500;
          default:
            return res;
        }
      })
  )
};