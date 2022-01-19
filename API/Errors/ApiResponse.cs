namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message=null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(StatusCode) ;
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made.",
                401 => "Autherized, you are not.",
                404 => "Not found" ,
                500 => "We are sore there is an internal server error.",
                _ => null
            };

        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

    }
}
