
export const GetMovie = async() => {
    try{
        return await fetch("")
        .then(res => res.json())
    }
    catch(eror){console.log(eror)}
}