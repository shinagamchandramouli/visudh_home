const {v4: uuid} = require('uuid');
const AWS =  require('aws-sdk')


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACESS_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
})

// const uploadSingleImage = ()=>{

// }

const uploadImagesToAws = (files)=> {

    return new Promise(async (resolve)=>{
        
        
        try {
            
            const images = await Promise.all(

                files.map( async (file) => {
                    
                    const title = uuid();
        
                    let params = {
                        Bucket: process.env.AWS_BUCKET_NAME,
                        Key: `${title}.${file.mimetype.split('/')[1]}`,
                        Body: file.data,
                        ContentType: file.mimetype
                    }
                
                    let image =  await new Promise ((resolve,reject)=>{
                            s3.upload(params, (err,data)=> {
                                if(err)  reject(err ? err : 'upload unsuccessful');
                                resolve(data.Location);
                            })
                        })

                    return image;
                    
                })
            )
            resolve(images)

        } catch (error) {
            resolve( [])
        }

    })
}

module.exports = uploadImagesToAws;
