export const renderErrors = ({status_code, status_message})=> (`
    <div class = "error">
        <h2>Status code: ${status_code}</h2>
        <p>Status message: ${status_message}</p>
    </div>
`);