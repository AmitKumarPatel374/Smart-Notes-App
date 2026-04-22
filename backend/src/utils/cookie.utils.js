
const getCookiesOptions=()=>{
   const isProduction = process.env.NODE_ENV === 'production';

   return{
    httpOnly:true,
    secure:isProduction,
    sameSite:isProduction ? 'None':"lax",
    maxAge: 60 * 60 * 1000, // 1 hour
   }
}

module.exports ={getCookiesOptions}