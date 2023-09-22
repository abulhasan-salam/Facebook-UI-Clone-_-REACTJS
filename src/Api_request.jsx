const Api_request = async (url='',optionobj=null,errorMsg=null) =>

{
    try
    {
        const res = await fetch(url,optionobj) 
        if(!res.ok) throw Error ('Reload the page')
    }
    catch
    {
         errorMsg = err.Message

    }
    finally
    {
        return errorMsg
    }
}
export default Api_request

































