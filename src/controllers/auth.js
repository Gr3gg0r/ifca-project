const Joi = require("joi")

const users = [
    {
        id:1,
        email:"shahfiq@mail.com",
        password : "asasdasd"
    },
    {
        id:2,
        email:"shahfq12@mail.com",
        password : "asasdasd"
    },
]

function validateBody(data){
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data);
}

function validatePassword(data) {
    const user = users.find((e)=>e.email==data.email);

    if (!user) return false;
    if (user.password === data.password) return true;
    else return false;
}

const login = (req,res) => {
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send({msg:error.details[0].message});

    const validation = validatePassword(req.body);
    if (!validation) return res.status(400).send({msg:"Email or password is incorrect."});
    
    res.send(true);
}

const register = (req,res)=>{
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send({msg:error.details[0].message});

    const user = users.find((e)=>e.email==req.body.email);
    if (user) return res.status(400).send({msg:"Email already use"});
    
    users.push({
        id:users.length+1,
        email:req.body.email,
        password:req.body.password,
    })

    res.send(true);
}

module.exports = {login,register}