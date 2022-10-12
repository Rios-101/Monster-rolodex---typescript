export const getData = async <t> (url: string): Promise<t> =>{
   const data = await fetch(url)
   return await data.json()
}