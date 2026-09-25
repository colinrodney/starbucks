// x-data="{
//             info: {},
//             isLoading: true,
//             async getInfo() {
//                 this.isLoading = true;

//                 try{
//                     let response = await fetch('https://nodejs-express-server-q5xweay1w-c-renauld-rodney.vercel.app/')
//                     this.info = await response.json()
//                 }

//                 catch(error){
//                     this.info = `Error: ${error.message}`
//                 }

//                 finally{
//                     this.isLoading = false;
//                 }
//             }
//         }"
//         x-init="getInfo()">