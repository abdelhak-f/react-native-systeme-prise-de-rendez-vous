const rendezvous =require ('../model/Add-Rdv.model');


exports.postRdv = async (req,res) =>{
    const rendezvous = new Employee({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone, 
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position
    })
    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
      } catch (error) {
        res.status(400).json({ massage: error.message });
      }
}