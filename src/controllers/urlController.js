const fs = require('fs')
const ytdl = require('ytdl-core');

const download = (req, res) => {

    try {

        const url = req.query.url;
        const fileStream = fs.createWriteStream('video.mp4');
        
        // await ytdl.getInfo(url);
        
        ytdl(url, { format: 'mp4' }).on('progress', (chunkLength, downloaded, total) => {

            const percent = downloaded / total * 100;
            console.log(`Downloaded ${percent.toFixed(2)}%`);

        }).on('error', (error) => {

            return res.status(500).json({ mensagem: error.message });

        })
        .on('end', () => {
            console.log('Download concluído!')    
        })
        .pipe(fileStream);

        return res.status(200).send();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    } 

};

module.exports = {
    download
}