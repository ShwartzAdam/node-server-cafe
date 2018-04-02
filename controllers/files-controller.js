var fileController = {};

fileController.upload=function(req,res){
    if (!req.files)
    return res.status(400).send('No files were uploaded.');

    console.log(req.files);
    console.log(req.files.imageProfile);
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files['File'];
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname+'/../images/'+sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
}

fileController.download=function(req,res){
    var file = __dirname+'/../images/'+req.params.filename;
    res.download(file); 
}

module.exports = fileController;