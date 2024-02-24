const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');


const dirCodes = path.join(__dirname, "codes");
if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}
const generateFile = async (content,file) => {
    // const jobId = uuid();
    // const filename = `${jobId}.${format}`
    const filename = file
    const filepath = path.join(dirCodes, filename);
    await fs.writeFileSync(filepath, content);
    return filepath;
    
};
module.exports = {
    generateFile,
};  
